var title = "Figure 7: Components of household wealth, by total household income quintile: Great Britain, 2010-12";
var subtitle = "";
var units = "";
var yAxisTitle = "%";

var data = [];
  
data[0] = [51,  45,  39,  36,  33];
data[1] = [18,  15,  13,  12,  9];
data[2] = [10,  10,  11,  12,  17];
data[3] = [20,  30,  37,  41,  41];

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
        name: 'Net Property Wealth',
        data: data[0],
        borderColor: options.colors[0]
      },
      {
        name: 'Physical Wealth',
        data: data[1],
        borderColor: options.colors[1]
      }
      ,
      {
        name: 'Net Financial Wealth',
        data: data[2],
        borderColor: options.colors[2]
      }
      ,
      {
        name: 'Private Pension Wealth',
        data: data[3],
        borderColor: options.colors[3]
      }
  ];

  
  initColumnChart();

});



