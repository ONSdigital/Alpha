var title = "Figure 3: Alcohol-related death rates per 100,000 population by age group, males, United Kingdom, 2002-2012";
var units = "";
var yAxisTitle = "Deaths";

var data = [];
data[0] = [2.6,2.3,2.4,2.4,2.4,2.5,2.9,2.6,2.7,2.3,2.1];
data[1] = [28.0,30.2,29.5,29.8,31.0,30.0,30.8,28.9,28.3,27.1,24.7];
data[2] = [40.0,42.9,42.5,43.3,44.5,44.1,45.5,41.5,44.9,43.9,40.1];
data[3] = [25.4,25.1,24.9,25.4,23.3,23.1,23.6,25.8,23.0,24.8,28.5];


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
        name: 'Aged  15-34',
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
        name: 'Aged  35-54',
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
        name: 'Aged  55-74',
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
        name:'Aged 75+',
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


