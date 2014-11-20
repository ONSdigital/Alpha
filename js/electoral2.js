var title = "Figure 2: Percentage change in parliamentary electors for English regions, 2012/13 compared with 2011/12";
var subtitle = "";
var units = "% change";
var yAxisTitle = "% change";

var data = [];
data[0] = [0.79,0.26,0.70,0.08,0.82,0.29,0.31,0.57,0.38];
data[1] = [-0.04,-0.13,-0.14,-0.18,-1.03,-1.04,-1.12,-1.14,-1.66];


categories = ['East of England','North West','South East','London','Yorkshire and The Humber','East Midlands','North East','South West','West Midlands'];



$(document).ready(function(){



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



