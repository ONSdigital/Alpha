var title = "Figure 2: Age-specific mortality rates for deaths related to drug misuse, males, England and Wales, deaths registered between 1993–2012";
var units = "";
var yAxisTitle = "Rate per million population";

var data = [];
data[0] = [5.9,7.1,8.2,8.0,11.2,11.0,11.0,7.9,8.4,7.3,6.0,3.9,4.3,5.1,4.0,5.9,4.3,3.5,3.2,2.5];
data[1] = [57.3,76.3,91.4,106.1,129.8,132.6,141.7,136.4,151.8,146.0,106.8,103.0,97.4,93.8,102.3,97.1,95.0,73.6,56.2,47.6];
data[2] = [45.8,57.2,66.1,76.5,75.8,95.2,124.9,121.6,132.1,118.0,113.1,121.1,132.9,124.1,141.7,144.8,146.5,146.8,107.1,97.8];
data[3] = [21.4,28.1,33.2,36.1,41.2,52.2,52.8,69.6,71.4,46.8,51.6,53.5,62.9,69.6,82.0,98.4,100.2,83.9,89.4,85.9];
data[4] = [8.8,8.7,10.0,8.5,9.6,7.6,11.7,12.2,12.5,13.2,11.0,18.7,19.5,17.5,19.7,24.0,25.9,26.6,26.3,24.1];
data[5] = [12.8,11.3,11.2,14.2,8.7,8.2,10.7,8.9,15.0,7.0,7.7,8.0,8.3,8.6,5.7,10.5,7.7,11.2,10.0,7.3];

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



