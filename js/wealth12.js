var title = "Figure D - Distribution of gross annual income from employment - employees, main job: noting that WAS covers Great Britain (2010-12) and ASHE covers United Kingdom (2011)";
var subtitle = "";
var units = "";
var yAxisTitle = "Earned Income £";

var data = [];
data[0] = [12000,  19200,  30000];
data[1] = [12613,  21100,  32676];


var categories = ['25th percentile','50th (Median)','75th percentile'];

var interval = 1;




$(document).ready(function(){


// options.xAxis.title = {text: "Income Quartile"};
  options.legend.enabled = true;



  options.series = [
      {
        name: 'WAS',
        data: data[0],
        borderColor: options.colors[0]
      },
      {
        name: 'ASHE',
        data: data[1],
        borderColor: options.colors[1]
      }
     
  ];

  
  initColumnChart();

});



