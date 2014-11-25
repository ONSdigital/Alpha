var title = "Figure 4: Alcohol-related death rates per 100,000 population by age group, females, United Kingdom, 2002-2012";
var units = "";
var yAxisTitle = "Age-standardised rates per 100,000 population";

var data = [];
data[0] = [0.9,1.2,1.1,1.1,1.1,1.4,1.2,1.5,1.4,1.4,1.2];
data[1] = [13.6,13.3,14.3,14.2,14.8,14.5,14.3,13.8,13.6,13.7,12.2];
data[2] = [18.8,19.8,19.3,19.3,21.1,20.8,21.5,20.1,19.9,19.5,19.8];
data[3] = [11.9,13.2,12.7,13.1,12.4,12.6,12.5,13.4,11.6,12.4,13.5];

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


