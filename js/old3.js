var title = "Figure 3: Population aged 90 and over in the United Kingdom by age group , 1982 and 2012";
var subtitle = "";
var units = "%";
var yAxisTitle = "%";

var data = [];
data[0] = [82.8,15.6,1.6];
data[1] = [79.1,18.3,2.6];

categories = ['90-94','95-99','100 & over'];


//set mon to -1 to ignore
var startMon = -1; // keep this as base 1 to match years eg Sept is month 9
//interval to skip in the xAxis category
var interval = 1;
var year = 1998;




$(document).ready(function(){



  options.series = [
      {
        name: '1982',
        data: data[0]
      },
      {
        name: '2012',
        data: data[1]
      }
  ];

  
  initColumnChart();

});



