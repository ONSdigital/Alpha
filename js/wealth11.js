var title = "Figure 11: Distribution of household private pension wealth, by total household income quintile: Great Britain 2010-12";
var subtitle = "";
var units = "";
var yAxisTitle = "%";

var data = [];
data[0] = [51,  34,  20,  10,  5];
data[1] = [16,  15,  17,  12,  6];
data[2] = [19,  18,  20,  23,  15];
data[3] = [10,  19,  18,  19,  21];
data[4] = [5, 14,  25,  36,  53];


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
        name: 'No private pension wealth',
        data: data[0],
        borderColor: options.colors[0]
      },
      {
        name: '< £15,000',
        data: data[1],
        borderColor: options.colors[1]
      }
      ,
      {
        name: '£15,000 but < £60,000',
        data: data[2],
        borderColor: options.colors[2]
      }
      ,
      {
        name: '£60,000 but < £150,000',
        data: data[3],
        borderColor: options.colors[3]
      }
      ,
      {
        name: '£150,000 or more',
        data: data[4],
        borderColor: options.colors[4]
      }
  ];

  
  initColumnChart();

});



