var regional = (function () {

  // create a central model for the data
  // store each area based onthe ONS ID
  // eg { "" }
  var model = {};

  $(document).ready(function() {
    console.log("Regional ready!");
    areas.loadData(parseAreas);

    initialise();
    addListeners();

    $('.selectpicker').selectpicker('render');


  });












  function initialise(){
    $('#loader').modal('show');
    // init charts

          // init chart options and then load individual charts
    setOptions();

    populationPyramid();
    stackedBar();
    initTrend();

    
    regional_chart.initGenderChart();
    regional_chart.initAgeChart();


  }


  function parseAreas(data){
    model = data;
    console.log (model);
    loadPopData();
  }


  function addListeners(){
    $("#region").change(function(e) {
      return areas.getRegion(); 
    });
    $("#county").change(function(e) {
      return areas.getCounty(); 
    });
    $("#district").change(function(e) {
      return areas.getDistrict(); 
    });

    $("#search").click( function(evt){
      evt.preventDefault();
      testPostCode();
    })
  }


})();