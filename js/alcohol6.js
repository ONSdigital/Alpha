var title = "Figure 6: Alcohol-related death rates per 100,000 population, males, UK constituent countries, 2002-2012";
var units = "";
var yAxisTitle = "Age-standardised rates per 100,000 population";

var data = [];
data[0] = [14.3,15.5,15.2,15.7,16.2,15.9,16.6,15.7,16.0,15.9,14.7];
data[1] = [15.3,17.1,16.9,15.8,17.0,20.1,21.0,19.9,18.5,17.0,18.0];
data[2] = [21.0,16.8,21.7,20.9,20.6,23.2,21.4,21.3,21.6,19.6,19.4];
data[3] = [39.5,39.8,38.8,37.7,38.2,34.8,34.5,29.5,31.5,27.8,24.8];



//set mon to -1 to ignore
var startMon = -1; // keep this as base 1 to match years eg Sept is month 9
//interval to skip in the xAxis category
var interval = 1;
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


