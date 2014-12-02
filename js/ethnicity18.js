var title = "Figure 18: Highest level of qualification ";
var subtitle = "England and Wales, 2011, Usual residents aged 16 and above";
var units = "";
var yAxisTitle = "%";

var data = [];
data[0] = [27.2,22.7,15.3,13.3,12.3,5.7,3.6];


var categories = [
              'Level 4 qualifications and above',
              'No qualifications',
              'Level 2 qualifications',
              'Level 1 qualifications',
              'Level 3 qualifications',
              'Other qualifications',
              'Apprenticeships'
              ];


var interval = 1;




$(document).ready(function(){
    options.legend.enabled = false;

  options.plotOptions= {
            bar: {
                stacking: 'normal'
            }
        }
  options.series = [
      {
        name: "Qualifications",
        data: data[0],
        borderColor: options.colors[0]
      }
  ];

  
  initBarChart();

});



