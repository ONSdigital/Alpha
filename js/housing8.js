var title = "Figure 8: UK annual house price rates of change by type of buyer, January 2004 to May 2014";
var subtitle = "12 month percentage change";
var units = "%";
var yAxisTitle = "%";

var data = [];
data[0] = [12.1,12.0,10.0,18.3,20.7,20.8,17.6,15.6,15.9,12.5,15.2,13.3,12.7,15.4,18.3,9.8,7.7,6.7,6.0,5.6,4.9,4.7,4.5,4.1,5.3,4.2,4.6,5.1,6.4,6.9,5.9,6.8,7.7,8.5,8.9,9.4,10.8,12.2,10.8,11.3,11.3,12.4,13.3,12.0,11.8,11.2,9.8,9.3,7.9,6.1,4.9,3.9,2.4,-0.5,-2.7,-5.5,-7.8,-9.6,-11.6,-13.0,-15.1,-15.0,-16.7,-15.7,-14.6,-11.7,-8.9,-6.1,-1.3,0.1,4.0,6.8,8.9,9.3,12.6,12.4,11.9,10.3,7.8,8.4,4.6,3.8,2.3,0.7,1.2,0.2,-0.5,-1.5,-2.1,-2.1,-0.5,-1.9,-0.7,0.6,0.7,1.4,1.9,2.3,2.8,1.5,2.9,2.9,1.9,3.0,1.5,1.8,2.7,2.7,2.1,1.6,1.3,4.8,4.1,3.9,4.0,4.7,5.3,5.9,6.4,7.4,7.6,10.5,10.0,10.7,11.3];
data[1] = [8.7,8.7,6.7,6.6,8.7,11.0,13.0,12.9,12.9,12.7,13.1,9.8,8.9,8.7,10.5,5.8,5.4,4.4,3.3,1.8,2.6,0.4,1.4,2.5,3.7,3.2,2.8,5.0,5.5,4.8,5.9,7.6,8.0,8.5,8.8,10.0,10.8,11.6,10.9,10.9,10.5,11.9,11.9,11.1,10.5,11.4,9.8,8.1,7.9,6.4,5.3,4.8,3.1,0.9,-1.0,-4.3,-4.0,-6.6,-7.3,-9.2,-10.1,-11.3,-12.4,-12.7,-12.0,-10.3,-8.3,-5.5,-5.2,-3.2,-0.8,1.4,5.2,6.6,8.6,8.8,10.1,9.8,8.3,8.0,6.7,5.3,4.3,3.9,-0.4,-0.3,0.6,-0.4,-2.6,-2.3,-2.1,-1.4,-1.9,-0.9,-1.0,-1.0,0.1,0.5,-1.6,1.4,2.1,2.0,2.1,1.4,1.7,1.3,1.9,3.5,2.1,2.0,3.2,1.8,2.5,2.7,3.0,3.3,3.2,5.3,5.0,4.7,6.4,8.6,7.2,9.5,10.1];



//set mon to -1 to ignore
var startMon = 1; // keep this as base 1 to match years eg Sept is month 9
//interval to skip in the xAxis category
var interval = 12;
var year = 2004;

var seriesNames = [ 'First-time buyer', 'Former owner-occupier'];

$(document).ready(function(){

  populateCategories();

  options.legend.enabled = true;
  options.yAxis.min = null;

  options.series = [
    {
      name: seriesNames[0],
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
        name: seriesNames[1],
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



