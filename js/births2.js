var title = "Figure 2: Age-specific fertility rates, 1983-2013";
var units = "";
var yAxisTitle = "Live births per 1000 women";

var data = [];
data[0] = [26.9,27.6,29.4,30.1,30.9,32.5,32.0,33.3,33.0,31.7,30.9,28.9,28.5,29.7,30.2,30.9,30.9,29.3,28.0,27.1,26.9,26.9,26.4,26.6,25.9,25.7,24.8,23.4,21.2,19.9,17.4];
data[1] = [98.6,95.6,94.6,92.7,93.3,94.6,91.7,91.4,89.3,86.1,82.5,79.0,76.4,77.0,76.0,74.9,73.0,70.0,69.0,68.6,70.5,71.8,70.5,72.1,72.6,74.1,73.9,74.1,71.6,69.9,63.7];
data[2] = [126.3,126.0,127.4,123.8,125.1,124.0,120.4,122.6,119.4,117.6,114.4,112.2,108.4,106.6,104.3,101.5,98.3,94.3,91.7,91.2,95.3,96.5,96.0,97.9,100.1,103.0,102.4,104.1,104.3,105.1,101.5];
data[3] = [71.5,73.6,76.4,78.0,81.2,82.4,83.2,86.9,86.7,87.4,87.4,89.4,88.3,89.8,89.8,90.6,89.6,87.9,88.0,89.8,94.8,99.3,99.9,103.4,107.8,109.8,108.7,112.3,111.9,113.9,109.4];
data[4] = [23.1,23.6,24.1,24.6,26.5,27.9,29.4,31.1,32.1,33.4,34.1,35.8,36.3,37.5,39.4,40.4,40.6,41.4,41.5,43.0,46.4,48.8,50.3,53.6,56.5,57.8,58.1,60.3,62.1,63.7,62.9];
data[5] = [4.8,4.9,5.0,4.8,5.1,5.1,5.2,5.3,5.3,5.8,6.2,6.4,6.8,7.2,7.6,7.9,8.1,8.3,8.8,9.1,9.8,10.4,10.8,11.4,12.0,12.6,12.9,13.4,14.2,14.6,14.5];


//set mon to -1 to ignore
var startMon = -1; // keep this as base 1 to match years eg Sept is month 9
//interval to skip in the xAxis category
var interval = 5;
var year = 1983;




$(document).ready(function(){

  populateCategories();
  options.legend.enabled = true;
  options.yAxis.min = 0;

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
        name: '20-24',
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
        name:'25-29',
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
        name:'30-34',
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
        name:'35-39',
        data: data[4],
        marker:{
          symbol:"triangle-down",
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
        name:'40 and over',
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



