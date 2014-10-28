var regional = (function () {

  // create a central model for the data
  // store each area based on the ONS ID
  // eg { "" }
  var model = {};

  $(document).ready(function() {

    


    areas.loadData(parseAreas);


    $('#slide-panel').removeClass('visible');

   // $('#loader').modal('show');

    // init chart options and load individual charts
    initCharts();
    //init map
    initializeMap();

//    $('.selectpicker').selectpicker('render');


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
      console.log("showBtn "  );

      $("#comparison").show();

      showCharts();

    })

    $("#clearBtn").click( function(evt){
      evt.preventDefault();
      console.log("CLEAR");

      $("#comparison").hide();

      comparisons =[];
      //updateDisplay();
      //checkComparisonList();
      //updateComparisonList();
      showCharts();

    })
    $("#addBtn").click( function(evt){
      evt.preventDefault();
      console.log("add button "  + lastArea);

      addArea(lastArea);
    })

    $(".tab-pane__tab").click( function(evt){
      evt.preventDefault();
      console.log("tab button " + this.text);

      if(this.text==="Comparisons"){
        console.log("tabs");
        $(window).resize();

      }


    })


    $('a.closeBtn').on('click', function(evt){
        evt.preventDefault();

      console.log(this.id);
      console.log( this.name );

        var idx = comparisons.indexOf( this.name );
        if (idx > -1) {
          comparisons.splice(idx, 1);
        }
        //checkComparisonList();
        //displayComparisonList();

        showCharts();
    });

  }


})();
