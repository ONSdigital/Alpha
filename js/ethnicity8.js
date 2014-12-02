var title = "Figure 8: Passports held";
var subtitle = "England regions, Wales, 2011, All usual residents";
var units = "";
var yAxisTitle = "%";

var data = [];
data[0] = [74.5,76.0,73.9,74.4,76.4,76.1,77.9,76.6,79.0,71.2,75.7];
data[1] = [3.1,2.6,5.5,5.3,4.1,4.5,4.3,6.6,6.8,21.0,7.4];
data[2] = [22.4,21.3,20.5,20.3,19.4,19.4,17.9,16.7,14.1,7.8,16.9];

var seriesNames = [ 'UK passport', 'Other passport', 'No passport'];

categories = ['Wales','North East','West Midlands','East Midlands','South West','Yorkshire and The Humber','North West','East of England','South East','London','England and Wales'];


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
        name: seriesNames[0],
        data: data[0],
        borderColor: options.colors[0]
      },
      {
        name: seriesNames[1],
        data: data[1],
        borderColor: options.colors[1]
      },
      {
        name: seriesNames[2],
        data: data[2],
        borderColor: options.colors[2]
      }
  ];

  
  initBarChart();

});



