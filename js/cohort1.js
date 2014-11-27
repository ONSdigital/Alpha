var title = "Figure 1: Average number of live-born children, by age 30 and completed family size, by year of birth of woman";
var units = "";
var yAxisTitle = "Average number of live-born children";

var data = [];
data[0] = [1.27,1.33,1.33,1.36,1.37,1.37,1.41,1.43,1.46,1.49,1.55,1.57,1.59,1.66,1.73,1.78,1.80,1.83,1.86,1.87,1.89,1.89,1.86,1.83,1.80,1.77,1.74,1.63,1.62,1.57,1.54,1.51,1.50,1.48,1.44,1.42,1.40,1.38,1.35,1.32,1.31,1.28,1.25,1.22,1.20,1.18,1.17,1.16,1.15,1.12,1.10,1.06,1.03,1.00,1.00,0.99,0.99,0.98,0.98,1.00,1.01,1.01,1.02,1.02];
data[1] = [2.00,2.05,2.05,2.10,2.11,2.12,2.18,2.20,2.24,2.26,2.35,2.34,2.34,2.39,2.42,2.42,2.40,2.39,2.39,2.36,2.36,2.34,2.29,2.24,2.21,2.19,2.19,2.08,2.11,2.08,2.07,2.04,2.05,2.05,2.02,2.02,2.02,2.01,1.99,1.98,1.98,1.96,1.94,1.93,1.92,1.91,1.91,1.91];


//set mon to -1 to ignore
var startMon = -1; // keep this as base 1 to match years eg Sept is month 9
//interval to skip in the xAxis category
var interval = 10;
var year = 1920;

var bands =[];


$(document).ready(function(){

  populateCategories();

  options.legend.enabled = true;
  options.yAxis.min = 0;
  options.series = [
    {
        name: 'By Age 30',
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
        name: 'Completed famliy size',
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

  
  options.xAxis.title = {text: "Year of birth"};
  options.xAxis.plotLines = [
            {
                value:20,
                color: plotLineColor,
                width:2,
                zIndex:1,
                label:{text:'1',rotation:0}
            },{
                value:47,
                color: plotLineColor,
                width:2,
                zIndex:1,
                label:{text:'2',rotation:0}
            },{
                value:62,
                color: plotLineColor,
                width:2,
                zIndex:1,
                label:{text:'3',rotation:0}
            }
            ];


  initLineChart();


});


