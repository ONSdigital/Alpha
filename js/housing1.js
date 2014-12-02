var title = "Figure 1: Annual house price rates of change, UK all dwellings from January 2004 to May 2014";
var units = "%";
var yAxisTitle = "%";

var data = [];
data[0] = [9.7,9.8,7.8,10.0,12.2,13.9,14.3,13.6,13.7,12.6,13.7,10.7,10.0,10.5,12.6,6.9,6.0,5.0,4.0,2.8,3.2,1.6,2.2,2.9,4.1,3.4,3.3,5.0,5.7,5.3,5.9,7.4,8.0,8.5,8.8,9.9,10.8,11.8,10.9,11.1,10.8,12.1,12.3,11.3,10.8,11.3,9.8,8.4,7.9,6.3,5.2,4.6,3.0,0.6,-1.4,-4.6,-5.1,-7.4,-8.5,-10.2,-11.5,-12.3,-13.6,-13.5,-12.7,-10.7,-8.4,-5.6,-4.1,-2.3,0.5,2.9,6.2,7.3,9.7,9.8,10.6,9.9,8.2,8.1,6.1,4.9,3.7,3.0,0.1,-0.2,0.3,-0.7,-2.5,-2.3,-1.6,-1.5,-1.6,-0.5,-0.5,-0.4,0.6,1.0,-0.4,1.4,2.3,2.3,2.0,1.9,1.7,1.4,2.2,3.3,2.1,1.9,2.7,2.6,2.9,3.1,3.3,3.7,3.8,5.5,5.4,5.5,6.8,9.2,8.0,9.9,10.5];

//set mon to -1 to ignore
var startMon = 1; // keep this as base 1 to match years eg Sept is month 9
//interval to skip in the xAxis category
var interval = 12;
var year = 2004;




$(document).ready(function(){

  populateCategories();
  console.log(categories);
  options.yAxis.min = null;

  options.series = [
      {
        name: 'House Price',
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
      }
  ];

  
  initLineChart();

});



