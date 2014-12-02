var title = "Figure 17: Unemployment";
var subtitle = "England regions, Wales, 2011, Economically active usual residents aged 16 to 74 ";
var units = "";
var yAxisTitle = "%";

var data = [];
data[0] = [8.1,7.5,7.3,7.1,6.9,6.5,6.0,5.3,4.8,4.7,6.3];

var seriesNames = ['None','1 to 19', '20 to 49', '50 or more'];

var categories = ['North East','West Midlands','London','Yorkshire and The Humber','North West','Wales','East Midlands','East of England','South East','South West','England and Wales'];


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
        name: seriesNames[0],
        data: data[0],
        borderColor: options.colors[0]
      }
  ];

  
  initBarChart();

});



