var title = "Figure 5: Distribution of total household wealth, by total household income quintile: Great Britain, 2010-12";
var subtitle = "";
var units = "";
var yAxisTitle = "%";

var data = [];
data[0] = [2028000, 1459000, 853000,  360000, 147000];
data[1] = [1027000, 1121000, 1184000, 1015000, 497000];
data[2] = [1088000, 937000,  1010000, 1068000, 743000];
data[3] = [578000,  949000,  1014000, 1135000, 1170000];
data[4] = [125000,  382000,  783000,  1272000, 2284000];


var categories = ['Quintile 1 (lowest)','Quintile 2','Quintile 3','Quintile 4','Quintile 5 (highest)'];

var interval = 1;




$(document).ready(function(){


 options.yAxis.reversed = true;
 options.xAxis.title = {text: "Income Quintile"};
  options.legend.enabled = true;
  options.plotOptions= {
            column: {
                stacking: 'percent'
              }
            };


  options.series = [
      {
        name: 'Wealth 1',
        data: data[0],
        borderColor: options.colors[0]
      },
      {
        name: 'Wealth 2',
        data: data[1],
        borderColor: options.colors[1]
      }
      ,
      {
        name: 'Wealth 3',
        data: data[2],
        borderColor: options.colors[2]
      }
      ,
      {
        name: 'Wealth 4',
        data: data[3],
        borderColor: options.colors[3]
      }
      ,
      {
        name: 'Wealth 5',
        data: data[4],
        borderColor: options.colors[4]
      }
  ];

  
  initColumnChart();

});



