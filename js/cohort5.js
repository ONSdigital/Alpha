var title = "Figure 5: Age-specific fertility rates at selected ages, by year of birth of woman, 1935 to 1992";
var units = "";
var yAxisTitle = "Live-births per 1000 women";

var data = [];
data[0] = [94,103,107,112,116,123,127,132,132,135,136,136,128,127,124,124,125,115,107,99,92,86,81,81,83,85,78,74,71,68,69,70,71,74,72,72,71,68,66,65,63,67,66,65,65,63,63,62,63,63,61,63,63,63,62,60,54,52];
data[1] = [198,201,206,210,213,208,201,193,187,180,178,178,159,153,144,137,131,129,133,139,144,138,133,132,129,129,124,123,122,117,119,115,111,107,103,99,97,92,90,87,84,81,81,83,86,85,86,88,91,91,93,93,94];
data[2] = [134,127,121,117,111,108,107,96,89,85,83,85,83,92,99,103,100,100,102,103,106,106,109,108,108,113,111,110,109,111,109,108,107,108,105,102,101,101,105,110,109,112,115,116,115,117,116,118];
data[3] = [50,47,41,35,31,29,28,28,30,32,34,34,34,36,37,39,42,44,45,47,49,50,52,52,55,55,56,59,60,61,61,62,63,69,72,75,79,82,85,85,88,89,92];
data[4] = [9,8,7,8,8,8,8,8,8,8,9,9,9,9,10,11,11,12,13,12,14,14,15,15,16,16,17,17,19,20,21,22,23,24,25,26,27,28];


//set mon to -1 to ignore
var startMon = -1; // keep this as base 1 to match years eg Sept is month 9
//interval to skip in the xAxis category
var interval = 4;
var year = 1935;

var bands =[];


$(document).ready(function(){

  populateCategories();

  options.legend.enabled = true;
  options.yAxis.min = 0;
options.series = [
      {
        name: '20 years',
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
        name: '25 years',
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
        name:'30 years',
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
        name:'35 years',
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
        name:'40 years',
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

  
  options.xAxis.title = {text: "Year of birth"};
  options.xAxis.plotLines = [
            {
                value:5,
                color: plotLineColor,
                width:2,
                zIndex:1,
                label:{text:'1',rotation:0}
            },{
                value:32,
                color: plotLineColor,
                width:2,
                zIndex:1,
                label:{text:'2',rotation:0}
            },{
                value:47,
                color: plotLineColor,
                width:2,
                zIndex:1,
                label:{text:'3',rotation:0}
            }
            ];


  initLineChart();


});


