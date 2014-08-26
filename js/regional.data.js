
var BASE_URL = "data/change.csv";
var POP_URL = "data/pyramid.csv";
var TREND_URL = "data/population.csv";

var POSTCODE_URL = "//mapit.mysociety.org/postcode/";

var ORANGE ='#FF950E';
var pyramidData;

var changes;
var trend;
var areaObj = {};
var barChart;

var areaCodes = {};
var areaMap = {};
var areaMeasures = {};

var comparisons = [];



var genderChart;
var ageChart;

var lastBar = 0;

var polygons = [];

//create a look up to highlight bar
var comparisonLookUp = {};





function testPostCode () {
  var newPostCode = checkPostCode( $("#postcode").val() );
  if (newPostCode) {
    postcode = newPostCode;
    $("#postcode").val( newPostCode );
    console.log ("Postcode has a valid format")
    var url = POSTCODE_URL + newPostCode;

    loader.setUrl( url );
    console.log("Data URL " + url);
    loader.loadData( parseData );

  } 
  else {
    console.log ("Postcode has invalid format");
  }
}



  function parseData(returned){
    data = returned;
    console.log("parse");
    console.log(data);

    //get lat and lng
    var lat = data.wgs84_lat;
    var lon = data.wgs84_lon;

    var council = data.shortcuts.council;

    var ons_id = data.areas[council].codes.gss;
    console.log("ONS " + ons_id + ": " + areaCodes[ons_id]);

    updateDisplay( areaCodes[ons_id] );
    getBoundaries(ons_id);
    showPoint(lat,lon);
  }


  function updateDisplay(str){
    console.log( "updateDisplay " + str );
    showData(str);
    var siblingList  = areas.showArea( str );
    console.log( siblingList );
    showComparison(siblingList, str);
  }




  function showData(str){
     console.log( "showData " + str );
    var data = areaObj[str];

    
    //call API for map boundary
    //getBoundaries("Newport");
    getBoundaries(data.code);
     console.log( "getBoundaries " + data.code );
     console.log( areaObj );
     console.log( areaObj[str] );
     console.log( areaObj[str].code );
     console.log( areaCodes[str] );
     console.log( str );

    var pc_change = 100 * (data.changes.now - data.changes.previous)/data.changes.now;

    pc_change = Math.round(pc_change*100) / 100;
    var suffix ="";
    if(data.changes.now > data.changes.previous){
      suffix ="+";
    }


    $("#title").text("Demographics: " + str + " (" + suffix + pc_change + "% change from 2011)");
    $("#pop2012").text(data.changes.now );
    $("#pop2011").text( data.changes.previous);
    console.log("AREA:"  + data.area);
    if( isNaN(data.area) || data.area==="" ){
      data.area = "";
      $("#area").text( "Not available" );
      $("#density").text( "Not available" );
    }else{
      $("#area").text( Math.round(data.area) + "km2" );
      $("#density").text( Math.round( 100* data.changes.now/data.area )/100  );
    }


    // direction icon
    $("#popdirection").removeClass("fa-chevron-up");
    $("#popdirection").removeClass("fa-chevron-down");
    var direction = "fa-chevron-up";
    if(data.changes.now < data.changes.previous){
      direction = "fa-chevron-down";
    }
    $("#popdirection").addClass(direction);



    //natural changes
    $("#natural").text( data.changes["natural change"]);
    $("#births").text( data.changes.births);
    $("#deaths").text( data.changes.deaths);

    // direction icon
    $("#changedirection").removeClass("fa-chevron-up");
    $("#changedirection").removeClass("fa-chevron-down");
    var direction = "fa-chevron-up";
    if(data.changes["natural change"]<0){
      direction = "fa-chevron-down";
    }
    $("#changedirection").addClass(direction);


    //uk migration
    $("#uk_in").text( data.changes["Internal Inflow"]);
    $("#uk_out").text( data.changes["Internal Outflow"]);
    $("#uk_net").text( data.changes["Internal Net"]);

    // direction icon
    $("#ukdirection").removeClass("fa-chevron-up");
    $("#ukdirection").removeClass("fa-chevron-down");
    var direction = "fa-chevron-up";
    if(data.changes["Internal Net"]<0){
      direction = "fa-chevron-down";
    }
    $("#ukdirection").addClass(direction);


    //migration
    $("#in").text( data.changes["International Inflow"]);
    $("#out").text( data.changes["International Outflow"]);
    $("#net").text( data.changes["International Net"]);

    // direction icon
    $("#nationaldirection").removeClass("fa-chevron-up");
    $("#nationaldirection").removeClass("fa-chevron-down");
    var direction = "fa-chevron-up";
    if(data.changes["International Net"]<0){
      direction = "fa-chevron-down";
    }
    $("#nationaldirection").addClass(direction);


    //change chart
    pyramid = $('#pyramid').highcharts();

    pyramid.series[1].setData( data.series.female );
    pyramid.series[0].setData( data.series.male );

    var ageData = [["Under 18" , data.ageGroups.u18],["18-64", data.ageGroups.adult],["Over 64", data.ageGroups.over64]];
    var genderData = [ ["Male", data.maleTotal ],["Female", data.femaleTotal] ];

    ageChart.series[0].setData( ageData );
    genderChart.series[0].setData( genderData );



    barChart = $('#trend').highcharts();
    barChart.series[0].setData( data.trends );
    $("#popTrend").text( "Population Trend for " + str  + ", (2001 to 2013)" );

    //console.log(pyramid);
    pyramid.setTitle({text: "Population pyramid for " + str + ", midyear 2012" });
  }






    function showComparison(list, str){

        console.log(list);
      var displayText = "";

      totalCats = [];
      totalData = [];
      comparisonLookUp = [];
      comparisons = [];

      // loop through the siblings and create a list of pop values
      $.each(list, function (index,value){
        console.log(value.name);
        comparisons.push( {name:value.name, value: areaObj[value.name].changes.now} );
      });

      //sort the comparisons by value
      comparisons.sort(compare);

      // loop through sorted list and create chart data
      $.each(comparisons, function (index, value){
        totalCats.push( value.name );
        totalData.push( value.value );
        comparisonLookUp[value.name] = index;
      });



      //TODO Set proper title based on ...
      displayText = "Population Comparison: Regions";
      displayText = "Population Comparison: Counties & Unitary Authorities";
      displayText = "Population Comparison: Districts";
      displayText = "Population Comparison";

      $("#popComparison").text( displayText );
 

      barChart = $('#stackedBar').highcharts();
      barChart.series[0].setData( totalData );
      barChart.xAxis[0].setCategories(totalCats);

      lastBar = comparisonLookUp[str];

      if(lastBar){
        var highlight = barChart.series[0].data[ lastBar ];
        barChart.series[0].data[lastBar].update( {color:ORANGE} );
      }

    }







  function loadPopData(){
    $("#message").text( "Loading Population Data" );

    $.ajax({
      dataType: "text",
      url: BASE_URL,

      success: function(data) {
        changes = $.csv.toObjects(data);
        checkAllData();
      },
      error: function (xhr, textStatus, errorThrown) {
          console.warn("error");
        }
      });


    $.ajax({
      dataType: "text",
      url: TREND_URL,

      success: function(data) {
        trend = $.csv.toObjects(data);
        checkAllData();
      },
      error: function (xhr, textStatus, errorThrown) {
          console.warn("error");
        }
      });

    //population
    $.ajax({
      dataType: "text",
      url: POP_URL,

      success: function(data) {
        pyramidData = $.csv.toObjects(data);
        checkAllData();
      },
      error: function (xhr, textStatus, errorThrown) {
          console.warn("error");
       }
      });

  }





function checkAllData(  ) {
  var now = Date.now();


  $("#message").text( "Checking data... "  );

  if(pyramidData && changes && trend){
    processData()
  }
}



function processData(  ) {


$("#areas").empty();
  var selection = "<option>Pick an area...</option>";


  $.each(pyramidData, function (index,value){

    //TODO: set names in select here
    //console.log(value)
    var name = value.name;
    areaCodes[value.code] = name;
    // create obj for each area
    areaObj[name] = {};

    //create array for population
    areaObj[name].code = value.code;
    areaObj[name].male = [];
    areaObj[name].female = [];
    areaObj[name].changes = {};
    areaObj[name].series = {};
    areaObj[name].series.male = [];
    areaObj[name].series.female = [];
    areaObj[name].ageGroups = { u18:parseInt(value.u18,10) , adult:parseInt(value.adult,10) , over64:parseInt(value.over64,10) };

    for ( var i=0; i<19;i++){
      areaObj[name].series.male[i] = parseInt(value["male"+i],10) ;
      areaObj[name].series.female[i] = -parseInt(value["male"+i],10) ;
    }

    areaObj[name].maleTotal = parseInt( value.males,10);
    areaObj[name].femaleTotal = parseInt( value.females,10);
    selection += "<option>" + name + "</option";

    $('#areas')
          .append($('<option>', { name : index })
          .text(name)); 

  })


  //$("#areas").empty();
  //$("#areas").append(selection);
  //console.log(selection);

  //get totals for area comparisons

  var totalCats = [];
  var totalData = [];
  

  comparisons = [];

  $.each(changes, function (index,value){

    
   // console.log(  value.code );
    //console.log(  value.name );

  // console.log( value );
    //console.log(areaObj[value.name]);
    //console.log(areaObj["UNITED KINGDOM"]);

    //totalCats.push(value.name);
    newVal = value.now.split(",").join("");
    newVal = parseInt( newVal,10 );
    //totalData.push( parseInt( newVal,10 ) );

    comparisons.push( {name:value.name, code: value.code, value: newVal} );

    $.each(value, function (col, val){
      //console.log(col, val);
      //console.log("value " + value.name);
      if(col!=="name" && col!=="code" ){
        newVal = val.split(",").join("");
        if(areaObj[value.name]){
          areaObj[value.name].changes[col] = parseInt( newVal,10 );
          
        }
      }
    });

  })

  // sort comparison by size
  comparisons.sort(compare);

  $.each(comparisons, function (index, value){
    //console.log(value);
    totalCats.push( value.name );
    totalData.push( value.value );
    comparisonLookUp[value.name] = index;
  });

  // console.log(areaObj);
  // loop through the trends and store in areaObj
  $.each(trend, function (index,value){
    // console.log("trend " + value.Name);
    if(areaObj[value.Name]){
      areaObj[value.Name].trends =[];
      $.each(value, function (col, val){
        if(col!=="Name" && col!=="Code" ){
          areaObj[value.Name].trends.push( parseInt(val,10) );
        }
      });
   }else{
      console.log("NO " + value.Name + " *************");
    }
    

  });

 $('#loader').modal('hide');
  initialize();


  barChart = $('#stackedBar').highcharts();

  barChart.series[0].setData( totalData );
  barChart.xAxis[0].setCategories(totalCats);

  //init with content
  updateDisplay("Newport");
}


function compare(a,b) {
  if (a.value < b.value)
     return 1;
  if (a.value > b.value)
    return -1;
  return 0;
}

