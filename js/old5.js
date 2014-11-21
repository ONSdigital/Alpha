var title = "Figure 5: Percentage increase in population aged 90 and over in the United Kingdom by sex and age group, 2002-2012";
var subtitle = "";
var units = "% increase";
var yAxisTitle = "% increase";

var data = [];
data[0] = [57.2,71.3,133.7];
data[1] = [23.1,30.8,65.4];
//data[2] = [31.4,37.8,72.5];//persons

categories = ['90-94','95-99','100 & over'];


//set mon to -1 to ignore
var startMon = -1; // keep this as base 1 to match years eg Sept is month 9
//interval to skip in the xAxis category
var interval = 1;
var year = 1998;




$(document).ready(function(){



  options.series = [
      {
        name: 'Male',
        data: data[0]
      },
      {
        name: 'Female',
        data: data[1]
      }
/*
      ,
      {
        name: 'Persons',
        data: data[2]
      }
      */
  ];

  
  initColumnChart();

});



