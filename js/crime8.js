var title = "Figure 8: Recorded sexual offences in selected police force areas, by age of offence, 2012/13 and 2013/14";
var subtitle = "";
var units = "";
var yAxisTitle = "Recorded Offences";

var data = [];
data[0] = [18080,4617,2436,25133];
data[1] = [21452,5958,3328,30738];


var seriesNames = [ 'Yr end Mar 13', 'Yr end Mar 14'];

var categories = ['Less than one year', 'Between one and 20 years', 'More than 20 years', 'All'];


var interval = 1;




$(document).ready(function(){
  options.legend.enabled = true;

  options.series = [
      {
        name: seriesNames[0],
        data: data[0],
        borderColor: options.colors[0]
      },
      {
        name: seriesNames[1],
        data: data[1],
        borderColor: options.colors[1]
      }
  ];

  
  initColumnChart();

 
});



