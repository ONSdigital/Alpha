var title = "Figure B: All malignant neoplasms: frequency distribution by sex and age group, England 2012";
var subtitle = "";
var units = "";
var yAxisTitle = "Standardised registration ratio";

var data = [];
data[0] = [106,107,103,96,100,100,94,95,102];
data[1] = [110,107,104,100,98,99,90,97,102];


categories = ['North East','North West','Yorkshire and the Humber','East Midlands','West Midlands','East','London','South East','South West'];

var interval = 1;




$(document).ready(function(){

   options.legend.enabled = true;
   options.plotOptions = {
        series: {
            threshold: 100
        }
    }

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



