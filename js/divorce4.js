var title = "Figure 4: Mean age at divorce of husband and wife, 1972–2012";
var units = "";
var yAxisTitle = "Years";

var data = [];
data[0] = [40.1,38.8,38.5,38.1,38.0,38.1,38.1,37.8,37.6,37.7,37.7,38.0,38.2,37.4,37.8,38.0,38.3,38.3,38.4,38.6,38.8,39.0,39.3,39.6,39.8,40.2,40.4,40.9,41.3,41.5,41.9,42.3,42.7,43.1,43.4,43.7,43.9,44.0,44.2,44.5,44.7];
data[1] = [37.6,36.3,36.5,36.1,36.0,35.8,35.7,35.3,35.2,35.2,35.2,35.4,35.6,34.9,35.3,35.5,35.7,35.7,35.9,36.0,36.3,36.4,36.7,37.0,37.3,37.7,37.9,38.4,38.8,39.1,39.4,39.8,40.2,40.6,40.9,41.2,41.4,41.5,41.7,42.1,42.2];


//set mon to -1 to ignore
var startMon = -1; // keep this as base 1 to match years eg Sept is month 9
//interval to skip in the xAxis category
var interval = 10;
var year = 1972;



$(document).ready(function(){

  populateCategories();

  options.legend.enabled = true;
  options.yAxis.min = 0;
  //options.xAxis.title = {text:"By anniversary"};

  options.series = [
    {
        name: 'Husband',
        data: data[0],
        marker:{
          symbol:"circle",
          states: {
            hover: {
              fillColor: '#007dc3',
              radiusPlus: 0,
              lineWidthPlus: 0
            }
          }
        },
        dashStyle: 'Solid',
      },
          {
        name: 'Wife',
        data: data[1],
        marker:{
          symbol:"square",
          states: {
            hover: {
              fillColor: '#007dc3',
              radiusPlus: 0,
              lineWidthPlus: 0
            }
          }
        },
        dashStyle: 'shortdash',
      }
      
  ];

  
  initLineChart();


});

