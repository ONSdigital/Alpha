var title = "Figure 1: Number of civil partnership formations by quarter, 2005-2012";
var subtitle = "England and Wales";
var units = "";
var yAxisTitle = "";

var data = [];
data[0] = [null,4869,1686,1248,978,962,913,1077];
data[1] = [null,4363,2366,1931,1656,1665,1874,2000];
data[2] = [null,4492,2963,2459,2277,2331,2527,2406];
data[3] = [1953,2382,1713,1531,1370,1427,1481,1554];

//set mon to -1 to ignore
var startMon = -1; // keep this as base 1 to match years eg Sept is month 9
//interval to skip in the xAxis category
var interval = 1;
var year = 2005;




$(document).ready(function(){

  populateCategories();

  options.series = [
      {
        name: 'Q1',
        data: data[0]
      },
      {
        name: 'Q2',
        data: data[1]
      },
      {
        name: 'Q3',
        data: data[2]
      },
      {
        name: 'Q4',
        data: data[3]
      }
  ];

  
  initColumnChart();

});



