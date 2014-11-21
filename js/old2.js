var title = "Figure 2: Population aged 90 and over in the United Kingdom by age group";
var subtitle = "";
var units = "";
var yAxisTitle = "%";

var data = [];
data[0] = [79.1];
data[1] = [18.3];
data[2] = [2.6];

var categories = ['Population age'];

var interval = 1;




$(document).ready(function(){


  options.legend.enabled = true;
  options.plotOptions= {
            column: {
                stacking: 'percent'
              }
            };

  options.series = [
      {
        name: '100 & over',
        data: data[2]
      },
      {
        name: '95-99',
        data: data[1]
      }
      ,
      {
        name: '90-94',
        data: data[0]
      }
  ];

  
  initColumnChart();

});



