var title = "Figure 2: Civil partnership formations by sex, 2005-2012";
var subtitle = "England and Wales";
var units = "";
var yAxisTitle = "";

var data = [];
data[0] = [1287,9648,4770,3824,3227,3119,3444,3446];
data[1] = [666,6458,3958,3345,3054,3266,3351,3591];

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



