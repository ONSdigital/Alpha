var title = "Figure 2: Infant, neonatal and postneonatal mortality rates, 1983-2013";
var subtitle = "";
var units = "";
var yAxisTitle = "Deaths per 1000 live births";

var data = [];
data[0] = [10.1,9.5,9.4,9.6,9.2,9.0,8.4,7.9,7.4,6.6,6.3,6.2,6.1,6.1,5.9,5.7,5.8,5.6,5.5,5.3,5.3,5.1,5.0,5.0,4.8,4.8,4.7,4.3,4.4,4.2,4.0];
data[1] = [5.9,5.6,5.4,5.3,5.1,4.9,4.8,4.6,4.4,4.3,4.2,4.1,4.1,4.1,3.9,3.8,3.9,3.9,3.6,3.6,3.6,3.5,3.4,3.5,3.3,3.2,3.2,3.0,3.0,2.9,2.7];
data[2] = [4.3,3.9,4.0,4.3,4.1,4.1,3.7,3.3,3.0,2.3,2.2,2.0,2.0,2.0,2.0,1.9,1.9,1.8,1.9,1.7,1.7,1.6,1.6,1.5,1.5,1.5,1.5,1.4,1.3,1.3,1.2];


//set mon to -1 to ignore
var startMon = -1; // keep this as base 1 to match years eg Sept is month 9
//interval to skip in the xAxis category
var interval = 4;
var year = 1983;




$(document).ready(function(){

  populateCategories();

   options.legend.enabled = true;


  options.series = [
{
        name: 'Infant',
        data: data[0],
        marker:{
          enabled:false,
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
        name: 'Neonatal',
        data: data[1],
        marker:{
          enabled:false,
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
        name: 'Postneonatal',
        data: data[2],
        marker:{
          enabled:false,
          symbol:"diamond",
          states: {
            hover: {
              fillColor: '#409ed2',
              radiusPlus: 0,
              lineWidthPlus: 0
            }
          }
        },
        dashStyle: 'Dot'
      }
  ];

  
  initLineChart();

});



