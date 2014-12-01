var title = "Figure 15: Economic activity by sex";
var subtitle = "England and Wales, 2011, Economically active usual residents aged 16 to 74";
var units = "";
var yAxisTitle = "%";

var data = [];
data[0] = [32.9,8.1,19.7];
data[1] = [47.2,62.2,55.2];
data[2] = [8.8,18.4,13.9];
data[3] = [5.4,7.0,6.3];
data[4] = [5.7,4.3,4.9];


var categories = [ 'Female', 'Male', 'All' ];

var seriesNames = ['Employees Part-time','Employees Full-time','Self-employed','Unemployed','Full-time student'];

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
      },
      {
        name: seriesNames[4],
        data: data[4],
        borderColor: options.colors[4]
      }
  ];

  
  initBarChart();

});



