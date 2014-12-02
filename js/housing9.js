var title = "Figure 9 : UK annual house price rates of change by type of dwelling, January 2004 to May 2014";
var subtitle = "12 month percentage change";
var units = "%";
var yAxisTitle = "%";

var data = [];
data[0] = [10.3,9.7,9.0,6.5,7.5,10.9,12.5,9.8,13.2,8.9,11.1,6.4,9.5,11.3,12.0,6.4,7.5,5.1,5.1,4.6,2.8,4.6,2.8,7.4,8.0,4.8,5.9,6.3,6.4,5.4,3.5,4.9,6.7,3.3,8.3,8.9,5.7,10.5,6.6,8.8,7.0,9.9,9.5,7.9,7.0,9.0,6.6,5.2,6.8,4.7,4.1,4.5,1.6,-1.5,-2.1,-6.1,-5.3,-12.6,-14.0,-9.7,-7.7,-9.1,-12.5,-13.8,-13.0,-12.0,-12.2,-9.4,-6.6,-0.6,0.5,-1.5,-2.1,-4.8,1.3,7.9,6.8,9.0,10.1,8.8,5.6,4.0,8.7,6.3,5.9,11.3,9.1,3.7,5.9,3.7,7.5,9.4,9.1,12.3,7.9,9.4,9.0,8.0,6.9,5.0,6.2,5.6,0.9,3.1,-2.0,-0.6,1.6,4.0,0.1,-0.3,1.0,4.5,1.4,3.4,0.3,-0.1,5.2,3.2,2.5,0.0,2.6,6.2,2.1,2.0,6.9];
data[1] = [9.7,9.8,7.6,10.4,12.7,14.2,14.5,14.0,13.8,13.0,14.0,11.2,10.0,10.4,12.7,6.9,5.9,5.0,3.9,2.6,3.3,1.3,2.2,2.5,3.8,3.3,3.0,4.9,5.6,5.2,6.0,7.5,8.0,8.9,8.8,9.9,11.2,11.9,11.2,11.2,11.0,12.2,12.5,11.5,11.0,11.5,10.0,8.6,8.0,6.4,5.3,4.6,3.0,0.7,-1.3,-4.5,-5.0,-7.1,-8.1,-10.3,-11.7,-12.5,-13.6,-13.5,-12.7,-10.6,-8.2,-5.4,-3.9,-2.3,0.6,3.2,6.8,8.2,10.3,9.9,10.9,10.0,8.0,8.1,6.2,4.9,3.4,2.8,-0.4,-1.0,-0.4,-1.1,-3.1,-2.7,-2.3,-2.3,-2.3,-1.3,-1.1,-1.0,0.0,0.5,-0.9,1.1,2.0,2.0,2.0,1.7,1.8,1.5,2.1,3.2,2.2,2.0,2.8,2.5,3.0,3.1,3.5,4.0,3.8,5.6,5.6,5.8,7.0,9.3,8.4,10.4,10.7];

//set mon to -1 to ignore
var startMon = 1; // keep this as base 1 to match years eg Sept is month 9
//interval to skip in the xAxis category
var interval = 12;
var year = 2004;

var seriesNames = [ 'New dwellings', 'Pre-owned dwellings'];

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



