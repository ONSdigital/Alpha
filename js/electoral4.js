var title = "Figure 4: Percentage change in local government electors for English regions, 2012/13 compared with 2011/12";
var subtitle = "";
var units = "% change";
var yAxisTitle = "% change";

var data = [];
data[0] = [0.75,1.04,0.90,0.39,0.55,0.95,0.69,0.37,0.56];
data[1] = [0.63,0.35,0.21,0.12,-0.75,-0.80,-0.94,-1.05,-1.48];


categories = ['London','East of England','South East','North West','East Midlands','Yorkshire and The Humber','South West','North East','West Midlands'];
var interval = 1;


$(document).ready(function(){

  options.yAxis.min = null;

  options.series = [
      {
        name: '2011/12',
        data: data[0]
      },
      {
        name: '2012/13',
        data: data[1]
      }
  ];

  
  initColumnChart();

});



