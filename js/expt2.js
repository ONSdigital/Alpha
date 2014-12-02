var title = "Figure 2: Health by Region, April 2011 to March 2012";
var subtitle = "";
var units = "%";
var yAxisTitle = "%";

var data = [];
data[0] = [71.8,74.4,74.2,75.2,75.5,77.9,79.6,78.7,78.0, 76.7, {y: 73.4, color: options.colors[1]},{y: 76.4, color: options.colors[1]},{y: 75.9, color: options.colors[1]},{y: 76.5, color: options.colors[1]}];
data[1] = [28.2,25.6,25.8,24.8,24.5,22.1,20.4,21.3,22.0, 23.3, {y: 26.6, color: options.colors[2]},{y: 23.6, color: options.colors[2]},{y: 24.1, color: options.colors[2]},{y: 23.5, color: options.colors[2]}];



categories = ['North East','North West','Yorkshire and The Humber','East Midlands','West Midlands','East of England','London','South East','South West','England', 'Wales','Scotland','Northern Ireland','UK'];

var interval = 1;




$(document).ready(function(){

options.legend.enabled = true;
  options.plotOptions= {
          bar: {
              stacking: 'percent'
          }
      }
  options.series = [
      {
        name: 'In good health',
        data: data[0],
        borderColor: options.colors[0]
      },
      {
        name: 'Not in good health',
        data: data[1],
        borderColor: options.colors[1]
      }
  ];

  
  initBarChart();

});



