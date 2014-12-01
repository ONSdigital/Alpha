var title = "Figure 10: Accommodation type";
var subtitle = "England and Wales, 2001 and 2011, All households";
var units = "";
var yAxisTitle = "%";

var data = [];
data[0] = [22.8,22.6];
data[1] = [31.6,30.7];

data[2] = [26.0,24.7];

data[3] = [13.6,16.3];

data[4] = [4.4,4.2];

data[5] = [1.1,1.1];

data[6] = [0.4,0.4];







var categories = [ '2001', '2011'];

var seriesNames = ['Detached','Semi-detached','Terraced','Purpose built block of flats','Part of a converted or shared house','In a commercial building','Caravan or other temporary or mobile structure'];


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



