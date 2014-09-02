var regional = (function () {

  // create a central model for the data
  // store each area based onthe ONS ID
  // eg { "" }
  var model = {};

  $(document).ready(function() {
    console.log("Regional ready!");
    areas.loadData(parseAreas);

    addListeners();


    $('#loader').modal('show');

    // init chart options and load individual charts
    initCharts();
    //init map
    initialize();

    $('.selectpicker').selectpicker('render');


  });







  function parseAreas(data){
    model = data;
    console.log (model);
    loadPopData();
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

    $("#viewBtn").click( function(evt){
      evt.preventDefault();
      console.log("VIEW updateDisplay "  + lastArea);

      showSingle(lastArea);
    })

    $("#clearBtn").click( function(evt){
      evt.preventDefault();
      console.log("CLEAR");

      comparisons =[];
      updateDisplay();

    })
    $("#addBtn").click( function(evt){
      evt.preventDefault();
      console.log("add button "  + lastArea);

      addArea(lastArea);
    })
  }


})();
