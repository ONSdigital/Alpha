var title = "Figure 7: Tenure (Households)";
var subtitle = "";
var units = "";
var yAxisTitle = "%";

var data = [];
data[0] = [33, 33, 32, 34, 35];
data[1] = [31, 31, 35, 28, 32];
data[2] = [15, 15, 13, 11, 14];
data[3] = [10, 9, 10, 13, 12];

var categories = ['UK','England','Wales','Scotland','Northern Ireland'];
var seriesNames = ['Owned with a mortgage or loan', 'Owned outright','Private landlord or letting agency','Rented from council (Local Authority) or equivalent'];

var interval = 1;


$(document).ready(function(){


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

  
  initColumnChart();

});



