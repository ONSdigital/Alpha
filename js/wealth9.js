var title = "Figure 9: Distribution of household physical wealth, by total household income quintile: Great Britain, 2010-12";
var subtitle = "";
var units = "";
var yAxisTitle = "%";

var data = [];

data[0] = [30,  17,  7, 3, 2];
data[1] = [19,  16,  13,  6, 4];
data[2] = [20,  24,  24,  19,  11];
data[3] = [18,  23,  29,  30,  24];
data[4] = [13,  19,  27,  43,  60];


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
        name: 'Less than £8,000',
        data: data[0],
        borderColor: options.colors[0]
      },
      {
        name: '£8,000 but < £16,000',
        data: data[1],
        borderColor: options.colors[1]
      }
      ,
      {
        name: '£16,000 but < £30,000',
        data: data[2],
        borderColor: options.colors[2]
      }
      ,
      {
        name: '£30,000 but < £50,000',
        data: data[3],
        borderColor: options.colors[3]
      }
      ,
      {
        name: '£50,000 or more',
        data: data[4],
        borderColor: options.colors[4]
      }
  ];

  
  initColumnChart();

});



