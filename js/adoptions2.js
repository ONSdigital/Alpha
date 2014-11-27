var title = "Figure 2: Number of Adoptions by Sex, 1998-2012";
var subtitle = "England and Wales";
var units = "%";
var yAxisTitle = "Adoptions";

var data = [];
data[0] = [2315,2454,2543,2687,2768,2624,2675,2625,2377,2351,2461,2358,2274,2341,2632];
data[1] = [2299,2533,2539,2693,2709,2726,2691,2651,2390,2381,2479,2306,2212,2399,2574];




//set mon to -1 to ignore
var startMon = -1; // keep this as base 1 to match years eg Sept is month 9
//interval to skip in the xAxis category
var interval = 1;
var year = 1998;




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



