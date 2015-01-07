var regional = (function () {

  $(document).ready(function() {
    areas.loadData(parseAreas);

    $('#slide-panel').removeClass('visible');

    // init chart options and load individual charts
    initCharts();
    //init map
    maps.initializeMap();
  });



  function parseAreas(data){
    model = data;
    loadPopData();

    addListeners();
  }


  function addListeners(){
    $("#modal").click(function(evt) {
      $("#modal").toggle();
    });
    $("#opener").click(function(evt) {
      evt.preventDefault();
      location.hash = "#regional" ;
      if( $("#modal").is(':visible') ){
          $("#modal").toggle();
       }
    });

    $("#region").change(function(e) {
      return areas.getRegion(1);
    });

    $("#county").change(function(e) {
      return areas.getCounty(1);
    });

    $("#district").change(function(e) {
      return areas.getDistrict(1);
    });

    $("#search").click( function(evt){
      evt.preventDefault();
      location.hash = "#regional" ;
      testPostCode();
    })

    $("#showBtn").click( function(evt){
      evt.preventDefault();
      $("#comparison").show();
      showCharts();
    })

    $("#clearBtn").click( function(evt){
      evt.preventDefault();
      $("#comparison").hide();
      comparisons =[];
      showCharts();
    })


    $("#compareBtn").click( function(evt){
      evt.preventDefault();
      addArea(lastArea);
      showCharts();
    })


    $(".tab-pane__tab").click( function(evt){
      evt.preventDefault();
      $(window).resize();
    })


    $('a.closeBtn').on('click', function(evt){
        evt.preventDefault();
        var idx = comparisons.indexOf( this.name );
        if (idx > -1) {
          comparisons.splice(idx, 1);
        }
        console.log(comparisons);
        showCharts();
    });


      $('#opener').click(function() {
        var $lefty = $("#slide-panel");
        $lefty.animate({
          left: parseInt($lefty.css('left'),10) == 0 ?
            -$lefty.outerWidth() :
            0
        });
      });
   

  }




})();
