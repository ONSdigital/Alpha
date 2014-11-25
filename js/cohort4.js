var title = "Figure 4: Estimated family size distribution for women born between 1920 and 1967 who are assumed to have completed their childbearing";
var subtitle = "";
var units = "%";
var yAxisTitle = "Percentages";

var data = [];
data[0] = [21,17,13,12,11,10,14,16,19,20,19];
data[1] = [21,22,18,15,13,14,13,13,12,13,15];
data[2] = [27,28,30,32,36,43,44,41,38,38,37];
data[3] = [16,17,19,21,22,21,20,19,20,19,18];
data[4] = [15,16,20,20,18,12,10,11,11,10,10];
categories = ['1920','1925','1930','1935','1940','1945','1950','1955','1960','1965','1967'];


//set mon to -1 to ignore
var startMon = -1; // keep this as base 1 to match years eg Sept is month 9
//interval to skip in the xAxis category
var interval = 5;
var year = 1920;




$(document).ready(function(){



  options.series = [
      {
        name: 'Childless',
        data: data[0]
      },
      {
        name: '1 child',
        data: data[1]
      }
      ,
      {
        name: '2 children',
        data: data[2]
      }
      ,
      {
        name: '3 children',
        data: data[3]
      }
      ,
      {
        name: '4 or more',
        data: data[4]
      }
      
  ];

  
  initColumnChart();

});



