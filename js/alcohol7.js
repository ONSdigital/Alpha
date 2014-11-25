var title = "Figure 7: Alcohol-related death rates per 100,000 population, females, UK constituent countries, 2002-2012";
var units = "";
var yAxisTitle = "Age-standardised rates per 100,000 population";

var data = [];
data[0] = [7.0,7.2,7.5,7.3,7.8,8.0,7.9,7.7,7.5,7.6,7.3];
data[1] = [7.3,8.1,8.7,8.9,9.1,8.6,11.0,8.8,10.1,9.5,10.4];
data[2] = [8.4,9.4,9.3,8.4,8.2,9.3,10.2,10.4,9.9,7.8,9.8];
data[3] = [16.1,16.2,15.1,16.7,17.2,14.8,14.7,14.4,13.4,13.8,10.5];

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
        name: 'England',
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
        name: 'Wales',
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
        name: 'Northern Ireland',
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
        dashStyle: 'longdot'
      },
      {
        name:'Scotland',
        data: data[3],
        marker:{
          symbol:"diamond",
          states: {
            hover: {
              fillColor: '#7fbee1',
              radiusPlus: 0,
              lineWidthPlus: 0
            }
          }
        },
        dashStyle: 'shortdot'
      },
     


  ];

  



  initLineChart();


});


