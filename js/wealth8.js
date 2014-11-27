var title = "Figure 8: Distribution of household net property wealth, by total household income quintile: Great Britain, 2010-12";
var subtitle = "";
var units = "";
var yAxisTitle = "%";

var data = [];

data[0] = [55,  44,  29,  15,  8];
data[1] = [19,  24,  33,  39,  27];
data[2] = [19,  21,  24,  25,  28];
data[3] = [6, 9, 12,  16,  24];
data[4] = [1, 2, 2, 5, 13];



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
        name: 'Do not own property',
        data: data[0],
        borderColor: options.colors[0]
      },
      {
        name: 'Less than £125,000',
        data: data[1],
        borderColor: options.colors[1]
      }
      ,
      {
        name: '£125,000 but < £250,000',
        data: data[2],
        borderColor: options.colors[2]
      }
      ,
      {
        name: '£250,000 but < £500,000',
        data: data[3],
        borderColor: options.colors[3]
      }
      ,
      {
        name: '£500,000 or more  ',
        data: data[4],
        borderColor: options.colors[4]
      }
  ];

  
  initColumnChart();

});



