var title = "Figure 16: Hours worked per week by sex ";
var subtitle = "England and Wales, 2011, Employed usual residents aged 16 to 74 ";
var units = "";
var yAxisTitle = "%";

var data = [];
data[0] = [5.8,13.9];
data[1] = [9.9,30.3];
data[2] = [65.2,49.2];
data[3] = [19.2,6.6];

var categories = [ 'Male', 'Female' ];

var seriesNames = ['Part-time: 15 hours or less worked','Part-time: 16 to 30 hours worked','Full-time: 31 to 48 hours worked','Full-time: 49 or more hours worked'];

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
      },
      {
        name: seriesNames[3],
        data: data[3],
        borderColor: options.colors[3]
      }
  ];

  
  initBarChart();

});



