var title = "Figure 1: Sexual Identity by Region, April 2011 to March 2012";
var subtitle = "";
var units = "%";
var yAxisTitle = "xxx";

var data = [];
data[0] = [1.6,1.5,1.6,1.3,1.4,1.1,2.4,1.2,1.6,1.4,1.5,0.9];
data[1] = [
            [1.1,2.1],
            [1.3,1.7],
            [1.3,1.8],
            [1.1,1.6],
            [1.2,1.7],
            [0.8,1.3],
            [2.1,2.7],
            [1.0,1.4],
            [1.3,1.9],
            [1.1,1.6],
            [1.3,1.8],
            [0.5,1.4]
          ];

categories = ['North East','North West','Yorkshire and The Humber','East Midlands','West Midlands','East of England','London','South East','South West','Wales','Scotland','NI'];

var interval = 1;




$(document).ready(function(){

  options.legend.enabled = true;


  options.series = [
      {
        name: 'Gay, Lesbian or Bisexual',
        data: data[0],
        type: 'bar'
      },
      {
        name: 'Confidence interval',
        type: 'errorbar',
        data: data[1]
      }
  ];

  
  initBarChart();

});



