var regional = (function () {

  $(document).ready(function() {
    areas.loadData();

    loadPopData();

    // hide the slide out panel first
    $('#slide-panel').removeClass('visible');

    // init chart options and load individual charts
    charting.initCharts();

    // init map
    maps.initializeMap();

    addListeners();
  });





  // various button listeners
  function addListeners(){

    $("#modal").click(function(evt) {
      $("#modal").toggle();
    });

    // drop down menus
    $("#region").change(function(e) {
      return areas.getRegion(1);
    });

    $("#county").change(function(e) {
      return areas.getCounty(1);
    });

    $("#district").change(function(e) {
      return areas.getDistrict(1);
    });

    // search button
    $("#search").click( function(evt){
      evt.preventDefault();
      location.hash = "#regional" ;
      testPostCode();
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

    // HACK: resize charts that are offscreen
    $(".tab-pane__tab").click( function(evt){
      evt.preventDefault();
      $(window).resize();
    })


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
