var title = "Figure 3: Age-specific mortality rates for deaths related to drug misuse, females, England and Wales, deaths registered between 1993–2012";
var units = "";
var yAxisTitle = "Rate per million population";

var data = [];
data[0] = [1.7,2.4,2.1,3.0,2.3,3.7,3.0,3.3,3.1,3.3,2.0,2.8,1.9,2.2,2.0,2.0,1.5,1.7,1.7,1.2];
data[1] = [12.0,10.5,15.3,16.6,23.4,22.5,24.6,19.1,29.2,24.6,21.8,23.9,19.2,20.1,17.9,18.9,16.3,15.1,13.1,10.7];
data[2] = [11.4,12.5,16.3,12.2,11.8,21.6,19.6,17.5,21.9,20.4,21.3,19.2,27.1,23.1,28.1,34.6,26.0,28.2,29.1,28.9];
data[3] = [11.5,10.9,8.9,8.3,13.4,15.5,11.4,13.8,17.9,17.5,15.0,17.0,21.6,14.3,18.0,29.4,21.2,25.7,28.2,28.7];
data[4] = [10.3,9.8,7.9,5.6,7.8,7.3,7.2,6.6,7.7,9.9,8.6,7.9,8.8,10.3,8.9,12.8,11.9,13.4,14.3,15.7];
data[5] = [16.8,13.4,11.6,9.7,10.5,9.4,12.4,8.8,11.5,10.2,9.9,8.8,7.4,7.7,7.6,6.2,9.2,9.9,8.8,7.9];

//set mon to -1 to ignore
var startMon = -1; // keep this as base 1 to match years eg Sept is month 9
//interval to skip in the xAxis category
var interval = 3;
var year = 1993;




$(document).ready(function(){

  populateCategories();
  options.legend.enabled = true;

  options.series = [
      {
        name: 'Under 20',
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
        name: '20–29',
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
        name:'30–39',
        data: data[2],
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
      {
        name:'40–49',
        data: data[3],
        marker:{
          symbol:"triangle",
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
      {
        name:'50–69',
        data: data[4],
        marker:{
          symbol:"square",
          states: {
            hover: {
              fillColor: '#7fbee1',
              radiusPlus: 0,
              lineWidthPlus: 0
            }
          }
        },
        dashStyle: 'shortdash'
      },
      {
        name:'70 and over',
        data: data[5],
        marker:{
          symbol:"circle",
          states: {
            hover: {
              fillColor: '#7fbee1',
              radiusPlus: 0,
              lineWidthPlus: 0
            }
          }
        },
        dashStyle: 'solid'
      }
  ];

  
  initLineChart();

});



