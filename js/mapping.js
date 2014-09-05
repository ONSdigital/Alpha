
            
           // google.maps.event.addDomListener(window, 'load', initialize);
           var color = "#00649E";
            var adminBoundaryArea;
            var map ;
            var selectedAreaId;
            var lastSelectedPolygon;
            var marker;

            var polygons = [];

            var ens;

            // Open Geography URL to search for a ward and return its boundaries. Search string goes between the two variables
           // var opengep1 =  "https://mapping.statistics.gov.uk/arcgis/rest/services/WD/WD_DEC_2011_EW_BGC/MapServer/find?searchText=";
            var district1 =  "https://mapping.statistics.gov.uk/arcgis/rest/services/LAD/LAD_DEC_2011_GB_BFE/MapServer/find?searchText=";
            var opengep1 =  "https://mapping.statistics.gov.uk/arcgis/rest/services/CTYUA/CTYUA_DEC_2013_EW_BGC/MapServer/find?searchText=";
            var region1 =  "https://mapping.statistics.gov.uk/arcgis/rest/services/GOR/GOR_DEC_2010_EN_BFE/MapServer/find?searchText=";
            // Service name relates to a particular geography, eg, Ward, Metropolitan County
            // Layer name relates to a particular geography, eg, Ward, Metropolitan County
            // Here it is only searching for Ward Boundaries using service: 'WD/WD_DEC_2011_EW_BGC' and layer: 'WD_DEC_2011_EW_BGC'
           // var opengep2 =  "&contains=true&searchFields=&sr=&layers=WD_DEC_2011_EW_BGC&layerDefs=&returnGeometry=true&maxAllowableOffset=&geometryPrecision=&dynamicLayers=&returnZ=false&returnM=false&gdbVersion=&f=json&callback=callback";
            var district2 =  "&contains=true&searchFields=&sr=&layers=LAD_DEC_2011_GB_BFE&layerDefs=&returnGeometry=true&maxAllowableOffset=&geometryPrecision=&dynamicLayers=&returnZ=false&returnM=false&gdbVersion=&f=json&callback=callback";
            var opengep2 =  "&contains=true&searchFields=&sr=&layers=CTYUA_DEC_2013_EW_BGC&layerDefs=&returnGeometry=true&maxAllowableOffset=&geometryPrecision=&dynamicLayers=&returnZ=false&returnM=false&gdbVersion=&f=json&callback=callback";
            var region2 =  "&contains=true&searchFields=&sr=&layers=GOR_DEC_2010_EN_BFE&layerDefs=&returnGeometry=true&maxAllowableOffset=&geometryPrecision=&dynamicLayers=&returnZ=false&returnM=false&gdbVersion=&f=json&callback=callback";

          // var latlons = new Array();

            function showMarker(){
                if(marker){
                    marker.setVisible(true);
                }
            }
           function hideMarker(){
                if(marker){
                    marker.setVisible(false);
               }
           }

             // start process with call to Open Geography
            function getBoundaries(areaNameOrCode, region) {

                //clear area first
                if(polygons.length>0){
                    $.each(polygons, function(index, item){
                        item.setPaths([]);
                    })

                    polygons = [];
                }

                if(region==="district"){
                    callOpenGeog(district1 + areaNameOrCode + district2);
                }
                if(region==="region"){
                    callOpenGeog(region1 + areaNameOrCode + region2);
                }else{
                    callOpenGeog(opengep1 + areaNameOrCode + opengep2);
                }
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
                console.log( "callOpenGeog ");
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
                var data
                // get boundaries
                console.log( response );
                //console.log( "got " + response.results[0].attributes.CTYUA13NM);
                // console.log( response.results[0] );
                /// console.log( response.results[0].attributes.CTYUA13NM+": " + parseInt( response.results[0].attributes["Shape.STArea()"],10)/1000000  );
                //capture area
                if(response.results[0]){

                    // TOP LEVEL REGIOND
                    if(response.results[0].attributes.GOR10CD){
                        areaMeasures[response.results[0].attributes.GOR10CD] = parseInt(response.results[0].attributes["Shape.STArea()"],10)/1000000;
                        areaObj[response.results[0].attributes.GOR10CD].area = parseInt(response.results[0].attributes["Shape.STArea()"],10)/1000000;
                        data = areaObj[response.results[0].attributes.GOR10CD];
                    }
                    // DISTRICTS
                    if(response.results[0].attributes.LAD11CD){
                        areaMeasures[response.results[0].attributes.LAD11CD] = parseInt(response.results[0].attributes["Shape.STArea()"],10)/1000000;
                        areaObj[response.results[0].attributes.LAD11CD].area = parseInt(response.results[0].attributes["Shape.STArea()"],10)/1000000;
                        data = areaObj[response.results[0].attributes.LAD11CD];
                    }

                    // ALL THE OTHERS...
                    if(response.results[0].attributes.CTYUA13CD){
                        areaMeasures[response.results[0].attributes.CTYUA13CD] = parseInt(response.results[0].attributes["Shape.STArea()"],10)/1000000;
                        areaObj[response.results[0].attributes.CTYUA13CD].area = parseInt(response.results[0].attributes["Shape.STArea()"],10)/1000000;
                        data = areaObj[response.results[0].attributes.CTYUA13CD];
                    }


                      if( isNaN(data.area) ){
                        data.area = "";
                        $("#area").text( "Not available" );
                        $("#density").text( "Not available" );
                      }else{
                        $("#area").text( Math.round(data.area) + "km2" );
                        $("#density").text( Math.round( 100* data.changes.now/data.area )/100  );
                      }
                }


          if (response.results.length > 0) 
            {
              // document.getElementById("foundward").value = response.results[0].attributes.WD11NM;

              var ens = new Array();
              //console.log(response.results[0].geometry.rings.length);
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
                    // clear array before adding new coordinates
                    var latlons = [];

                    // create array of points converted to lat/lon (from easting/northing) and capture mins and maxes
                    for (var j = 0; j < ens.length; j++) {
                       //console.log('j = ' + j);
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
                    var zoomLevel = getZoom(minlon, maxlon, minlat, maxlat, 512, 512) -1;

                    // calculate centroid
                    var centroid = getCentroid(minlon, maxlon, minlat, maxlat);
                    //initialize(centroid.lat, centroid.lon, zoomLevel, latlons);

                   // console.log("init map: draw area " + polygons.length);
                    drawArea(latlons, response.results[0].value, centroid, zoomLevel);
                } else {
                   // console.log("No matching ward found");
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
              var myLong = -2;
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


              
              //console.log("create map");

                var myLatLng = new google.maps.LatLng(myLat, myLong);
                var mapOptions = {
                    zoom: myZoom,
                    center: myLatLng,
                    scrollwheel:false,
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

                //add click listener
                google.maps.event.addListener(map, 'click', function (e) {

                    // note reverse lat long; eg x is long, y is lat
                    //mapit.mysociety.org/point/4326/-3.039093017578125,51.54333163339453
                    var latLng = e.latLng;
                    getPointData(latLng);

                    showPoint( latLng.lat(),latLng.lng() );
                    //console.log(latLng.lng() + "," + latLng.lat());
                    
                });

            }







            function showPoint(lat,lon){
              var myLatlng = new google.maps.LatLng(lat,lon);
              map.panTo(myLatlng);

              if(marker){
                marker.setMap(null);
              }

              marker = new google.maps.Marker({
                  position: myLatlng,
                  map: map,
                  title: ''
              });

            }


            function drawArea(latlons, code, centroid, zoomLevel) {

              console.log(centroid);

              var myLatlng = new google.maps.LatLng(centroid.lat,centroid.lon);
              map.panTo(myLatlng);
              map.setZoom(zoomLevel);
              //console.log("draw " + latlons.length);
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
                           strokeColor: color,
                           strokeOpacity: 0.8,
                           strokeWeight: .5,
                           fillColor: color,
                           fillOpacity: 0.7,
                           id:code,
                           selected:false
                       });
                       //console.log("push poly ");
                       polygons.push(adminBoundaryArea);

                       google.maps.event.addListener(adminBoundaryArea, 'click', function (e) {


                         // console.log(areaObj);
                         // console.log(this.id +":"+ areaMap[this.id]);
                          //showData( areaMap[this.id] );


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
                              lastSelectedPolygon.setOptions({fillColor:'#c00'});
                          }else{
                            selectedAreaId="";
                            if(lastSelectedPolygon){
                              lastSelectedPolygon.setOptions({fillColor:'#c00'});
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
                        var clr = color;
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
