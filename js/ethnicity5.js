var title = "Figure 5: Households containing usual residents from multiple ethnic groups";
var subtitle = "";
var units = "";
var yAxisTitle = "";

var data = [];
data[0] = [3,5,6,6,6,6,8,9,9,24,9];
data[1] = [5,6,8,8,8,9,11,11,13,32,12];



var seriesNames = [ '2001', '2011' ];

categories = ['North East','Wales','South West','Yorkshire and The Humber','North West','East Midlands','West Midlands','East of England','South East','London','England and Wales'];


var interval = 1;




$(document).ready(function(){

  options.legend.enabled = true;
  options.plotOptions= {
            bar: {
            }
        }
  options.series = [
      {
        name: seriesNames[0],
        data: data[0],
        borderColor: options.colors[0]
      },
      {
        name: seriesNames[1],
        data: data[1],
        borderColor: options.colors[1]
      }
      
  ];

  
  initBarChart();

});



