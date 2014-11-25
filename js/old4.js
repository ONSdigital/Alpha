var title = "Figure 4: Centenarians in the UK, 2002-2012";
var units = "";
var yAxisTitle = "Number";

var data = [];
data[0] = [7740,8050,8400,8790,9250,9880,10310,11100,11830,12530,13350];
data[1] = [830,870,950,1070,1170,1290,1330,1480,1620,1750,1940];
data[2] = [6900,7180,7450,7730,8080,8590,8980,9610,10210,10780,11410];

//set mon to -1 to ignore
var startMon = -1; // keep this as base 1 to match years eg Sept is month 9
//interval to skip in the xAxis category
var interval = 3;
var year = 1982;




$(document).ready(function(){

  populateCategories();

  options.legend.enabled = true;
  options.series = [
    {
        name: 'Persons',
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
        name: 'Male',
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
        dashStyle: 'longdash'
      },
      {
        name:'Female',
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
      }
  ];

  
  initLineChart();

});



