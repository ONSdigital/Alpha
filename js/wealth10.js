var title = "Figure 10: Distribution of household net financial wealth, by total household income quintile: Great Britain 2010-12";
var subtitle = "";
var units = "";
var yAxisTitle = "%";

var data = [];
data[0] = [24,  27,  28,  26,  16];
data[1] = [43,  31,  22,  15,  8];
data[2] = [21,  22,  20,  22,  19];
data[3] = [9, 15,  21,  23,  30];
data[4] = [3, 6, 9, 14,  27];



var categories = ['Q1 (Lowest)','Q2','Q3','Q4','Q5 (Highest)'];

var interval = 1;




$(document).ready(function(){


 options.yAxis.reversed = true;
 options.xAxis.title = {text: "Income Quartile"};
  options.legend.enabled = true;
  options.plotOptions= {
            column: {
                stacking: 'percent'
              }
            };


  options.series = [
      {
        name: 'Negative net financial wealth',
        data: data[0],
        borderColor: options.colors[0]
      },
      {
        name: '£0 but < £5,000',
        data: data[1],
        borderColor: options.colors[1]
      }
      ,
      {
        name: '£5,000 but < £25,000',
        data: data[2],
        borderColor: options.colors[2]
      }
      ,
      {
        name: '£25,000 but < £100,000',
        data: data[3],
        borderColor: options.colors[3]
      }
      ,
      {
        name: '£100,000 or more',
        data: data[4],
        borderColor: options.colors[4]
      }
  ];

  
  initColumnChart();

});



