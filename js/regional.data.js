/*

  The app builds a hierarchical model of the areas (to enable filtering) 
  and a model of the area data (pop trend, gender, labour and life expectancy) 
  from the various data files.

  This component loads the data for each area and handles the display of data.

  A model of the data is index using the ONS id as the key eg areaObj["E10000007"] = {  } // BLANK_ITEM

  From the UI, a district can be selected by browsing the map, via a postcode look up or by filtering on region, county and district.
  The postcode lookup using the mapIt API. It involves a little bit of juggling to extract the ONS id. (see code comments in the js file)
  The search is based on the unique ONS id and from this vault the corresponding chart and table data is displayed.

*/

var regionalData = (function () {

    var CHANGE_URL    = "data/change.csv";
    var PYRAMID_URL   = "data/pyramid.csv";
    var TREND_URL     = "data/population.csv";
    var LIFE_URL      = "data/lifeExpectancy.csv";
    var LABOUR_URL    = "data/labour.csv";

    var POSTCODE_URL  = "//mapit.mysociety.org/postcode/";
    var POINT_URL     = "//mapit.mysociety.org/point/4326/";

    var YEAR = 2013;
    var MAX_COMPARISONS = 3;

    var BLANK_ITEM = {
        name : " ",
        code : "",
        male : [],
        female : [],
        maleTotal:50,
        femaleTotal:50,
        changes : {
          now:0,
          previous: 0,
          "Internal Inflow": 0,
          "Internal Net": 0,
          "Internal Outflow": 0,
          "International Inflow": 0,
          "International Net": 0,
          "International Outflow": 0,
          "Other": 0,
          "births": 0,
          "births_2003": 0,
          "deaths": 0,
          "deaths_2003": 0,
          "natural change": 0,
        },
        series : { male : [], female : []},
        ageGroups : { u18:0 , adult:0 , over64:0 },
        trends : [0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        labour:{employment:[], unemployment:[]},
        series:{ male:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], female:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0] },
        expectancy:{ male:[0,0,0], female:[0,0,0] }
    };

    var uk = "K02000001";

    //data containers
    var pyramidData;
    var lifeData;
    var labourData;
    var changes;
    var trend;

    // main model
    var areaObj = {};
    //array for comparisons
    var comparisons = [];



    function testPostCode () {
      var pcode ;
      pcode = $("#postcode").val();

      var newPostCode = checkPostCode( pcode );
      if (newPostCode) {
        postcode = newPostCode;

        //call to NESS
        neighbourhood.getStats(newPostCode, true);

        //call to MySociety for ONS ID code
        $("#postcode").val( newPostCode );
        var url = POSTCODE_URL + newPostCode;

        loadData( url, parseData );
      }
      else {
        console.warn ("Postcode has invalid format");
      }
    }


       function loadData( url, callBack ) {
          $.ajax({
              dataType: "json",
              url: url,

              success: function(data) {
                  callBack( data );
              },
              error: function (xhr, textStatus, errorThrown) {
                console.warn("error");
              }
          });
      }


      function getPointData(latLng){
          var url = POINT_URL + latLng.lng() + "," + latLng.lat() ;
          loadData( url, parsePointData );
      }



      function parsePointData(returned){
        var ons_id

        data = returned;

        $.each(data, function(index, value){
          //find Unitary Authority, County or Metro District
          if(value.type==="UTA" || value.type==="CTY" || value.type==="MTD"){
            ons_id = value.codes.gss
          }

        })

        setArea( ons_id );
        showSummary(ons_id);
      }


      /*
          A little bit of juggling involved to get the data we need:
          get the council reference number in the shortcuts
          or the county ref if it exists
          then use this ref to find the relevant area
          and get the gss value from the 'codes'.
      */
      function parseData(returned){
        data = returned;

        //get lat and lng
        var lat = data.wgs84_lat;
        var lon = data.wgs84_lon;

        var council = data.shortcuts.council;

        if(data.shortcuts.council.county){
          council = data.shortcuts.council.county;
        }

        var ons_id = data.areas[council].codes.gss;

        //store id for reference later when toggling area
        setArea( ons_id );
        showSummary(ons_id);

        // display a marker and the district boundary on the map
        maps.showPoint(lat,lon);
        maps.displayArea( ons_id );
      }



      function setArea( id ){
        lastArea = id;
      }


      function removeArea( id ){
        var len = comparisons.length - 1;

        for( var i=len; i>=0; i--) {
          if(comparisons[i] === id) {
             comparisons.splice(i, 1);
          }
        }
      }


      function addArea( id ){
        if( comparisons.length >= MAX_COMPARISONS){
          comparisons.splice( (MAX_COMPARISONS-1), 1);
        }
        
        if( $.inArray( id , comparisons ) === -1){
          comparisons.unshift(id);
        }
      }

      function showSummary( id ) {
        // determine tabbed section and alter display
        if($("#comparisons").attr("aria-hidden")==="true"){
          // region / county / district
          $("#name").text(areaObj[id].name);
          $("#pop").text( areaObj[id].trends[12] );
          $("#pop2").text( areaObj[id].trends[2] );

          $("#mainTitle").text( "Regional Profile: " + areaObj[id].name + ", " + YEAR + "");

          var region = areas.getRegionType(id);
          var parent = areas.getParent(id);

          if(region==="region"){
            $("#parent_name").text(areaObj[parent].name);
            $("#parent_pop").text( areaObj[parent].trends[12]);
            $("#gparent_name").html( "&nbsp;" );
            $("#gparent_pop").text( " ");
            $("#ancestor_name").html( "&nbsp;" );
            $("#ancestor_pop").text( "");
          }

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
            
              $("#ancestor_name").text(areaObj[uk].name);
              $("#ancestor_pop").text( areaObj[uk].trends[12]);

              $("#gparent_name").text(areaObj[gparent].name);
              $("#gparent_pop").text( areaObj[gparent].trends[12]);

              $("#parent_name").text( areaObj[parent].name );
              $("#parent_pop").text( areaObj[parent].trends[12]);

          }

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

          $("#inactivityName").text( areaObj[id].name );
          $("#inactivityParentName").text( areaObj[parent].name  );

          $("#inactivity").text( areaObj[id].labour.inactivity +"%" );
          $("#inactivityParent").text(  areaObj[parent].labour.inactivity +"%" );
          $("#inactivityUK").text( areaObj[uk].labour.inactivity +"%" );

          $("#claimant").text( areaObj[id].labour.claimant +"%" );
          $("#claimantParent").text(  areaObj[parent].labour.claimant +"%" );
          $("#claimantUK").text( areaObj[uk].labour.claimant +"%" );

          $("#employment").text( areaObj[id].labour.employment +"%" );
          $("#employmentParent").text(  areaObj[parent].labour.employment +"%" );
          $("#employmentUK").text( areaObj[uk].labour.employment +"%" );

          $("#unemployment").text( areaObj[id].labour.unemployment +"%" );
          $("#unemploymentParent").text(  areaObj[parent].labour.unemployment +"%" );
          $("#unemploymentUK").text( areaObj[uk].labour.unemployment +"%" );

           showSingle( id );

        }
        else{
          // add to comparison list and populate
          addArea(lastArea);
        }
        showCharts();
        
      }



      function showSingle( id ) {
        var males = areaObj[id].maleTotal;
        var females = areaObj[id].femaleTotal;
        var female_pc = Math.round( 1000 * females / (males+females) ) /10;
        var male_pc = Math.round( 1000 * males / (males+females) )/10;
        var chartData = [];
        chartData = [  ['Female ' + female_pc + '%', female_pc], ['Male ' + male_pc + '%', male_pc] ];

        //TODO: fix this by calling specfic setter in charting
        window["pyramidThumb"].series[1].setData( areaObj[id].series.female );
        window["pyramidThumb"].series[0].setData( areaObj[id].series.male );

        window["lifeThumb"].series[0].setData( areaObj[id].expectancy.male );
        window["lifeThumb"].series[1].setData( areaObj[id].expectancy.female );

        window["trendThumb"].series[0].setData( areaObj[id].trends );
      }



        function showCharts(){
          if (comparisons.length === 0){
            comparisons = [ 0, 0, 0 ];
          }

          if (comparisons.length === 1){
            comparisons.push(0);
            comparisons.push(0);
          }
          if (comparisons.length === 2){
            comparisons.push(0);
          }

          $.each(comparisons, function (index, value){
            var item = areaObj[value];
            var count = index+1;
            var pc =0;
            if(!item){
              item = BLANK_ITEM;
            }
            if(item.changes.previous>0){
              pc = Math.round ( 10000 * item.changes["natural change"] / item.changes.previous ) / 100;
            }


            $("#title"+count).text( item.name );
            $("#btn"+count).attr( "name", item.code );

            $("#title"+count).text( item.name );
            $("#pop_com"+count).text( item.trends[12] );
            $("#pop_com"+count + "_pt2").text( item.trends[2] );

            $("#birth_com"+count).text( item.changes.births );
            var birth2003 = item.changes.births_2003;
            if(isNaN(birth2003)){
              birth2003 = "-";
            }
            $("#birth2_com"+count).text( birth2003 );
            $("#death_com"+count).text( item.changes.deaths );
            var death2003 = item.changes.deaths_2003;
            if(isNaN(death2003)){
              death2003 = "-";
            }
            $("#death2_com"+count).text( death2003 );
            $("#natChange_com"+count).text( item.changes["natural change"] );
            $("#natPercent_com"+count).text( pc );

            $("#internalIn_com"+count).text( "In: " + item.changes["Internal Inflow"] );
            $("#internalOut_com"+count).text( "Out: " +  item.changes["Internal Outflow"] );
            $("#internalNet_com"+count).text( "Net: " +  item.changes["Internal Net"] );

            $("#externalIn_com"+count).text( "In: " +  item.changes["International Inflow"] );
            $("#externalOut_com"+count).text( "Out: " +  item.changes["International Outflow"] );
            $("#externalNet_com"+count).text( "Net: " +  item.changes["International Net"] );
            $("#other_com"+count).text( item.changes["Other"] );

            $("#employ_com"+count).text( item.labour.employment + '%');
            $("#unemploy_com"+count).text( item.labour.unemployment + '%');
            $("#inactivity_com"+count).text( item.labour.inactivity + '%');
            $("#claims_com"+count).text( item.labour.claimant + '%');

            var males = item.maleTotal;
            var females = item.femaleTotal;
            var female_pc = Math.round( 1000 * females / (males+females) ) /10;
            var male_pc = Math.round( 1000 * males / (males+females) )/10;
            var chartData = [];
            chartData = [  ['Female ' + female_pc + '%', female_pc], ['Male ' + male_pc + '%', male_pc] ];

            //TODO: fix this by calling specfic setter in charting
            window["pyramid"+count].series[1].setData( item.series.female );
            window["pyramid"+count].series[0].setData( item.series.male );

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



      function removeArea( name ) {
        var idx = comparisons.indexOf( name );
        if (idx > -1) {
          comparisons.splice(idx, 1);
        }

        showCharts();
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

        $.each(value, function (col, val){
          if(col!=="name" && col!=="code" ){
            newVal = val.split(",").join("");
            if(areaObj[value.code]){
              areaObj[value.code].changes[col] = parseInt( newVal,10 );

            }
          }
        });

      })

      $.each(comparisons, function (index, value){
        totalCats.push( value.name );
        totalData.push( value.value );
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
          console.log("Got " + value.code + " in population trend data but no matching value in AREA.CSV");
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

        }
        // Inner or Outer London only present in Labour and Life expectancy
        /*
        else{
          console.log("Got " + value.code + " in life expectancy data but no matching value in AREA.CSV");
        }
        */
        });

      // loop through the life expectancy data and store in areaObj
      // code,name,pop,employ,employRate,unemploy,unemployRate,inactivty,inactivityRate,claimantRate,jobs,density
      $.each(labourData, function (index,value){
        if(areaObj[value.code]){
          areaObj[value.code].labour = {};

          areaObj[value.code].labour.employment = ( parseFloat(value.employRate) );
          areaObj[value.code].labour.unemployment = ( parseFloat(value.unemployRate) );
          areaObj[value.code].labour.inactivity = ( parseFloat(value.inactivityRate) );
          areaObj[value.code].labour.claimant = ( parseFloat(value.claimantRate) );

        }
        // Inner or Outer London only present in Labour and Life expectancy
        /*
        else{
          console.log("Got " + value.code + " in Labour market data but no matching value in AREA.CSV");
        }
        */
      });


    }


    function compare(a,b) {
      if (a.value < b.value)
         return 1;
      if (a.value > b.value)
        return -1;
      return 0;
    }

    return{
      testPostCode:testPostCode,
      showCharts:showCharts,
      setArea:setArea,
      showSummary:showSummary,
      loadPopData:loadPopData,
      removeArea:removeArea
    }
})();

