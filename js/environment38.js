var title = "Figure 38. Land use as a proportion of the UK area, 2010";
var subtitle = "";
var units = "";
var yAxisTitle = "Area (%)";

var data = [];
data[0] = [65.4, 13.1, 11.7, 8.1, 1.6];
//data[0] = [15.333, 3.059, 2.748, 1.907, .382];




var categories = [
              'Total agriculture',
              'Total forestry',
              'Urban and developed land',
              'Freshwater and land not elsewhere classified',
              'Marine and coastal '
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
        name: "% Area",
        data: data[0],
        borderColor: options.colors[0]
      }
  ];

  
  initBarChart();

});



