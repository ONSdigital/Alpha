    var map;
    var marker;
    var lastSelected;



      function initialize() {
        // Create a simple map.
        map = new google.maps.Map(document.getElementById('map'), {
          zoom: 10,
          center: {lat: 51.5, lng: -2.9},
          scrollwheel:false,
        });

        // Load a GeoJSON from the same server as our demo.
        map.data.loadGeoJson('data/district.json');


        map.data.setStyle({
          fillColor: 'green'
        });

        map.data.addListener('mouseover', function(evt) {

          //console.log(evt.feature);
          //console.log( evt.feature.getProperty("CTYUA13NM") );
          //$("#region").text( evt.feature.getProperty("CTYUA13NM") );
          $("#region").text( evt.feature.getProperty("LAD11NM") );
          map.data.revertStyle();
          map.data.overrideStyle(evt.feature, {
             // fillColor:'#aaa',
              strokeOpacity: 0.1,
              strokeColor: '#999',
              strokeWeight:2
            });
        });

        map.data.addListener('mouseout', function(evt) {
          map.data.revertStyle();
        });


        map.data.setStyle(function(feature) {
          var stroke = '#ccc';
          var color = '#f2f2f2';
          var op = 0.1
          if (feature.getProperty('isSelected')) {
            color = 'red';
            op=0.2
          }
          return /** @type {google.maps.Data.StyleOptions} */({
            fillColor: color,
            fillOpacity: op,
            strokeOpacity: 0,
            strokeColor: stroke,
            strokeWeight: 1
          });
        });



        // When the user clicks, set 'isColorful', changing the color of the letters.
        map.data.addListener('click', function(evt) {
          console.log( evt.feature.getProperty("LAD11CD") );
          console.log( evt );
          console.log( evt.feature.getGeometry().getArray() );
          //clea rlast 


          if( lastSelected ){
            lastSelected.setProperty('isSelected', false);
          }

          if( evt.feature.getProperty('isSelected') ){
            evt.feature.setProperty('isSelected', false);
           // removeArea( evt.feature.getProperty("CTYUA13CD") );
            removeArea( evt.feature.getProperty("LAD11CD") );
          }else{
            evt.feature.setProperty('isSelected', true);
            lastSelected  =  evt.feature;
            var coords = evt.feature.getGeometry();
            var centroid = getCentroid(coords);
            map.panTo(centroid);
            //setArea( evt.feature.getProperty("CTYUA13CD") );
            //showSummary(evt.feature.getProperty("CTYUA13CD"));
            setArea( evt.feature.getProperty("LAD11CD") );
            showSummary(evt.feature.getProperty("LAD11CD"));
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

    
    function getCentroid(coords) {

          var minLat = 360.0;
    var maxLat = -360.0;
    var minLng = 360.0;
    var maxLng = -360.0;
                       console.log(coords);
                       console.log(coords.getType());
                     
      var len = coords.getLength();

      var temp = coords.getArray();

      for (var j = 0; j < len; j++) {
        var ring = coords.getAt(j);
        var ringLen = ring.getLength();

        console.log( coords.getAt(j) );
        console.log( ring.getAt(1) );
        

       for (var i = 0; i < ringLen; i++) {
                           var pt = ring.getAt(i);
console.log(pt.lat(), pt.lng() );
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

      console.log("min " + minLat, minLng)
      var avLng = (minLng + maxLng) / 2;
      var avLat = (minLat + maxLat) / 2;
      //return new LatLon(avLat, avLng);
     return new google.maps.LatLng(avLat, avLng);
    }

    google.maps.event.addDomListener(window, 'load', initialize);
