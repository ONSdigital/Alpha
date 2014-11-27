var title = "Figure 6: Female to Male sex ratios at ages 90 and over and 100 and over in the United Kingdom, 2002-2012";
var units = "";
var yAxisTitle = "Females per 100 males";

var data = [];
data[0] = [336,327,318,310,305,300,296,282,276,273,264];
data[1] = [828,825,781,723,691,666,675,649,631,615,588];

//set mon to -1 to ignore
var startMon = -1; // keep this as base 1 to match years eg Sept is month 9
//interval to skip in the xAxis category
var interval = 3;
var year = 2002;




$(document).ready(function(){

  populateCategories();

  options.legend.enabled = true;
  options.yAxis.min =0;
  options.series = [
    {
        name: '90 & over',
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
        name: '100 & over',
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



