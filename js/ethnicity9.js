var title = "Figure 9: Households where not all usual residents have English (or Welsh in Wales) as a main language";
var subtitle = "England regions, Wales, 2011, All households ";
var units = "";
var yAxisTitle = "%";

var data = [];
data[0] = [1.3,1.4,1.8,2.4,2.9,2.9,2.6,3.2,3.7,10.4,3.7];
data[1] = [0.3,0.2,0.3,0.5,0.5,0.5,0.5,0.5,0.7,2.6,0.8];
data[2] = [1.6,1.7,2.0,2.9,3.0,3.2,3.6,3.1,3.7,12.9,4.3];
var seriesNames = [ 'At least one adult (1)', 'At least one child (2)', 'No one (3)'];

categories = ['North East','Wales','South West','North West','East of England','Yorkshire and The Humber','East Midlands','South East','West Midlands','London','England and Wales'];


var interval = 1;




$(document).ready(function(){
  options.legend.enabled = true;
  options.plotOptions= {
            bar: {
                stacking: 'normal'
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



