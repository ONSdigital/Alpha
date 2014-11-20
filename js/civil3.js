var title = "Figure 3 Mean age at civil partnership1 formation by sex, 2005-2012";
var subtitle = "England and Wales";
var units = "";
var yAxisTitle = "Mean Age";

var data = [];
data[0] = [53.9,47,42.8,41.8,41.2,40.6,40.1,40];
data[1] = [46.1,43.6,41.2,40,38.9,38.4,38.3,37.6];

//set mon to -1 to ignore
var startMon = -1; // keep this as base 1 to match years eg Sept is month 9
//interval to skip in the xAxis category
var interval = 1;
var year = 2005;




$(document).ready(function(){

  populateCategories();

  options.series = [
      {
        name: 'Male',
        data: data[0]
      },
      {
        name: 'Female',
        data: data[1]
      }
  ];

  
  initColumnChart();

});



