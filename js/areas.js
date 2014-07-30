

var areas = (function () {


  var AREA_URL = "data/areas.csv";
  var REGION="region"; 
  var COUNTY="county"; 
  var DISTRICT="district"; 

  //create dictionay obj to stroe parent area
  var parentArea = {};


  var areaArray = [];
  var regions = {};
  var counties = {};
  var districts = {};

  var selectedRegion;
  var selectedCounty;
  var selectedDistrict;



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

      //Code,Name,Entity,County,Region
      $('#region')
            .append($('<option>', { name : -1 })
            .text("Pick a region..."));

      $.each(areaArray, function (index,value){

        if(value.Region !== ""){

          //console.log(value.Name);
          if(!parentArea[value.Name]){
            parentArea[value.Name] = {};
            parentArea[value.Name].level = 0;
          }

          if(!regions[value.Region]){
            regions[value.Region] = {};
            regions[value.Region].district = {};
            regions[value.Region].county = {};
            regions[value.Region].parent = "";
            regions[value.Region].name = value.Region;
            parentArea[value.Name].name = "";
            parentArea[value.Name].level = 0;
           
            $('#region')
              .append($('<option>', { name : index })
              .text(value.Region)); 
          }

          if( value.Entity === "region"  ){
            regions[value.Region].code = value.Code;
          }
          if( value.Entity === "county" || value.Entity === "unitary" || value.Entity === "London borough"  || value.Entity === "Metropolitan district"  || value.Entity === "NI district" || value.Entity === "Sc district"  || value.Entity === "W district"){
            regions[value.Region].county[value.Name] = {name:value.Name, code:value.Code, entity:value.Entity, district:[], parent:value.Region };
            parentArea[value.Name].name = value.Region;
            parentArea[value.Name].level = 1;
          }

          if( value.Entity === "district"  ){
            if(!regions[value.Region].district[value.County]){
              regions[value.Region].district[value.County] = [];
            }
            regions[value.Region].district[value.County].push( {name:value.Name, code:value.Code, entity:value.Entity, parent:value.County} );
            parentArea[value.Name].name = value.County;
            parentArea[value.Name].level = 2;
          }

        }
      });

    }


    function getRegion(){
      var str = "";
      $( "#region option:selected" ).each(function() {
        str += $( this ).text();
      });

      console.log("region: " + str);
      showData( str );
      updateDisplay( str );
      showCounty(str);
    }


    function getCounty(){
      var str = "";
      $( "#county option:selected" ).each(function() {
        str += $( this ).text();
      });

      console.log("county: " + str);
      showData(str);
      updateDisplay( str );
      showDistrict(str);
    }


    function getDistrict(){
      var str = "";
      $( "#district option:selected" ).each(function() {
        str += $( this ).text();
      });

      selectedDistrict = str;
      console.log("district: " + str);
      showData(str);
      updateDisplay( str );
     }


    function showArea(str){
      console.log("showArea: " + str);
      var parent = parentArea[str].name;
      var siblings;

      switch( parentArea[str].level ){
        case 0:
          siblings = regions;
        break;

        case 1:
          siblings = regions[parent].county;
        break;

        case 2:
          var child = str;
          var grandparent = parentArea[ parent ].name;
          siblings = regions[grandparent].district[parent];
        break;
      }
       
      return siblings;
    }


    function showCounty(str){
      var showFirstItem = true;
      selectedRegion = str;
      console.log("show county for " + str);
      console.log(regions[str].county);

      var counties = regions[str].county;
      $('#county').empty();
      $('#district').empty();
      $('#county')
            .append($('<option>', { name : -1 })
            .text("Pick a county...."));

      $.each(counties, function (index,value){
        $('#county')
            .append($('<option>', { name : index })
            .text(index)); 
            if(showFirstItem){
             // console.log("showFirstItem");
              showFirstItem = false;
              showDistrict(index);
            }
      });

    }


    function showDistrict(str){
      console.log("show district for " + str);
      selectedCounty = str;
      var districts = regions[selectedRegion].district[str];
      
      $('#district').empty();
      $('#district')
            .append($('<option>', { name : -1 })
            .text("Pick a district...."));
      if(districts){
        $.each(districts, function (index,value){
          $('#district')
            .append($('<option>', { name : index })
            .text(value.name)); 
        });
        
      }else{
        $('#district')
            .append($('<option>', { name : "UA" })
            .text( " - UA: No Districts - " )); 
      }

    }



    return{
      loadData:loadData,
      showArea:showArea,
      showCounty:showCounty,
      getRegion:getRegion,
      getCounty:getCounty,
      getDistrict:getDistrict
    }
})();
