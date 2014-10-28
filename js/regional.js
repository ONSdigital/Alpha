var regional = (function () {

  $(document).ready(function() {
    areas.loadData(parseAreas);

    $('#slide-panel').removeClass('visible');

    // init chart options and load individual charts
    initCharts();
    //init map
    initializeMap();
  });



  function parseAreas(data){
    model = data;
    loadPopData();

    addListeners();
  }


  function addListeners(){
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


    $("#addBtn").click( function(evt){
      evt.preventDefault();
      addArea(lastArea);
    })


    $(".tab-pane__tab").click( function(evt){
      evt.preventDefault();

      if(this.text==="Comparisons"){
        $(window).resize();
      }

    })


    $('a.closeBtn').on('click', function(evt){
        evt.preventDefault();
        var idx = comparisons.indexOf( this.name );
        if (idx > -1) {
          comparisons.splice(idx, 1);
        }
        showCharts();
    });

  }


})();
