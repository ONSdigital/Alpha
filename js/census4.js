var title = "Figure 4: Number of registrations by major sites, England, 2012";
var subtitle = "";
var units = "";
var yAxisTitle = "%";

var data = [];
data[0] = [3.0,4.2,3.3,4.3,5.7,7.3,9.7,14.3,25.6,22.7];
data[1] = [3.7,4.1,4.5,5.8,6.4,7.6,10.3,13.5,21.9,22.2];



categories = ['North East','London','Wales','North West','West Midlands','East Midlands','Yorkshire and The Humber','East of England','South East','South West'];

var interval = 1;




$(document).ready(function(){

   options.legend.enabled = true;


  options.series = [
      {
        name: '2011',
        data: data[0]
      },
      {
        name: '2001',
        data: data[1]
      }
  ];

  
  initBarChart();

});



