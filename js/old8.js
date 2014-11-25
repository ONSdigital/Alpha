var title = "Figure 8: Population aged 90 and over by age group and UK  countries, 2012";
var subtitle = "";
var units = "";
var yAxisTitle = "Number per 100,000";

var data = [];

data[0] = [79.0,80.7,80.3];
data[1] = [18.4,17.2,17.6];
data[2] = [2.6,2.1,2.2];


categories = ['England & Wales','Scotland','Northern Ireland'];


//set mon to -1 to ignore
var startMon = -1; // keep this as base 1 to match years eg Sept is month 9
//interval to skip in the xAxis category
var interval = 1;
var year = 1998;




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



