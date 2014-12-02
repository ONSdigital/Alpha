var title = "Figure 6: Foreign born usual residents";
var subtitle = "";
var units = "";
var yAxisTitle = "";

var data = [];
data[0] = [2.9,3.2,5.1,5.1,5.3,6.0,7.0,7.6,8.2,27.1,8.9];
data[1] = [5.0,5.5,7.7,8.2,8.8,9.9,11.0,11.2,12.1,36.7,13.4];


var seriesNames = [ '2001', '2011' ];

categories = ['North East','Wales','South West','North West','Yorkshire and The Humber','East Midlands','East of England','West Midlands','South East','London','England and Wales'];


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



