var title = "Figure 6: Average registration delay for all drug poisoning deaths and deaths related to drug misuse, England and Wales, deaths registered between 1993–2012";
var units = "";
var yAxisTitle = "Median delay (days)";

var data = [];
data[0] = [70,74,81,87,98,104,106,110,122,117,131,138,141,144,158,168,167,170,171,170];
data[1] = [78,82,89,93,109,112,112,117,130,123,141,140,147,144,164,173,170,173,174,175];



//set mon to -1 to ignore
var startMon = -1; // keep this as base 1 to match years eg Sept is month 9
//interval to skip in the xAxis category
var interval = 3;
var year = 1993;




$(document).ready(function(){

  populateCategories();
  options.legend.enabled = true;
  options.yAxis.min = 0;

  options.series = [
      {
        name: 'All drug poisonings',
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
        name: 'Drug misuse',
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

  
  initLineChart();

});



