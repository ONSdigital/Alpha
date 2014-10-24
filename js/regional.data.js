
var CHANGE_URL = "data/change.csv";
var PYRAMID_URL = "data/pyramid.csv";
var TREND_URL = "data/population.csv";
var LIFE_URL = "data/lifeExpectancy.csv";
var LABOUR_URL = "data/labour.csv";

var POSTCODE_URL = "//mapit.mysociety.org/postcode/";
var POINT_URL = "//mapit.mysociety.org/point/4326/";

var YEAR = 2013;
var MAX_COMPARISONS = 2;

var uk = "K02000001";

var ORANGE ='#FF950E';
var pyramidData;
var lifeData;
var labourData;

var changes;
var trend;
var areaObj = {};
var barChart;
var trendThumb;
var genderThumb;
var pyramidThumb;
var lifeThumb;
var chartEmploy;
var chartUnemploy;
var chartInactivity;
var chartClaimant;

var life1;
var life2;
var life3;
var gender1;
var gender2;
var gender3;
var pyramid1;
var pyramid2;
var pyramid3;


var areaMap = {};
var areaMeasures = {};

var comparisons = [];



var genderChart;
var ageChart;

var lastBar = 0;

var polygons = [];

//create a look up to highlight bar
var comparisonLookUp = {};


//
var chartAge;
var chartAnnual;
var chartTrend;
var pyramid;
var pyr = [];


function testPostCode () {

  var pcode ;
  pcode = $("#postcode").val();


 //console.log("got pcode "  + pcode );

  var newPostCode = checkPostCode( pcode );
  if (newPostCode) {
    postcode = newPostCode;

    //call to NESS
    neighbourhood.getStats(newPostCode, true);
    $("#postcode").val( newPostCode );
    var url = POSTCODE_URL + newPostCode;

    loader.setUrl( url );
    loader.loadData( parseData );

  }
  else {
    console.log ("Postcode has invalid format");
  }
}


  function getPointData(latLng){
      console.log ("getPointData")
      console.log("http://mapit.mysociety.org/point/4326/" + latLng.lng() + "," + latLng.lat());
      var url = POINT_URL + latLng.lng() + "," + latLng.lat() ;

      loader.setUrl( url );
      console.log("Data URL " + url);
      loader.loadData( parsePointData );
  }



  function parsePointData(returned){
    var ons_id

    data = returned;
    console.log("parsePointData");
    console.log(data);

    $.each(data, function(index, value){
      console.log(value);

      //find Unitary Authority; County; opr Metro District
      if(value.type==="UTA" || value.type==="CTY" || value.type==="MTD"){
        console.log(value.name +": " + ons_id);
        ons_id = value.codes.gss
      }

    })
    console.log("ONS " + ons_id );

    //updateDisplay( ons_id );
   //addArea( ons_id );
    setArea( ons_id );
    showSummary(ons_id);
  }


  function parseData(returned){
    data = returned;
    console.log("parse");
    console.log(data);

    //get lat and lng
    var lat = data.wgs84_lat;
    var lon = data.wgs84_lon;

    var council = data.shortcuts.council;

    if(data.shortcuts.council.county){
      council = data.shortcuts.council.county;
    }

    var ons_id = data.areas[council].codes.gss;
    console.log("ONS " + ons_id );

    //updateDisplay( ons_id );

    //stroe id for reference later when toggling area
    setArea( ons_id );
    showSummary(ons_id);
   // getBoundaries(ons_id);
    showPoint(lat,lon);

    // display the distric boundry on the map
    displayArea( ons_id );


  }



  function setArea( id ){

    lastArea = id;
  }




  function removeArea( id ){
    //console.log("REMOVE " + id);
    //console.log( areaObj[id] );
    var len = comparisons.length - 1;

    for( var i=len; i>=0; i--) {
      if(comparisons[i] === id) {
         comparisons.splice(i, 1);
      }
    }
    checkComparisonList();
    updateComparisonList();
  }




  function addArea( id ){
    //console.log( $.inArray( id , comparisons ) );
    if( $.inArray( id , comparisons ) === -1){
     comparisons.push(id);
      //console.log("ADD " + id);

    }

    //console.log( areaObj[id] );
    checkComparisonList();
    updateComparisonList();
  }

  function checkComparisonList(){
    if(comparisons.length>= MAX_COMPARISONS){
      $("#addBtn").prop('disabled', true);

    } else {
      $("#addBtn").prop('disabled', false);
    }
  }


  function updateComparisonList(){
    $.each(comparisons, function (index, value){
       //console.log(index , value);
       var item = areaObj[value];

       //console.log(item.name +":" + item.code);
    });
    displayComparisonList();
  }

  function showSummary( id ) {

    console.log("show summary " + $("#comparisons").attr("aria-hidden"));
      // determine tabbed section and alter display
    if($("#comparisons").attr("aria-hidden")==="true"){
      console.log("HIDE comparisons");
 
    //console.log(areaObj[id]);
    //console.log(areaObj[id].trends[2] +" (" + (YEAR-10) + ")");
    // region / county / district
    $("#name").text(areaObj[id].name);
    $("#pop").text( areaObj[id].trends[12] );
    $("#pop2").text( areaObj[id].trends[2] );

    $("#mainTitle").text( "Regional profile: " + areaObj[id].name + ", " + YEAR + "");

    var region = areas.getRegionType(id);
    //console.log("get region data " + id + " is " + region );

    var parent = areas.getParent(id);
    ///console.log("get parent data " + id + " is " + parent );

    if(parent!== uk){
      //parent = areas.getParent(parent);
      //region = areas.getRegionType(parent);
      //console.log("get grandparent data " + parent + " is " + region );

    }

    if(region==="region"){
      $("#parent_name").text(areaObj[parent].name);
      $("#parent_pop").text( areaObj[parent].trends[12]);
      $("#gparent_name").html( "&nbsp;" );
      $("#gparent_pop").text( " ");
      $("#ancestor_name").html( "&nbsp;" );
      $("#ancestor_pop").text( "");
    };

    if( region === "county" || region === "unitary" || region === "London borough"  || region === "Metropolitan district"  || region === "NI district" || region === "Sc district"  || region === "W district"){
        $("#parent_name").text(areaObj[parent].name);
        $("#parent_pop").text( areaObj[parent].trends[12]);

        $("#gparent_name").text( areaObj[uk].name );
        $("#gparent_pop").text( areaObj[uk].trends[12]);

        $("#ancestor_name").html("&nbsp;");
        $("#ancestor_pop").text( "" );
    }

    if(region==="district"){
        var gparent = areas.getParent(parent);
       // console.log(gparent);
        $("#ancestor_name").text(areaObj[uk].name);
        $("#ancestor_pop").text( areaObj[uk].trends[12]);

        $("#gparent_name").text(areaObj[gparent].name);
        $("#gparent_pop").text( areaObj[gparent].trends[12]);

        $("#parent_name").text( areaObj[parent].name );
        $("#parent_pop").text( areaObj[parent].trends[12]);

    }




    //console.log(areaObj[id].changes.births_2003);
    //console.log(areaObj[id].changes);
    //console.log(areaObj[id]);

    $("#birth").text(areaObj[id].changes.births );
    $("#death").text(areaObj[id].changes.deaths );
    $("#natChange").text( "Net: " + areaObj[id].changes["natural change"]);
    $("#birth2").text(areaObj[id].changes.births_2003 );
    $("#death2").text(areaObj[id].changes.deaths_2003 );

    var pc = Math.round ( 10000 * areaObj[id].changes["natural change"] / areaObj[id].changes.previous ) / 100;
    $("#natPercent").text( pc );


    $("#internalIn").text( areaObj[id].changes["Internal Inflow"]);
    $("#internalOut").text( areaObj[id].changes["Internal Outflow"]);
    $("#internalNet").text( "Net: " + areaObj[id].changes["Internal Net"]);

    $("#externalIn").text( areaObj[id].changes["International Inflow"]);
    $("#externalOut").text( areaObj[id].changes["International Outflow"]);
    $("#externalNet").text( "Net: " + areaObj[id].changes["International Net"]);

    $("#other").text( areaObj[id].changes.Other);


    $("#inactivity").text( areaObj[id].labour.inactivity +"%" );
    $("#inactivityParent").text( areaObj[parent].name + ": " + areaObj[parent].labour.inactivity +"%" );
    $("#inactivityUK").text( areaObj[uk].name + ": " + areaObj[uk].labour.inactivity +"%" );
    $("#claimant").text( areaObj[id].labour.claimant +"%" );
    $("#claimantParent").text( areaObj[parent].name + ": " + areaObj[parent].labour.claimant +"%" );
    $("#claimantUK").text( areaObj[uk].name + ": " + areaObj[uk].labour.claimant +"%" );


     showSingle( id );

    }else{
      console.log("show comparisons "  + lastArea);

       addArea(lastArea);
       showCharts();
    }


  }



  function showSingle( id ) {
    //console.log(areaObj[id]);
    var males = areaObj[id].maleTotal;
    var females = areaObj[id].femaleTotal;
    var female_pc = Math.round( 1000 * females / (males+females) ) /10;
    var male_pc = Math.round( 1000 * males / (males+females) )/10;
    var chartData = [];
    chartData = [  ['Female ' + female_pc + '%', female_pc], ['Male ' + male_pc + '%', male_pc] ];



    genderThumb.series[0].setData( chartData );

    pyramidThumb.series[1].setData( areaObj[id].series.female );
    pyramidThumb.series[0].setData( areaObj[id].series.male );

    lifeThumb.series[0].setData( areaObj[id].expectancy.male );
    lifeThumb.series[1].setData( areaObj[id].expectancy.female );


    var parent = areas.getParent(id);
    chartEmploy.series[2].setData( [ areaObj[id].labour.employment ] );
    chartEmploy.series[2].name = areaObj[id].name;
    chartEmploy.series[1].setData( [ areaObj[parent].labour.employment ] );
    chartEmploy.series[1].name = areaObj[parent].name;
    chartEmploy.series[0].setData( [ areaObj[uk].labour.employment  ] );
    chartEmploy.series[0].name = areaObj[uk].name;
    chartEmploy.redraw();

    chartUnemploy.series[2].setData( [ areaObj[id].labour.unemployment ] );
    chartUnemploy.series[2].name = areaObj[id].name;
    chartUnemploy.series[1].setData( [ areaObj[parent].labour.unemployment ] );
    chartUnemploy.series[1].name = areaObj[parent].name;
    chartUnemploy.series[0].setData( [ areaObj[uk].labour.unemployment  ] );
    chartUnemploy.series[0].name = areaObj[uk].name;
    chartUnemploy.redraw();

  }



  function updateDisplay(  ) {

    var totalCats = [];
    var legend = [];
    var totalData = [];

    var trends = [];
    var u18 = [];
    var adult = [];
    var o64 = [];

    var natural = [];
    var uk = [];
    var migration = [];
    var female = [];
    var male = [];
    var name = [];


    //loop through the list of comparisons and extract the data
    $.each(comparisons, function (index, value){
     // console.log(index , value);
      //trend
      trends.push( areaObj[value].trends );

      // age groups
      legend.push( {name:areaObj[value].name} );
      totalCats.push( areaObj[value].name );
      u18.push( areaObj[value].ageGroups.u18 );
      adult.push( areaObj[value].ageGroups.adult );
      o64.push( areaObj[value].ageGroups.over64 );

      // changes
      natural.push( areaObj[value].changes["natural change"] );
      uk.push( areaObj[value].changes["Internal Net"] );
      migration.push( areaObj[value].changes["International Net"] );

      female.push( areaObj[value].series.female );
      male.push( areaObj[value].series.male );
      name.push( areaObj[value].name );

      //comparisonLookUp[value.name] = index;
    });


    for ( var i=0;i<10;i++){

      if(chartTrend.series[i].visible){
       chartTrend.series[i].hide();
       chartTrend.series[i].update({ showInLegend: false});

        }
      }

    c//onsole.log(natural.length);
    if(natural.length===0){
      //console.log("RESET");
      natural = [0];
      uk = [0];
      migration = [0];
      totalCats = [0];
      u18 = [0];
      adult = [0];
      o64 = [0];
    }

    //console.log(u18);
    //console.log(adult);
    //console.log(o64);

    $.each(trends, function (index, value){
      //console.log(name[index]);
      chartTrend.series[index].setData( value );
      chartTrend.series[index].name = name[index];
      chartTrend.series[index].show( );
      chartTrend.series[index].update({ showInLegend: true});
      chartTrend.legend.allItems[index].update( {name: name[index]}  );
    });



    chartAnnual.series[2].setData( natural );
    chartAnnual.series[2].name = "Natural Change";
    chartAnnual.series[1].setData( uk );
    chartAnnual.series[1].name = "UK";
    chartAnnual.series[0].setData( migration );
    chartAnnual.series[0].name = "Migration";
    chartAnnual.xAxis[0].setCategories(totalCats);
    //chartAnnual.legend.allItems.update( legend );


    chartAge.series[2].setData( u18 );
    chartAge.series[1].setData( adult );
    chartAge.series[0].setData( o64 );
    chartAge.xAxis[0].setCategories(totalCats);



    for ( var i=0;i<4;i++){
      var pyramid = pyr[i];
      if(name[i]){
        pyramid.setTitle({text: name[i] });
        pyramid.series[1].setData( female[i] );
        pyramid.series[0].setData( male[i] );
      }else{
        console.log("i " + i);
        pyramid.setTitle({text: "" });
        pyramid.series[1].setData( [0] );
        pyramid.series[0].setData( [0] );
      }

    }

  }




  function showData(str){
    //console.log( "showData " + str );
    var data = areaObj[str];
    var region = areas.getRegionType(str);
    //console.log("get region data " + str + " is " + region );

    getBoundaries(data.code, region);

    var title = areaObj[str].name;
    var pc_change = 100 * (data.changes.now - data.changes.previous)/data.changes.now;
    pc_change = Math.round(pc_change*100) / 100;
    var suffix ="";
    if(data.changes.now > data.changes.previous){
      suffix ="+";
    }


    $("#mainHeading").text(": " + title );
    $("#title").text("Demographics: " + title + " (" + suffix + pc_change + "% change from " + (YEAR-1) + ")");
    $("#pop2012").text(data.changes.now );
    $("#pop2011").text( data.changes.previous);
    //console.log("AREA:"  + data.area);
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
    pyramid = $('#pyr1').highcharts();


    pyramid.series[1].setData( data.series.female );
    pyramid.series[0].setData( data.series.male );
    pyramid.setTitle({text: "Population pyramid for " + title + ", midyear " + YEAR });

    var ageData = [["Under 18" , data.ageGroups.u18],["18-64", data.ageGroups.adult],["Over 64", data.ageGroups.over64]];
    var genderData = [ ["Male", data.maleTotal ],["Female", data.femaleTotal] ];

    ageChart.series[0].setData( ageData );


    barChart = $('#trend').highcharts();
    barChart.series[0].setData( data.trends );
    $("#popTrend").text( "Population Trend for " + title  + ", (2001 to 2013)" );

  }






    function showComparison(list, str){

      //console.log(list);
      var displayText = "";

      totalCats = [];
      totalData = [];
      comparisonLookUp = [];
      comparisons = [];

      // loop through the siblings and create a list of pop values
      //$.each(list, function (index,value){
        //console.log(value.name+":" + value.code + " *::* " + index);
        //comparisons.push( {name:value.name, code:value.code, value: areaObj[value.code].changes.now} );
      //});

      //sort the comparisons by value
      //comparisons.sort(compare);

      // loop through sorted list and create chart data
      $.each(comparisons, function (index, value){
       // console.log(value.name+":" + value.code + " *::* " + index);
        totalCats.push( value.name );
        totalData.push( value.value );
        comparisonLookUp[value.code] = index;
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



    function displayComparisonList(){
      //rewrite comparisons into table
      var html ="<tr></th><th width='300px'></th><th width='15px'></th></tr>";

      var $selection = $("#selection");

      $('a.infoBtn').off('click');
      $selection.empty();


      $.each(comparisons, function(index, value){
        var item = areaObj[value];


        html+="<tr>";
       // html+="<td>" + item.code + "</td>";
        html+="<td>";
        html+='<a href="#" >';
        html+= item.name + " </a>";
        html+="</td>";
        html+="<td><a class='infoBtn ' href='' id=" + item.code + " >";
        html+="<span class='glyphicon glyphicon-remove-circle'></span></a></td>";
        html+="</tr>";
      });

      $selection.append(html);

      $('a.infoBtn').on('click', function(evt){
        evt.preventDefault();

        var idx = comparisons.indexOf( this.id );
        if (idx > -1) {
          comparisons.splice(idx, 1);
        }
        checkComparisonList();
        displayComparisonList();
      });

    }


    function showCharts(){
      //console.log("show charts");

      $.each(comparisons, function (index, value){
        //console.log(index, value);
        var item =areaObj[value];
        var count = index+1;
        var pc = Math.round ( 10000 * item.changes["natural change"] / item.changes.previous ) / 100;

        console.log(item);

        $("#title"+count).text( item.name );
        $("#pop_com"+count).text( item.trends[12] );
        $("#pop_com"+count + "_pt2").text( item.trends[2] );

        $("#birthNowComp"+count).text( item.changes.births );
        $("#birthThenComp"+count).text( item.changes.births_2003 );
        $("#deathNowComp"+count).text( item.changes.deaths );
        $("#deathThenComp"+count).text( item.changes.deaths_2003 );
        $("#natChangeComp"+count).text( item.changes["natural change"] );
        $("#natPercentComp"+count).text( pc );

        $("#internalInComp"+count).text( "In: " + item.changes["Internal Inflow"] );
        $("#internalOutComp"+count).text( "Out: " +  item.changes["Internal Outflow"] );
        $("#internalNetComp"+count).text( "Net: " +  item.changes["Internal Net"] );

        $("#externalInComp"+count).text( "In: " +  item.changes["International Inflow"] );
        $("#externalOutComp"+count).text( "Out: " +  item.changes["International Outflow"] );
        $("#externalNetComp"+count).text( "Net: " +  item.changes["International Net"] );
        $("#otherComp"+count).text( item.changes["Other"] );

        $("#employmentComp"+count).text( item.labour.employment );
        $("#unemploymentComp"+count).text( item.labour.unemployment );
        $("#inactivityComp"+count).text( item.labour.inactivity );
        $("#claimantComp"+count).text( item.labour.claimant );

        window["pyramid"+count].series[1].setData( item.series.female );
        window["pyramid"+count].series[0].setData( item.series.male );

        var males = item.maleTotal;
        var females = item.femaleTotal;
        var female_pc = Math.round( 1000 * females / (males+females) ) /10;
        var male_pc = Math.round( 1000 * males / (males+females) )/10;
        var chartData = [];
        chartData = [  ['Female ' + female_pc + '%', female_pc], ['Male ' + male_pc + '%', male_pc] ];


       window["gender"+count].series[0].setData( chartData );

       window["life"+count].series[0].setData( item.expectancy.male );
       window["life"+count].series[1].setData( item.expectancy.female );



      });

    }




  function loadPopData(){
    $("#message").text( "Loading Population Data" );

    $.ajax({
      dataType: "text",
      url: CHANGE_URL,

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
      url: PYRAMID_URL,

      success: function(data) {
        pyramidData = $.csv.toObjects(data);
        checkAllData();
      },
      error: function (xhr, textStatus, errorThrown) {
          console.warn("error");
       }
      });


    // life expectancy
    $.ajax({
      dataType: "text",
      url: LIFE_URL,

      success: function(data) {
        lifeData = $.csv.toObjects(data);
        checkAllData();
      },
      error: function (xhr, textStatus, errorThrown) {
          console.warn("error");
       }
      });


    // labour market
    $.ajax({
      dataType: "text",
      url: LABOUR_URL,

      success: function(data) {
        labourData = $.csv.toObjects(data);
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

  if(pyramidData && changes && trend && lifeData && labourData){
    processData()
  }
}



function processData(  ) {

$("#areas").empty();
  var selection = "<option>Pick an area...</option>";


  $.each(pyramidData, function (index,value){

    var code = value.code;
    // create obj for each area
    areaObj[code] = {};

    //create array for population
    areaObj[code].name = value.name;
    areaObj[code].code = value.code;
    areaObj[code].male = [];
    areaObj[code].female = [];
    areaObj[code].changes = {};
    areaObj[code].series = {};
    areaObj[code].series.male = [];
    areaObj[code].series.female = [];
    areaObj[code].ageGroups = { u18:parseInt(value.u18,10) , adult:parseInt(value.adult,10) , over64:parseInt(value.over64,10) };

    for ( var i=0; i<19;i++){
      areaObj[code].series.male[i] = -parseInt(value["male"+i],10) ;
      areaObj[code].series.female[i] = parseInt(value["female"+i],10) ;
    }

    areaObj[code].maleTotal = parseInt( value.males,10);
    areaObj[code].femaleTotal = parseInt( value.females,10);
    selection += "<option>" + name + "</option";

    $('#areas')
          .append($('<option>', { name : index })
          .text(name));

  })


  //get totals for area comparisons
  var totalCats = [];
  var totalData = [];


  comparisons = [];

  $.each(changes, function (index,value){
    newVal = value.now.split(",").join("");
    newVal = parseInt( newVal,10 );

    ///comparisons.push( {name:value.name, code: value.code, value: newVal} );

    $.each(value, function (col, val){
      if(col!=="name" && col!=="code" ){
        newVal = val.split(",").join("");
        if(areaObj[value.code]){
          areaObj[value.code].changes[col] = parseInt( newVal,10 );

        }
      }
    });

  })

  // sort comparison by size
  //comparisons.sort(compare);

  $.each(comparisons, function (index, value){
    totalCats.push( value.name );
    totalData.push( value.value );
    comparisonLookUp[value.name] = index;
  });

  // loop through the trends and store in areaObj
  $.each(trend, function (index,value){
    if(areaObj[value.code]){
      areaObj[value.code].trends =[];
      $.each(value, function (col, val){
        if(col!=="name" && col!=="code" ){
          areaObj[value.code].trends.push( parseInt(val,10) );
        }
      });
   }else{
      console.log("NO " + value.code + " in population trend data");
    }
    });

  // loop through the lifeexpectancy data and store in areaObj
  $.each(lifeData, function (index,value){
    if(areaObj[value.code]){
      var f1993 = parseFloat(value.f1993);
      var m1993 = parseFloat(value.m1993);
      if (isNaN(f1993)){
        f1993 = null;
      }
      if (isNaN(m1993)){
        m1993 = null;
      }
      areaObj[value.code].expectancy = {female:[], male:[]};
      areaObj[value.code].expectancy.female.push( f1993, parseFloat(value.f2000), parseFloat(value.f2010) );
      areaObj[value.code].expectancy.male.push( m1993, parseFloat(value.m2000), parseFloat(value.m2010) );

    }else{
      //console.log("NO " + value.code + " in life expectancy data");
    }
    });

  // loop through the lifeexpectancy data and store in areaObj
  // code,name,pop,employ,employRate,unemploy,unemployRate,inactivty,inactivityRate,claimantRate,jobs,density
  $.each(labourData, function (index,value){
    if(areaObj[value.code]){
      areaObj[value.code].labour = {};

      areaObj[value.code].labour.employment = ( parseFloat(value.employRate) );
      areaObj[value.code].labour.unemployment = ( parseFloat(value.unemployRate) );
      areaObj[value.code].labour.inactivity = ( parseFloat(value.inactivityRate) );
      areaObj[value.code].labour.claimant = ( parseFloat(value.claimantRate) );


    }else{
      //console.log("NO " + value.code + " in Labour market data");
    }
  });

  //console.log(areaObj);

 //$('#loader').modal('hide');

  //init with content
  //updateDisplay("W06000022");
}


function compare(a,b) {
  if (a.value < b.value)
     return 1;
  if (a.value > b.value)
    return -1;
  return 0;
}

