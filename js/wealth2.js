var title = "Figure 2: Distribution of total household wealth and income, by percentile points: Great Britain, 2010-12";
var subtitle = "";
var units = "";
var yAxisTitle = "£ (Thousands)";

var data = [];
data[0] = [11400, 15800, 20400, 25900, 32100, 39300, 48100, 60100, 80700];
data[1] = [13100, 36700, 83300, 144800,  218400,  300700,  416700,  587700,  918100];

categories =['10th', '20th', '30th', '40th', '50th', '60th', '70th', '80th', '90th'];


//set mon to -1 to ignore
var startMon = -1; // keep this as base 1 to match years eg Sept is month 9
//interval to skip in the xAxis category
var interval = 1;
var year = 2007;




$(document).ready(function(){


  options.series = [
      {
        name: 'Total Household Income',
        data: data[0]
      },
      {
        name: 'Total Household Wealth',
        data: data[1]
      }
  ];

  
  initColumnChart();

});



