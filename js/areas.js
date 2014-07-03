
var AREA_URL = "data/areas.csv";
var REGION="region"; 
var COUNTY="county"; 
var DISTRICT="district"; 


var areaArray = [];
var regions = {};
var counties = {};
var districts = {};

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

    loadAreaData();
  });


  function getRegion(){
    var str = "";
    $( "#region option:selected" ).each(function() {
      str += $( this ).text();
    });

    console.log("region: " + str);
    showArea( str );
    showCounty(str);
    showTrend(str);
    showComparison(REGION);
  }

  function getCounty(){
    var str = "";
    $( "#county option:selected" ).each(function() {
      str += $( this ).text();
    });

    console.log("county: " + str);
    showArea(str);
    showDistrict(str);
    showTrend(str);
    showComparison(COUNTY);
  }

  function getDistrict(){
    var str = "";
    $( "#district option:selected" ).each(function() {
      str += $( this ).text();
    });

    console.log("district: " + str);
    showArea(str);
    showTrend(str);
    showComparison(DISTRICT);
  }



  function showArea(str){
     console.log(str);
     showData(str);
     
  }


  function loadAreaData(){

    //population
    $.ajax({
      dataType: "text",
      url: AREA_URL,

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


    $('#region')
          .append($('<option>', { name : -1 })
          .text("Pick a region..."));

    $.each(areaArray, function (index,value){
     // console.log(value);
//console.log("region:" + value.CODE + ":" + value.NAME);
/*
    if(value.CODE.indexOf("E12")>-1){
      console.log("region:" + value.CODE + ":" + value.NAME);
    }
    */

      if(!regions[value.Region]){
        regions[value.Region] = {};
        regions[value.Region].district = [];
        regions[value.Region].county = {};
       
        $('#region')
          .append($('<option>', { name : index })
          .text(value.Region)); 
      }

      if( value.Entity === "region"  ){
        regions[value.Region].code = value.Code;
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
    $('#county')
          .append($('<option>', { name : -1 })
          .text("Pick a county...."));

    $.each(counties, function (index,value){
      //console.log(index+":"+ value);
      //console.log("***********");
      $('#county')
          .append($('<option>', { name : index })
          .text(index)); 
          if(showFirstItem){
           // console.log("showFirstItem");
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
    $('#district')
          .append($('<option>', { name : -1 })
          .text("Pick a district...."));
    if(districts){
  //console.log( districts );
      $.each(districts, function (index,value){
        //console.log(index+":"+ value.name);
        $('#district')
          .append($('<option>', { name : index })
          .text(value.name)); 
      });
      
    }else{
      //console.log("UA so no districts");
      $('#district')
          .append($('<option>', { name : "UA" })
          .text( " - UA: No Districts - " )); 
    }

  }


  function showComparison(area){
    console.log("showComparison " + area );

    var displayText = "";
    var localComparisons = [];
    totalCats = [];
    totalData = [];
    comparisonLookUp = [];

    switch (area){
      case REGION:
 console.log(regions);
      //loop thru all the compariosn data
        $.each(comparisons, function (index,value){
          // and check each one to see it is one of the regions
          $.each(regions, function (regionIdx, regionVal){

            if(regionVal.code === value.code){

              console.log("match " + regionVal.code +",  "+ value.code);
              totalCats.push( value.name );
              totalData.push( value.value );
              comparisonLookUp[value.name] = index;
              comparisons.push( {name:index, value: value.population} );
            }
          });

        })
        displayText = "Population Comparison: Regions";

      break;

      case COUNTY:
        counties = regions[selectedRegion].county;

      //loop thru all the compariosn data
        $.each(comparisons, function (index,value){
          // and check each one to see it is one of the regions
          $.each(counties, function (idx, val){
            if(val.code === value.code){
              totalCats.push( value.name );
              totalData.push( value.value );
              comparisonLookUp[value.name] = index;
              comparisons.push( {name:index, value: value.population} );
            }
          });

        })
         displayText = "Population Comparison: Counties & Unitary Authorities";
      break;

      case DISTRICT:
        districts = regions[selectedRegion].district[selectedCounty];
       // console.log(districts);
      //loop thru all the compariosn data
        $.each(comparisons, function (index,value){
         // console.log(  value );
          // and check each one to see it is one of the regions
          $.each(districts, function (idx, val){
            if(val.code === value.code){
              //console.log("got match " + value);
              totalCats.push( value.name );
              totalData.push( value.value );
              comparisonLookUp[value.name] = index;
              comparisons.push( {name:index, value: value.population} );
            }
          });

        })
       displayText = "Population Comparison: Districts";
      break;
    }
    //console.log(displayText);
    $("#popComparison").text( displayText );
    // sort comparison by size
    comparisons.sort(compare);

    barChart = $('#stackedBar').highcharts();
    barChart.series[0].setData( totalData );
    barChart.xAxis[0].setCategories(totalCats);

  }

  function showTrend(str){
   // console.log("show trend " + str);

    var data = areaObj[str].trends;
   // console.log(data);
    barChart = $('#trend').highcharts();
    barChart.series[0].setData( data );



    $("#popTrend").text( "Population Trend for " + str  + ", (2001 to 2013)" );

  }



