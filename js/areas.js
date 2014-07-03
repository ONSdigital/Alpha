
var BASE_URL = "data/areas.csv";
var areaArray = [];
var regions = {};

var selectedRegion;
var selectedCounty;
var selectedDistrict;

  $(document).ready(function() {
    $("#region").change(function(e) {
      return getRegion(); 
    });
    $("#county").change(function(e) {
      return getCounty(); 
    });
    $("#district").change(function(e) {
      return getDistrict(); 
    });

    loadData();
  });


  function getRegion(){
    var str = "";
    $( "#region option:selected" ).each(function() {
      str += $( this ).text();
    });

    console.log("region: " + str);
    showData(str);
    showCounty(str);
  }

  function getCounty(){
    var str = "";
    $( "#county option:selected" ).each(function() {
      str += $( this ).text();
    });

    console.log("county: " + str);
    //showData(str);
    showDistrict(str);
  }

  function getDistrict(){
    var str = "";
    $( "#district option:selected" ).each(function() {
      str += $( this ).text();
    });

    console.log("district: " + str);
    //showData(str);
    //showCounty(str);
  }



  function showData(str){
     console.log(str);
  }


  function loadData(){

    //population
    $.ajax({
      dataType: "text",
      url: BASE_URL,

      success: function(data) {
        areaArray = $.csv.toObjects(data);
        splitAreas();
      },
      error: function (xhr, textStatus, errorThrown) {
          console.warn("error");
       }
      });
  }


  function splitAreas(  ) {
    console.log("splitAreas");
    //console.log(areaArray);
    //Code,Name,Entity,County,Region

    $.each(areaArray, function (index,value){
      //console.log(index+":" + value.Region);

      if(!regions[value.Region]){
        regions[value.Region] = {};
        regions[value.Region].district = [];
        regions[value.Region].county = {};
        $('#region')
          .append($('<option>', { name : index })
          .text(value.Region)); 
      }

      if( value.Entity === "county" || value.Entity === "unitary" || value.Entity === "London borough"  || value.Entity === "Metropolitan district"  || value.Entity === "NI district" || value.Entity === "Sc district"  || value.Entity === "W district"){
        regions[value.Region].county[value.Name] = {name:value.Name, code:value.Code, entity:value.Entity, district:[] };
      }

      if( value.Entity === "district"  ){
        if(!regions[value.Region].district[value.County]){
          regions[value.Region].district[value.County] = [];
        }
        regions[value.Region].district[value.County].push( {name:value.Name, code:value.Code, entity:value.Entity} );
      }

    });

    console.log(regions);

    createSelectMenu();
  }



  function createSelectMenu(  ) {
    console.log("createSelectMenu");

    $("#areas").empty();
    var selection = "<option>Pick an area...</option>";

    //console.log(regions["East Midlands"]);

   // $.each( regions, function( key, value ) {
   //   console.log( key + ": " + value );
   // })


    showCounty("West Midlands");
  }


  function showCounty(str){
    var showFirstItem = true;
    selectedRegion = str;
    console.log("show county for " + str);
    console.log(regions[str].county);

    var counties = regions[str].county;
    $('#county').empty();
    $('#district').empty();
    $.each(counties, function (index,value){
      //console.log(index+":"+ value);
      //console.log("***********");
      $('#county')
          .append($('<option>', { name : index })
          .text(index)); 
          if(showFirstItem){
            console.log("showFirstItem");
            showFirstItem = false;
            showDistrict(index);
          }
      //console.log("***********");
    });

    //showDistrict("Nottinghamshire");

  }


  function showDistrict(str){

    console.log("show district for " + str);
    //console.log(regions[selectedRegion].district);
    selectedCounty = str;
    var districts = regions[selectedRegion].district[str];
    
    $('#district').empty();

    if(districts){
  //console.log( districts );
      $.each(districts, function (index,value){
        console.log(index+":"+ value.name);
        $('#district')
          .append($('<option>', { name : index })
          .text(value.name)); 
      });
      
    }else{
      console.log("UA so no districts");
      $('#district')
          .append($('<option>', { name : "UA" })
          .text( " - UA: No Districts - " )); 
    }

  }



