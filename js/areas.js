

var areas = (function () {

  var AREA_URL = "data/areas.csv";
  var REGION="region";
  var COUNTY="county";
  var DISTRICT="district";

  var areaArray = [];
  var idDictionary = {};

  var regions = {};
  var counties = {};
  var districts = {};



    function loadData(callBack){
      $.ajax({
        dataType: "text",
        url: AREA_URL,

        success: function(data) {
          areaArray = $.csv.toObjects(data);
          splitAreas();

          callBack( regions );
        },
        error: function (xhr, textStatus, errorThrown) {
            console.warn("error");
         }
        });
    }


    function splitAreas(  ) {
      $("#message").text( "Processing Area Data" );

      //code,name,entity,county,region
      $('#region')
            .append($('<option>', { name : -1 })
            .text("Pick a region..."));


      regions["TopLevel"] = {};
      regions["TopLevel"].children = [];
      // loop thru the list and build a dictionary to look up the parent code based on the name
      $.each(areaArray, function (index,value){

          idDictionary[value.name] = value.code;
          if(value.region !== ""){

          if(!regions[value.code]){
            regions[value.code] = {};
            regions[value.code].children = [];
            regions[value.code].parent = "";
            regions[value.code].name = value.region;
            regions[value.code].code = value.code;
            regions[value.code].level = 0;
            regions[value.code].entity = "region";
          }


          }
      });


      $.each(areaArray, function (index,value){

        if(value.region !== ""){

          if( value.entity === "region"  || value.entity === "country" ){
            regions["TopLevel"].children.push( {name:value.name, code:value.code} );

            $('#region').append($('<option>', { name : index })
              .text(value.region).val(value.code));

          }


          if( value.entity === "county" || value.entity === "unitary" || value.entity === "London borough"  || value.entity === "Metropolitan district"  || value.entity === "met county"  || value.entity === "NI district" || value.entity === "Sc district"  || value.entity === "W district"){
            //console.log("got entity " + value.code + ":: "+ value.name + ":: "+ value.region + ":: "+ idDictionary[value.region]);
            var parent = idDictionary[value.region];

            regions[value.code].name = value.name;
            regions[value.code].code = value.code;
            regions[value.code].entity = value.entity;
            regions[value.code].parent = parent;
            regions[value.code].level = 1;
            //add entity to parent's child list
            regions[parent].children.push( {name:value.name, code:value.code} );
          }


          if( value.entity === "district"  ){
            var parent = idDictionary[value.county];
            var gparent = idDictionary[value.region]

            regions[value.code].name = value.name;
            regions[value.code].code = value.code;
            regions[value.code].entity = value.entity;
            regions[value.code].parent = parent;
            regions[value.code].grandparent = gparent;
            regions[value.code].level = 2;
            //add entity to parent's child list
            regions[parent].children.push( {name:value.name, code:value.code} );
          }

        }
      });

      $('.selectpicker').selectpicker('refresh');

    }


    function getRegion(){
      var str = "";

        $( "#region option:selected" ).each(function() {
          str += $( this ).val();
        });


     // showData( str );
      //updateDisplay( str );
      setArea( str );
      showSummary(str);
      showCounty(str);
    }


    function getCounty(){
      var str = "";

        $( "#county option:selected" ).each(function() {
          str += $( this ).val();
        });


     // showData(str);
      ///updateDisplay( str );
      setArea( str );
      showSummary(str);
      showDistrict(str);
    }


    function getDistrict(){
      var str = "";

      $( "#district option:selected" ).each(function() {
        str += $( this ).val();
      });

      //updateDisplay( str );
      setArea( str );
      showSummary(str);
    }


    function getSiblings(str){
      console.log("get str " + str );

      var parent = regions[str].parent;
      var siblings;

      if(regions[str].level===0){
        siblings = regions["TopLevel"].children;
      }else{
        siblings = regions[parent].children;
      }

      return siblings;
    }


    function getParent(str){
      var parent = regions[str].parent;
      console.log(regions[str] );
      console.log("get str " + str +":" + parent);

      if(parent===""){
        parent = "K02000001";
      }
/*
      if(regions[str].level===0){
        siblings = regions["TopLevel"].children;
      }else{
        siblings = regions[parent].children;
      }*/

      return parent;
    }


    function getRegionType(str){
      return regions[str].entity;
    }

    function showCounty(str){
      var showFirstItem = true;
      var counties = regions[str].children;

      $('#county').empty();
      $('#district').empty();

      $('#county')
            .append($('<option>', { name : -1 })
            .text("Pick a county...."));

      $.each(counties, function (index,value){
        $('#county')
            .append($('<option>', { name : value.name })
            .text(value.name).val(value.code));
            if(showFirstItem){
              showFirstItem = false;
              showDistrict(value.code);
            }
      });
      $('.selectpicker').selectpicker('refresh');
    }


    function showDistrict(str){
      var districts = regions[str].children;

        $('#district').empty();

        if(districts){
        $('#district')
              .append($('<option>', { name : -1 })
              .text("Pick a district...."));
          $.each(districts, function (index,value){
            $('#district')
              .append($('<option>', { name : value.name })
              .text(value.name).val(value.code));
          });

        }else{
          $('#district')
              .append($('<option>', { name : "UA" })
              .text( " - UA: No Districts - " ));
        }
        $('.selectpicker').selectpicker('refresh');

    }



    return{
      loadData:loadData,
      getSiblings:getSiblings,
      getParent:getParent,
      showCounty:showCounty,
      getRegion:getRegion,
      getCounty:getCounty,
      getDistrict:getDistrict,
      getRegionType:getRegionType
    }
})();
