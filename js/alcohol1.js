var title = "Figure 1: Alcohol-related death rates per 100,000 population, United Kingdom, 2002-2012";
var units = "";
var yAxisTitle = "";

var data = [];
data[0] = [16.8,17.8,17.6,17.8,18.3,18,18.6,17.3,17.7,17.1,15.9];
data[1] = [7.9,8.1,8.3,8.3,8.8,8.7,8.7,8.4,8.2,8.3,7.8];
data[2] = [12.2,12.8,12.8,12.9,13.4,13.2,13.5,12.8,12.8,12.6,11.8];
//set mon to -1 to ignore
var startMon = -1; // keep this as base 1 to match years eg Sept is month 9
//interval to skip in the xAxis category
var interval = 3;
var year = 2002;




$(document).ready(function(){

  populateCategories();

  options.legend.enabled = true;
  options.yAxis.min = 0;
 
  options.series = [
    {
        name: 'Males',
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
        name: 'Females',
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
      },
      {
        name: 'All',
        data: data[2],
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
        dashStyle: 'shortdots'
      }
  ];

  



  initLineChart();


});


