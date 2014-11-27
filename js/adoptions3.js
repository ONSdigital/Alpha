var title = "Figure 1: Number of Adoptions, 1998-2012";
var units = "%";
var yAxisTitle = "Children";

var data = [];
data[0] = [5,4,5,4,5,4,5,4,4,3,2,2,2,2,2];
data[1] = [34,39,41,45,45,46,49,51,53,55,57,59,58,62,63];
data[2] = [36,34,31,31,30,32,29,28,28,26,24,24,26,23,24];
data[3] = [21,19,18,16,16,14,13,13,11,13,12,10,10,10,8];
data[4] = [5,5,4,4,4,4,4,4,4,4,5,4,4,3,3];

//set mon to -1 to ignore
var startMon = -1; // keep this as base 1 to match years eg Sept is month 9
//interval to skip in the xAxis category
var interval = 1;
var year = 1998;




$(document).ready(function(){

  populateCategories();

  options.series = [
      {
        name: 'Under 1',
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
        name: 'Aged  1-4 years',
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
        name:'Aged 5-9 years',
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
        name:'Aged 10-14 years',
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
        dashStyle: 'longdot'
      },
      {
        name:'Aged 15-17 years',
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
        dashStyle: 'shortdot'
      }
  ];

  
  initLineChart();

});



