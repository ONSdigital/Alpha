var title = "Figure 2: Health by Region, April 2011 to March 2012";
var subtitle = "";
var units = "%";
var yAxisTitle = "%";

var data = [];
data[0] = [71.8,74.4,74.2,75.2,75.5,77.9,79.6,78.7,78.0];//,76.7, 73.4,76.4,75.9,76.5];
data[1] = [28.2,25.6,25.8,24.8,24.5,22.1,20.4,21.3,22.0];//,23.3, 26.6,23.6,24.1,23.5];



categories = ['North East','North West','Yorkshire and The Humber','East Midlands','West Midlands','East of England','London','South East','South West'];//,'England', 'Wales','Scotland','Northern Ireland','UK'];

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
        data: data[0]
      },
      {
        name: 'Not in good health',
        data: data[1]
      }
  ];

  
  initBarChart();

});



