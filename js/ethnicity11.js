var title = "Figure 11: Accommodation type";
var subtitle = "";
var units = "";
var yAxisTitle = "%";

var data = [];
data[0] = [15.7,17.7,20.5,32.2,23.7,29.4,6.2,28.0,29.8,27.7,22.6];
data[1] = [38.7,35.7,36.5,35.1,36.8,30.4,18.6,27.6,27.2,31.0,30.7];
data[2] = [30.4,30.0,27.7,20.6,22.9,22.8,22.9,22.4,23.2,27.8,24.7];
data[3] = [12.0,13.0,11.8,9.3,13.3,13.7,37.6,16.1,12.8,9.6,16.3];
data[4] = [2.3,2.4,2.2,1.6,1.9,2.1,12.7,4.0,5.0,2.4,4.2];
data[5] = [0.8,1.0,0.9,0.9,1.0,0.9,1.9,1.1,1.2,1.0,1.1];
data[6] = [0.1,0.3,0.2,0.4,0.4,0.8,0.1,0.7,0.8,0.4,0.4];


var seriesNames = ['Detached','Semi-detached','Terraced','Purpose built block of flats','Part of a converted or shared house','In a commercial building','Caravan or other temporary or mobile structure'];

var categories = ['North East','North West','Yorkshire and The Humber','East Midlands','West Midlands','East of England','London','South East','South West','Wales','England and Wales'];




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
      },
      {
        name: seriesNames[5],
        data: data[5],
        borderColor: options.colors[5]
      },
      {
        name: seriesNames[6],
        data: data[6],
        borderColor: options.colors[6]
      }
  ];

  
  initBarChart();

});



