var title = "Figure 6: Tenure (People)";
var subtitle = "";
var units = "";
var yAxisTitle = "%";

var data = [];
data[0] = [26,25,30,24,29];
data[1] = [40, 39, 39,41, 43];
data[2] = [9,9,9,12,10];
data[3] = [15,16,13,11,13];


/*
data[0] = [26,40,9,15];
data[1] = [25,39,9,16];
data[2] = [30,39,9,13];
data[3] = [24,41,12,11];
data[4] = [29,43,10,13];

*/

var categories = ['UK','England','Wales','Scotland','Northern Ireland'];
var seriesNames = ['Owned outright','Owned with a mortgage or loan','Rented from council (Local Authority) or equivalent','Private landlord or letting agency'];


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



