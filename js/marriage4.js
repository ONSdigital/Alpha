var title = "Figure 4: Mean age at marriage1 for men and women, 1972–2012";
var units = "";
var yAxisTitle = "";

var data = [];
data[0] = [28.8,28.8,28.8,29.0,29.2,29.3,29.4,29.4,29.4,29.6,29.8,30.0,30.1,30.2,30.5,30.4,30.9,31.1,31.3,31.6,32.0,32.4,32.7,33.1,33.6,33.9,34.1,34.4,34.8,34.8,35.3,35.6,35.8,36.2,36.4,36.4,36.5,36.3,36.2,36.3,36.5];
data[1] = [26.2,26.1,26.2,26.3,26.5,26.6,26.7,26.6,26.7,26.9,27.0,27.2,27.3,27.5,27.8,27.8,28.3,28.5,28.8,29.1,29.5,29.9,30.3,30.7,31.1,31.4,31.6,31.8,32.1,32.2,32.6,32.9,33.1,33.5,33.7,33.8,33.8,33.7,33.6,33.8,34.0];


//set mon to -1 to ignore
var startMon = -1; // keep this as base 1 to match years eg Sept is month 9
//interval to skip in the xAxis category
var interval = 5;
var year = 1972;




$(document).ready(function(){

  populateCategories();

  options.legend.enabled = true;
  options.yAxis.min = 0;
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
              fillColor: '#409ed2',
              radiusPlus: 0,
              lineWidthPlus: 0
            }
          }
        },
        dashStyle: 'shortdash'
      }
  ];

  
  initLineChart();

});



