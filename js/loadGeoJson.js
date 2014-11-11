    // loads geojson polygons for each district/county


var map;
var marker;
var lastSelected;


function initializeMap() {
  map = new google.maps.Map(document.getElementById('map'), {
      zoom: 10,
      center: {lat: 51.5, lng: -2.9},
      scrollwheel:false,
      panControl: false,
      mapTypeControl: false,
      streetViewControl: false

  });


    map.data.loadGeoJson('data/district.json');

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
            setArea( evt.feature.getProperty("LAD11CD") );
            showSummary(evt.feature.getProperty("LAD11CD"));

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
