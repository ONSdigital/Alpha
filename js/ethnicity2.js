var title = "Figure 2: Usual residents responding that they had no religious affiliation";
var subtitle = "";
var units = "";
var yAxisTitle = "%";

var data = [];
data[0] = [10,16,12,11,14,16,16,17,17,19,15];
data[1] = [20,21,22,23,26,28,28,28,29,32,25];

var seriesNames = [ '2001', '2011'];

categories = ['North West','London','West Midlands','North East','Yorkshire and The Humber','East Midlands','South East','East of England','South West','Wales','England and Wales'];


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



