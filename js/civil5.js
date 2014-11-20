var title = "Figure 5 Number of civil partnership dissolutions by quarter, 2007-2012";
var subtitle = "England and Wales";
var units = "";
var yAxisTitle = "";

var data = [];
data[0] = [null,22,67,107,180,207];
data[1] = [8,43,75,134,158,206];
data[2] = [13,42,100,117,137,189];
data[3] = [19,59,87,127,188,192];



//set mon to -1 to ignore
var startMon = -1; // keep this as base 1 to match years eg Sept is month 9
//interval to skip in the xAxis category
var interval = 1;
var year = 2007;




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



