var title = "Figure 1: Main language not English";
var subtitle = "";
var units = "";
var yAxisTitle = "%";

var data = [];
data[0] = [2.8,2.9,3.5,5.1,5.5,5.8,5.9,6.2,7.2,22.1,{y: 7.7, color: options.colors[2]}];


categories = ['North East','Wales','South West','North West','East of England','South East','Yorkshire and The Humber','East Midlands','West Midlands','London','England and Wales'];

var interval = 1;




$(document).ready(function(){

  options.series = [
      {
        name: '',
        data: data[0]
      }
  ];

  
  initBarChart();

});



