
var BASE_URL = "data/change.csv";
var MALE_URL = "data/males.csv";
var FEMALE_URL = "data/females.csv";

var males;
var females;
var changes;
var areaObj = {};
var barChart;

var areaCodes = [];
var areaMap = {};
var areaMeasures = {};



var genderChart;
var ageChart;

var lastBar = 0;

var polygons = [];
//create a look up to highlight bar
  var comparisonLookUp = {};

  $(document).ready(function() {

    $("#areas").change(function(e) {
      return getSelect(); 
    });


    loadData();

    // inii charts
    initGenderChart();
    initAgeChart();

  });


  function getSelect(){
    var str = "";
    $( "#areas option:selected" ).each(function() {
    str += $( this ).text();
    });

    console.log(str);
    showData(str);

  }


  function showData(str){





    var data = areaObj[str]
    //call API for map boundary
    //getBoundaries(data.code);
     console.log(str);

    var pc_change = 100 * (data.changes.now - data.changes.previous)/data.changes.now;

    pc_change = Math.round(pc_change*100) / 100;
    var suffix ="";
    if(data.changes.now > data.changes.previous){
      suffix ="+";
    }


    $("#title").text("Demographics: " + str + " (" + suffix + pc_change + "% change from 2011)");
    $("#pop2012").text(data.changes.now );
    $("#pop2011").text( data.changes.previous);
    $("#area").text( Math.round(data.area) + "km2" );
    $("#density").text( Math.round( 100* data.changes.now/data.area )/100  );


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

    pyramid.series[1].setData( data.series[1].data );
    pyramid.series[0].setData( data.series[0].data );

    var ageData = [["Under 18" , data.ageGroups.u18],["18-64", data.ageGroups.adult],["Over 64", data.ageGroups.over64]];
    var genderData = [ ["Male", data.male["ALL AGES"] ],["Female", data.female["ALL AGES"]] ];

    ageChart.series[0].setData( ageData );
    genderChart.series[0].setData( genderData );

    //console.log(pyramid);
    pyramid.setTitle({text: "Population pyramid for " + str + ", midyear 2012" });


    //reset last bar to blue
    barChart.series[0].data[lastBar].update( {color:'#0084D1'} );

    lastBar = comparisonLookUp[str];
    //barChart.series[0].data.update( {color:'#0084D1'} );
    var highlight = barChart.series[0].data[ lastBar ];
    barChart.series[0].data[comparisonLookUp[str]].update( {color:'#FF950E'} );


  }







  function loadData(){

    //population
    $.ajax({
      dataType: "text",
      url: MALE_URL,

      success: function(data) {
        males = $.csv.toObjects(data);
        checkAllData();
      },
      error: function (xhr, textStatus, errorThrown) {
          console.warn("error");
       }
      });

    //population
    $.ajax({
      dataType: "text",
      url: FEMALE_URL,

      success: function(data) {
        females = $.csv.toObjects(data);
        checkAllData();
      },
      error: function (xhr, textStatus, errorThrown) {
          console.warn("error");
       }
      });


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




  }






function checkAllData(  ) {
  if(males && females && changes){
    console.log("GOT BOTH SO PROCESS DATA");
    processData()
  }
}



function processData(  ) {


$("#areas").empty();
  var selection = "<option>Pick an area...</option>";


  $.each(males, function (index,value){

    //TODO: set names in select here

    if(value.CODE.indexOf("E12")>-1){
      console.log("region:" + value.CODE + ":" + value.NAME);
    }
    var name = value.NAME;
    // create obj for each area
    areaObj[name] = {};

    //create array for population
    areaObj[name].male = [];
    areaObj[name].female = [];
    areaObj[name].changes = {};
    areaObj[name].series = [{name:'female', data:[] },{name:'male', data:[] }];
    areaObj[name].ageGroups = { u18:0, adult:0, over64:0};


    tempFemaleRow = females[index];

      var categoryCount = 0;
      var ageGroup = 0;
      var tempMaleCount = 0;
      var tempFemaleCount = 0;


    //loop through each age
    $.each(value, function (col, val){

      if(col!=="NAME" && col!=="CODE"){
        newVal = val.split(",").join("");
        newVal = parseInt( newVal,10 )
        areaObj[name].male[col] = newVal;

        tempMaleCount += newVal;

        //get female pop for same area and range
        female = tempFemaleRow[col];
        newVal = female.split(",").join("");
        newVal =  parseInt( newVal,10 ) ;
        areaObj[name].female[col] = newVal;

        tempFemaleCount += newVal;
        categoryCount ++;


        if(categoryCount===5 || ageGroup===18){
         // console.log("got group" + tempMaleCount);
          areaObj[name].series[0].data.push(-tempFemaleCount);
          areaObj[name].series[1].data.push(tempMaleCount);
          categoryCount = 0;
          ageGroup ++;
          tempMaleCount = 0;
          tempFemaleCount = 0;
        }


        var subtotal = areaObj[name].female[col] + areaObj[name].male[col];
        if(col<18){
          areaObj[name].ageGroups.u18 += subtotal;
        }else if (col>64){
          areaObj[name].ageGroups.over64 += subtotal;
        }else{
          areaObj[name].ageGroups.adult += subtotal;
        }

      }else if( col==="CODE"){
        areaObj[name].code = val;
        areaCodes.push(val);

        areaMap[val] = name; 

        

      }



    });

    total = value["ALL AGES"].split(",").join("");
    areaObj[name].male["ALL AGES"] = parseInt(total, 10);
    //console.log(name);
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
  

  var comparisons = [];

  $.each(changes, function (index,value){

    
    //console.log(  value.code );
    //console.log(  value.name );

    //console.log( value );
    //console.log(areaObj[value.name]);
    //console.log(areaObj["UNITED KINGDOM"]);

    //totalCats.push(value.name);
    newVal = value.now.split(",").join("");
    newVal = parseInt( newVal,10 );
    //totalData.push( parseInt( newVal,10 ) );

    comparisons.push( {name:value.name, value: newVal} );

    $.each(value, function (col, val){
      //console.log(col, val);

      if(col!=="name" && col!=="code"){
        newVal = val.split(",").join("");
        areaObj[value.name].changes[col] = parseInt( newVal,10 );
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



  initialize();

  // loop through the codes and get the map shapes
  $.each(areaCodes, function (index,value){
    console.log("get " + value);
    //getBoundaries(value);
  });

  barChart = $('#stackedBar').highcharts();

  barChart.series[0].setData( totalData );
  barChart.xAxis[0].setCategories(totalCats);

  //console.log(areaObj);

  //init with content
  showData("Newport");
}


function compare(a,b) {
  if (a.value < b.value)
     return 1;
  if (a.value > b.value)
    return -1;
  return 0;
}



            
            var ens;

            // Open Geography URL to search for a ward and return its boundaries. Search string goes between the two variables
           // var opengep1 =  "https://mapping.statistics.gov.uk/arcgis/rest/services/WD/WD_DEC_2011_EW_BGC/MapServer/find?searchText=";
            var opengep1 =  "https://mapping.statistics.gov.uk/arcgis/rest/services/CTYUA/CTYUA_DEC_2013_EW_BGC/MapServer/find?searchText=";
            // Service name relates to a particular geography, eg, Ward, Metropolitan County
            // Layer name relates to a particular geography, eg, Ward, Metropolitan County
            // Here it is only searching for Ward Boundaries using service: 'WD/WD_DEC_2011_EW_BGC' and layer: 'WD_DEC_2011_EW_BGC'
           // var opengep2 =  "&contains=true&searchFields=&sr=&layers=WD_DEC_2011_EW_BGC&layerDefs=&returnGeometry=true&maxAllowableOffset=&geometryPrecision=&dynamicLayers=&returnZ=false&returnM=false&gdbVersion=&f=json&callback=callback";
            var opengep2 =  "&contains=true&searchFields=&sr=&layers=CTYUA_DEC_2013_EW_BGC&layerDefs=&returnGeometry=true&maxAllowableOffset=&geometryPrecision=&dynamicLayers=&returnZ=false&returnM=false&gdbVersion=&f=json&callback=callback";

            var latlons = new Array();

             // start process with call to Open Geography
            function getBoundaries(areaNameOrCode) {
                callOpenGeog(opengep1 + areaNameOrCode + opengep2);
            }

          /**
            * Makes the API call to the ONS Open Geography Service, requesting the data
            * in JSON format and returns the data,
            * or reports any error.
            *
            * @param filt - various parameters that form part of the ONS API call
            *
            * @return data - the JSON data returned by the ONS API call
            */
            function callOpenGeog(url) {
                // create a new script element 
                var script = document.createElement('script');
                // set the src attribute to that url 
                script.setAttribute('src', url);
                // insert the script in out page 
                document.getElementsByTagName('head')[0].appendChild(script);
            }

            /*
             * Callback
             *
             * Deals with the response from the ONS Open Geography API.
             * The response is in JSON format and the boundaries can contain
             * one or more rings (polygons used to define the area).
             * The polygons are built up into an array of latitude and longitude values.
             * The response from the ONS Open Geography API returns coordinates as
             * eastings and northings. These have to be converted to latitude and longitude
             * for Google Maps. Some APIs exist that do this. We have used some code to
             * convert the values.
             *
             * @param response - the JSON response from the ONS Open Geograph API
             */
            function callback(response) 
            {
                
          // get boundaries
          console.log( response.results[0] );
          console.log( "got " + response.results[0].attributes.CTYUA13NM);
            //console.log( response.results[0].attributes.CTYUA13NM );
           /// console.log( response.results[0].attributes.CTYUA13NM+": " + parseInt( response.results[0].attributes["Shape.STArea()"],10)/1000000  );
            //capture area
            areaMeasures[response.results[0].attributes.CTYUA13NM] = parseInt(response.results[0].attributes["Shape.STArea()"],10)/1000000;

            areaObj[response.results[0].attributes.CTYUA13NM].area = parseInt(response.results[0].attributes["Shape.STArea()"],10)/1000000;


          if (response.results.length > 0) 
            {
              // document.getElementById("foundward").value = response.results[0].attributes.WD11NM;

              var ens = new Array();
              //alert(response.results[0].geometry.rings.length);
              for (var k = 0; k < response.results[0].geometry.rings.length; k++) {
                 ens[k] = response.results[0].geometry.rings[k];
              }

              // approximate datum correction, good enough for this demo
              
                    var latmeters = 50;
                    var lonmeters = -100;

                    var minlat = 360.0;
                    var maxlat = -360.0;
                    var minlon = 360.0;
                    var maxlon = -360.0;

                    // create array of points converted to lat/lon (from easting/northing) and capture mins and maxes
                    for (var j = 0; j < ens.length; j++) {
                       //alert('j = ' + j);
                       latlons[j] = new Array();
                       for (var i = 0; i < ens[j].length; i++) {
                           var testpoint = ens[j][i];
                           var grid = new OsGridRef(testpoint[0] + lonmeters, testpoint[1] + latmeters);
                           var latlon = OsGridRef.osGridToLatLong(grid);
                           if (latlon.lon < minlon) {
                               minlon = latlon.lon;
                           }
                           if (latlon.lon > maxlon) {
                               maxlon = latlon.lon;
                           }
                           if (latlon.lat < minlat) {
                               minlat = latlon.lat;
                           }
                           if (latlon.lat > maxlat) {
                               maxlat = latlon.lat;
                           }
                           latlons[j][i] = latlon;
                       }
                    }

                    // calculate zoom level
                    var zoomLevel = getZoom(minlon, maxlon, minlat, maxlat, 512, 512);

                    // calculate centroid
                    var centroid = getCentroid(minlon, maxlon, minlat, maxlat);
                    //initialize(centroid.lat, centroid.lon, zoomLevel, latlons);

                    console.log("init map: draw area " + polygons.length);
                    drawArea(latlons, response.results[0].value);
                } else {
                    alert("No matching ward found");
                }
            }

            /*
             * calculate zoom level to fit boundaries on screen
             *
             * @param minLng
             * @param maxLng
             * @param minLat
             * @param maxLat
             * @param pixelWidth
             * @param pixelHeight
             *
             * @return zoom
             */
            function getZoom(minLng, maxLng, minLat, maxLat, pixelWidth, pixelHeight) {
                var GLOBE_HEIGHT = 256; // Height of a google map that displays the entire world when zoomed all the way out
                var GLOBE_WIDTH = 256; // Width of a google map that displays the entire world when zoomed all the way out
                var latAngle = maxLat - minLat;
                if (latAngle < 0) {
                    latAngle += 360;
                }
                latAngle = latAngle * 1.6;
                var lngAngle = maxLng - minLng;
                var latZoomLevel = Math.floor(Math.log(pixelHeight * 360 / latAngle / GLOBE_HEIGHT) / Math.LN2);
                var lngZoomLevel = Math.floor(Math.log(pixelWidth * 360 / lngAngle / GLOBE_WIDTH) / Math.LN2);
                return (latZoomLevel < lngZoomLevel) ? latZoomLevel : lngZoomLevel;
            }

            /*
             * get the centre point of a rectangle
             *
             * @param minLng
             * @param maxLng
             * @param minLat
             * @param maxLat
             *
             * @return LatLon - coordinate of centre of rectangle
             */
            function getCentroid(minLng, maxLng, minLat, maxLat) {
                var avLng = (minLng + maxLng) / 2;
                var avLat = (minLat + maxLat) / 2;
                return new LatLon(avLat, avLng);
            }

            /*
             * lat / long object (holds latitude and longitude coordinates)
             *
             * @param lat - latitude coordinate
             * @param lon - longitude coordinate
             */
            function LatLon(lat, lon) {
                this.lat = lat;
                this.lon = lon;
            }

            /*
             * Grid Ref object (holds easting and northing coordinates)
             *
             * @param easting coordinate
             * @param northing coordinate
             */
            function OsGridRef(easting, northing) {
                this.easting = parseInt(easting, 10);
                this.northing = parseInt(northing, 10);
            }

            /*
             * Convert degrees to radians
             *
             * @param degrees
             *
             * @return radians
             */
            function deg2rad(deg) {
                conv_factor = (2.0 * Math.PI) / 360.0;
                return (deg * conv_factor);
            }

            /*
             * Convert radians to degrees
             *
             * @param radians
             *
             * @return degrees
             */
            function rad2deg(rad) {
                conv_factor = 360 / (2.0 * Math.PI);
                return (rad * conv_factor);
            }

            /* Convert degrees to metres for known latitude
             *
             * @param latdeg
             *
             * @return latlen (metres for known latitude)
             */
            function degtometerslat(latdeg) {
                lat = deg2rad(latdeg);
                m1 = 111132.92; // latitude calculation term 1
                m2 = -559.82; // latitude calculation term 2
                m3 = 1.175; // latitude calculation term 3
                m4 = -0.0023; // latitude calculation term 4
                latlen = m1 + (m2 * Math.cos(2 * lat)) + (m3 * Math.cos(4 * lat)) + (m4 * Math.cos(6 * lat));
                return latlen;
            }

            /* Convert degrees to metres for known longitude
             *
             * @param latdeg
             *
             * @return latlen (metres for known longitude)
             */
            function degtometerslon(latdeg) {
                lat = deg2rad(latdeg);
                p1 = 111412.84; // longitude calculation term 1
                p2 = -93.5; // longitude calculation term 2
                p3 = 0.118; // longitude calculation term 3
                longlen = (p1 * Math.cos(lat)) + (p2 * Math.cos(3 * lat)) + (p3 * Math.cos(5 * lat));
                return longlen;
            }

             // convert degrees to radians
            Number.prototype.toRad = function () {
                return this * Math.PI / 180;
            }

             // convert radians to degrees (signed)
            Number.prototype.toDeg = function () {
                return this * 180 / Math.PI;
            }

            Number.prototype.padLZ = function (w) {
                var n = this.toString();
                for (var i = 0; i < w - n.length; i++) n = '0' + n;
                return n;
            }

            /**
             * Convert Ordnance Survey grid reference easting/northing coordinate to (OSGB36) latitude/longitude
             *
             * @param {OsGridRef} easting/northing to be converted to latitude/longitude
             * @return {LatLon} latitude/longitude (in OSGB36) of supplied grid reference
             */
            OsGridRef.osGridToLatLong = function (gridref) {
                var E = gridref.easting;
                var N = gridref.northing;

                var a = 6377563.396,
                    b = 6356256.910; // Airy 1830 major & minor semi-axes
                var F0 = 0.9996012717; // NatGrid scale factor on central meridian
                var lat0 = 49 * Math.PI / 180,
                    lon0 = -2 * Math.PI / 180; // NatGrid true origin
                var N0 = -100000,
                    E0 = 400000; // northing & easting of true origin, metres
                var e2 = 1 - (b * b) / (a * a); // eccentricity squared
                var n = (a - b) / (a + b),
                    n2 = n * n,
                    n3 = n * n * n;

                var lat = lat0,
                    M = 0;
                do {
                    lat = (N - N0 - M) / (a * F0) + lat;

                    var Ma = (1 + n + (5 / 4) * n2 + (5 / 4) * n3) * (lat - lat0);
                    var Mb = (3 * n + 3 * n * n + (21 / 8) * n3) * Math.sin(lat - lat0) * Math.cos(lat + lat0);
                    var Mc = ((15 / 8) * n2 + (15 / 8) * n3) * Math.sin(2 * (lat - lat0)) * Math.cos(2 * (lat + lat0));
                    var Md = (35 / 24) * n3 * Math.sin(3 * (lat - lat0)) * Math.cos(3 * (lat + lat0));
                    M = b * F0 * (Ma - Mb + Mc - Md); // meridional arc

                } while (N - N0 - M >= 0.00001); // ie until < 0.01mm

                var cosLat = Math.cos(lat),
                    sinLat = Math.sin(lat);
                var nu = a * F0 / Math.sqrt(1 - e2 * sinLat * sinLat); // transverse radius of curvature
                var rho = a * F0 * (1 - e2) / Math.pow(1 - e2 * sinLat * sinLat, 1.5); // meridional radius of curvature
                var eta2 = nu / rho - 1;

                var tanLat = Math.tan(lat);
                var tan2lat = tanLat * tanLat,
                    tan4lat = tan2lat * tan2lat,
                    tan6lat = tan4lat * tan2lat;
                var secLat = 1 / cosLat;
                var nu3 = nu * nu * nu,
                    nu5 = nu3 * nu * nu,
                    nu7 = nu5 * nu * nu;
                var VII = tanLat / (2 * rho * nu);
                var VIII = tanLat / (24 * rho * nu3) * (5 + 3 * tan2lat + eta2 - 9 * tan2lat * eta2);
                var IX = tanLat / (720 * rho * nu5) * (61 + 90 * tan2lat + 45 * tan4lat);
                var X = secLat / nu;
                var XI = secLat / (6 * nu3) * (nu / rho + 2 * tan2lat);
                var XII = secLat / (120 * nu5) * (5 + 28 * tan2lat + 24 * tan4lat);
                var XIIA = secLat / (5040 * nu7) * (61 + 662 * tan2lat + 1320 * tan4lat + 720 * tan6lat);

                var dE = (E - E0),
                    dE2 = dE * dE,
                    dE3 = dE2 * dE,
                    dE4 = dE2 * dE2,
                    dE5 = dE3 * dE2,
                    dE6 = dE4 * dE2,
                    dE7 = dE5 * dE2;
                lat = lat - VII * dE2 + VIII * dE4 - IX * dE6;
                var lon = lon0 + X * dE - XI * dE3 + XII * dE5 - XIIA * dE7;

                return new LatLon(lat.toDeg(), lon.toDeg());
            }

            /*
             * Initialize - Create Google Map
             *
             * @param myLat
             * @param myLong
             * @param myZoom
             * @param latlons
             */
           // function initialize(myLat, myLong, myZoom) {
            function initialize() {


              var myLat = 52.5;
              var myLong = -4;
              var myZoom = 7;

              var styles = [
              {
                
                  // Style the map with the custom hue
                  stylers: [
                  { "hue":"#374150" }
                  ]

                },
                {
                  // Remove road labels
                  featureType:"road",
                  elementType:"labels",
                  stylers: [
                  { "visibility":"off" }
                  ]
                },
                {
                  // Style the road
                  featureType:"road",
                  elementType:"geometry",
                  stylers: [
                  { "lightness":100 },
                  { "visibility":"simplified" }
                  ]
                }
                ];


              
              console.log("create map");

                var myLatLng = new google.maps.LatLng(myLat, myLong);
                var mapOptions = {
                    zoom: myZoom,
                    center: myLatLng,
                    scrollwheel:true,
                    streetViewControl:false,
                    mapTypeControlOptions: {
                      mapTypeIds:[]
                    }
                };

                map = new google.maps.Map(document.getElementById('map'),
                    mapOptions);


                var styledMap = new google.maps.StyledMapType(styles, { name:"Area Map" });
                map.mapTypes.set('Area Map', styledMap);
                map.setMapTypeId('Area Map');

            }





            google.maps.event.addDomListener(window, 'load', initialize);

            var adminBoundaryArea;
            var map ;
            var selectedAreaId;
            var lastSelectedPolygon;


            function drawArea(latlons, code) {
              //console.log(latlons);
              console.log("draw " + latlons.length);
                if (latlons != null) {

                    for (var j = 0; j < latlons.length;j++)
                    {
                       var adminCoordsArea = new Array();
                       //alert('j = ' + j + ' adminCoords[i] = null ' + adminCoords[0]);
                       for (var i = 0; i < latlons[j].length; i = i + 1) {
                        // console.log( "add poit ; " + latlons[j][i].lat, latlons[j][i].lon);
                           adminCoordsArea[i] = new google.maps.LatLng(latlons[j][i].lat, latlons[j][i].lon);
                       }

                       
            
                       // Construct the polygon
                       // setting up is attributes, eg, fill colour
                       adminBoundaryArea = new google.maps.Polygon({
                           paths: adminCoordsArea,
                           strokeColor: '#fff',
                           strokeOpacity: 0.8,
                           strokeWeight: .5,
                           fillColor: '#ccc',
                           fillOpacity: 0.7,
                           id:code,
                           selected:false
                       });

                       //polygons.push(adminBoundaryArea);

                       google.maps.event.addListener(adminBoundaryArea, 'click', function (event) {
                         // console.log(areaObj);
                         // console.log(this.id +":"+ areaMap[this.id]);
                          showData( areaMap[this.id] );


                         // $.each(polygons, function (index,value){    
                            // console.log(selectedAreaId +":"+ this.id +", " + value.selected+ "::" + value.id);
                           /* if(selectedAreaId!==value.id){
                              polygons[index].selected = false;
                              
                            }else{
                              polygons[index].selected = true;
                            }*/
                           // lastSelectedPolygon.setOptions({fillColor:'#ccc'})

                          //});

                          //this.selected = ! this.selected;

                          if(selectedAreaId !== this.id){
                            selectedAreaId = this.id;
                            if(lastSelectedPolygon){
                              lastSelectedPolygon.setOptions({fillColor:'#ccc'});
                              
                            }
                              lastSelectedPolygon = this;
                              lastSelectedPolygon.setOptions({fillColor:'#00c'});
                          }else{
                            selectedAreaId="";
                            if(lastSelectedPolygon){
                              lastSelectedPolygon.setOptions({fillColor:'#ccc'});
                            }
                            lastSelectedPolygon = null;
                          }
                          
                          //console.log("selected: " + this.selected);
                        });
                      google.maps.event.addListener(adminBoundaryArea,"mouseover",function(){
                        if( this.id !== selectedAreaId){
                         this.setOptions({fillColor: '#333',
                             fillOpacity: 0.7});

                        }
                      }); 

                      google.maps.event.addListener(adminBoundaryArea,"mouseout",function(){
                        var clr = '#ccc';
                        if( this.id === selectedAreaId){
                          clr = '#00c';
                        }
                       this.setOptions({fillColor: clr,
                           fillOpacity: 0.7});
                      });

                      //console.log("set boudary " +j);
                       adminBoundaryArea.setMap(map);
                    }

                }

            }

            function initGenderChart(){
              // Create the chart
              genderChart = new Highcharts.Chart({
                  chart: {
                      renderTo: 'genderChart',
                      type: 'pie',
                      spacingTop:0,
                      marginTop:0,
                      marginBottom:30
                  },
                  title: {
                    floating: true,
                      text: ''
                  },
                  yAxis: {
                      title: {
                          text: ''
                      }
                  },
                  plotOptions: {
                      pie: {
                          shadow: false
                      }
                  },
                  tooltip: {
                      formatter: function() {
                          return '<b>'+ this.point.name +'</b>: '+ this.y +' %';
                      }
                  },
                  series: [{
                      name: 'Gender',
                      data: [],
                      size: '90%',
                      innerSize: '55%',
                      showInLegend:true,
                      dataLabels: {
                          enabled: false
                      }
                  }]
              });
            }

            function initAgeChart(){
              // Create the chart
              ageChart = new Highcharts.Chart({
                  chart: {
                      renderTo: 'ageChart',
                      type: 'pie',
                      spacingTop:0,
                      marginTop:0,
                      marginBottom:30
                  },
                  title: {
                      text: ''
                  },
                  yAxis: {
                      title: {
                          text: ''
                      }
                  },
                  plotOptions: {
                      pie: {
                          shadow: false
                      }
                  },
                  tooltip: {
                      formatter: function() {
                          return '<b>'+ this.point.name +'</b>: '+ this.y ;
                      }
                  },
                  series: [{
                      name: 'Age Groups',
                      data: [],
                      size: '90%',
                      innerSize: '55%',
                      showInLegend:true,
                      dataLabels: {
                          enabled: false
                      }
                  }]
              });
            }
            
