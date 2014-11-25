var title = "Figure 3: Percentage of women who have had a child by their 20th birthday, by year of birth of woman";
var units = "";
var yAxisTitle = "%";

var data = [];
data[0] = [7,7,6,6,7,7,7,7,8,9,9,9,9,9,9,9,10,10,11,12,13,14,14,15,16,17,17,17,18,18,19,19,20,19,18,18,16,15,14,13,13,13,12,12,11,11,11,12,12,13,13,13,13,13,12,12,12,12,12,13,13,13,13,12,12,11,11,11,11,11,11,10,9];


//set mon to -1 to ignore
var startMon = -1; // keep this as base 1 to match years eg Sept is month 9
//interval to skip in the xAxis category
var interval = 10;
var year = 1920;

var bands =[];


$(document).ready(function(){

  populateCategories();

  //options.legend.enabled = true;
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


  initLineChart();


});


