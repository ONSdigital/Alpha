    var map;
      function initialize() {
        // Create a simple map.
        map = new google.maps.Map(document.getElementById('map'), {
          zoom: 7,
          center: {lat: 52, lng: -2}
        });

        // Load a GeoJSON from the same server as our demo.
        map.data.loadGeoJson('data/outlines.json');


        map.data.setStyle({
          fillColor: 'green'
        });

        map.data.addListener('mouseover', function(evt) {

          //console.log(evt.feature);
          //console.log( evt.feature.getProperty("CTYUA13NM") );
          $("#region").text( evt.feature.getProperty("CTYUA13NM") );
          map.data.revertStyle();
          map.data.overrideStyle(evt.feature, {
             // fillColor:'#aaa',
              strokeOpacity: 0.8,
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
          console.log( evt.feature.getProperty("CTYUA13CD") );
          if( evt.feature.getProperty('isSelected') ){
            evt.feature.setProperty('isSelected', false);
            removeArea( evt.feature.getProperty("CTYUA13CD") );
          }else{
            evt.feature.setProperty('isSelected', true);
            //addArea( evt.feature.getProperty("CTYUA13CD") );
            setArea( evt.feature.getProperty("CTYUA13CD") );
            showSummary(evt.feature.getProperty("CTYUA13CD"));
          }

          
          
        });

      }

      google.maps.event.addDomListener(window, 'load', initialize);