var title = "Figure 2: Percentage of women remaining childless by their 30th birthday and completion of childbearing, by year of birth of woman";
var units = "";
var yAxisTitle = "Average number of live-born children";

var data = [];
data[0] = [33,30,30,29,28,29,28,28,27,27,25,25,25,23,21,20,20,20,19,19,18,18,18,19,18,18,18,22,21,23,24,26,26,28,30,30,32,33,34,36,37,38,39,40,41,42,42,42,42,43,43,44,46,47,47,48,48,47,47,46,46,45,45];
data[1] = [21,18,18,16,17,17,16,16,15,15,13,14,14,13,11,12,12,12,11,12,11,11,11,12,11,10,9,12,11,13,14,14,14,15,16,16,17,17,18,19,19,20,20,20,20,20,20,19];


//set mon to -1 to ignore
var startMon = -1; // keep this as base 1 to match years eg Sept is month 9
//interval to skip in the xAxis category
var interval = 10;
var year = 1920;

var bands =[];


$(document).ready(function(){

  populateCategories();

  options.legend.enabled = true;
  options.yAxis.min = 0;
  options.series = [
    {
        name: 'By Age 30',
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
        name: 'Completed famliy size',
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
      }
  ];

  
  options.xAxis.title = {text: "Year of birth"};
  options.xAxis.plotLines = [
            {
                value:20,
                color: plotLineColor,
                width:2,
                zIndex:1,
                label:{text:'1',rotation:0}
            },{
                value:47,
                color: plotLineColor,
                width:2,
                zIndex:1,
                label:{text:'2',rotation:0}
            },{
                value:62,
                color: plotLineColor,
                width:2,
                zIndex:1,
                label:{text:'3',rotation:0}
            }
            ];


  initLineChart();


});


