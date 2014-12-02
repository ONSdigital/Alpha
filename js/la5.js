var title = "Figure 5: Percentage of population by general health";
var subtitle = "";
var units = "";
var yAxisTitle = "";

var data = [];
data[0] = [248,44,46,46,45,45,47,50,49,47,47,52,48];
data[1] = [234,33,33,34,35,35,35,33,35,35,31,30,32];
data[2] = [213,15,14,14,14,14,13,11,12,13,15,12,15];
data[3] = [24,6,5,5,4,5,4,4,3,4,6,4,4];
data[4] = [21,2,2,1,1,1,1,1,1,1,2,1,1];

var seriesNames = [ 'Very good health', 'Good health', 'Fair health', 'Bad health', 'Very bad health'];

categories = ['United Kingdom','North East','North West','Yorkshire and The Humber','East Midlands','West Midlands','East','London','South East','South West','Wales','Scotland','Northern Ireland'];


var interval = 1;




$(document).ready(function(){

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



