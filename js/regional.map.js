/*
    creates Google map and loads geoJSON outlines
    the geoJSON has been previously processed from ONS outlines
    simplified and the polygon coords converted to WGS84

*/

var maps = (function () {

    var URL = 'data/district.json'
    var map;
    var marker;
    var lastSelected;


    function initializeMap() {
        var styles = [
            {
                featureType: "all",
                stylers: [
                   { saturation: -80 }
                ]
            },
            {
              featureType: "road",
              elementType: "geometry",
              stylers: [
                { lightness: 100 },
                { visibility: "simplified" }
              ]
            },{
              featureType: "road",
              elementType: "labels",
              stylers: [
                { visibility: "off" }
              ]
            }
        ];
        // Create a new StyledMapType object, passing it the array of styles,
        // as well as the name to be displayed on the map type control.
        var styledMap = new google.maps.StyledMapType(styles,{name: "Styled Map"});

        map = new google.maps.Map(document.getElementById('map'), {
            zoom: 7,
            center: {lat: 52.5, lng: -1.9},
            scrollwheel:false,
            panControl: false,
            mapTypeControl: false,
            streetViewControl: false
        });

        //Associate the styled map with the MapTypeId and set it to display.
        map.mapTypes.set('map_style', styledMap);
        map.setMapTypeId('map_style');


        map.data.loadGeoJson(URL);

        // each polygon feature has the ONS name and code, 
        // eg  "LAD11NM", "LAD11CD" (name, code) for local districts or "CTYUA13NM", "CTYUA13CD" for county
        map.data.addListener('mouseover', function(evt) {
            $("#regionName").text( evt.feature.getProperty("LAD11NM") );
            map.data.revertStyle();
            map.data.overrideStyle(evt.feature, {
                fillColor:'#FCF0F2',
                fillOpacity: 0.4,
                strokeOpacity: 0.6,
                strokeColor: '#A8233E',
                strokeWeight:2
            });
        });


        map.data.addListener('mouseout', function(evt) {
            map.data.revertStyle();
            $("#regionName").text( 'Click map to select an area' );
        });


        map.data.setStyle(function(feature) {
            var stroke = '#ccc';
            var color = '#f2f2f2';
            var op = 0.1;

            if (feature.getProperty('isSelected')) {
                color = '#A8233E';
                op=0.3
            }
            return ({
                fillColor: color,
                fillOpacity: op,
                strokeOpacity: 0,
                strokeColor: stroke,
                strokeWeight: 1
            });
        });


        // Set 'isSelected', changing the highlighted polygon on the map.
        map.data.addListener('click', function(evt) {
            location.hash = "#regional" ;
            if( $("#modal").is(':visible') ){
                $("#modal").toggle();
            }
            if( lastSelected ){
                lastSelected.setProperty('isSelected', false);
            }

            if( evt.feature.getProperty('isSelected') ){
                evt.feature.setProperty('isSelected', false);
                removeArea( evt.feature.getProperty("LAD11CD") ); //"CTYUA13CD"
            }else{
                evt.feature.setProperty('isSelected', true);
                lastSelected  =  evt.feature;
                var coords = evt.feature.getGeometry();
                var centroid = getCentroid(coords);
                map.panTo(centroid);
                regionalData.setArea( evt.feature.getProperty("LAD11CD") );
                regionalData.showSummary(evt.feature.getProperty("LAD11CD"));

                //call to NeSS
                neighbourhood.getStats(evt.feature.getProperty("LAD11NM"), false);
            }

        });

    }


    function showPoint(lat,lng){
        var myLatlng = new google.maps.LatLng(lat,lng);
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


    function displayArea(id){
        map.data.forEach( function (feature){
            if(feature.getProperty("LAD11CD")===id){
                feature.setProperty('isSelected', true);
            }else{
                feature.setProperty('isSelected', false);
            }

        });

    }

    // get centroid coord for polygons and multipolygons
    function getCentroid(coords) {

        var minLat = 360.0;
        var maxLat = -360.0;
        var minLng = 360.0;
        var maxLng = -360.0;

        var temp = coords.getArray();
        var len = temp.length;

        // loop through each polygon
        for (var j = 0; j < len; j++) {
            // the coords passed for multipolygons are an array of coords objects
            // and need to have the ring geometry extracted for each set
            if( coords.getType()==="MultiPolygon" ){
                temp[j] = temp[j].getAt(0);
            }
            var ring = temp[j];
            var ringLen = ring.getLength();

            //loop through each point in the polygon
            for (var i = 0; i < ringLen; i++) {
                var pt = ring.getAt(i);
                var lat  = pt.lat();
                var lng  = pt.lng();

                if (lng < minLng) {
                    minLng = lng;
                }
                if (lng > maxLng) {
                 maxLng = lng;
                }
                if (lat < minLat) {
                    minLat = lat;
                }
                if (lat > maxLat) {
                    maxLat = lat;
                }

            }

        }

        var avLng = (minLng + maxLng) / 2;
        var avLat = (minLat + maxLat) / 2;
        return new google.maps.LatLng(avLat, avLng);
    }

    return{
        initializeMap:initializeMap,
        showPoint:showPoint,
        displayArea:displayArea
    }

})();
