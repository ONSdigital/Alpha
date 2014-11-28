var title = "Figure 9: Number of cars or vans in households";
var subtitle = "";
var units = "";
var yAxisTitle = "";

var data = [];
data[0] = [27.44,25.99,43.77,42.19,28.79,31.82];
data[1] = [26.84,25.80,43.69,42.16,29.47,32.05];
data[2] = [25.95,22.92,45.54,42.98,28.50,34.11];
data[3] = [34.23,30.52,43.35,42.24,22.42,27.24];
data[4] = [26.32,22.70,44.45,41.38,29.23,35.92];


var seriesNames = [ 'UK', 'England','Wales', 'Scotland','Northern Ireland'];
//var categories = [ 'UK 2001', 'UK 2011','England 2001', 'England 2011','Wales 2001', 'Wales 2011','Scotland 2001', 'Scotland 2011','Northern Ireland 2001', 'Northern Ireland 2011', ];


categories = ['No Cars 2001','No cars 2011', 'One Car 2001','One car 2011','Two cars 2001','Two cars 2011'];

var interval = 1;







$(document).ready(function(){

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



