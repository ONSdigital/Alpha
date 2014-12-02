var title = "Figure 19: Categories of anti-social behaviour incidents 2013/14";
var subtitle = "";
var units = "";
var yAxisTitle = "%";

var data = [];
data[0] = [66.5, 27.5, 6.1];
    


var categories = [
              'Nuisance',
              'Personal',
              'Environmental'
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
        name: "Anti-social behaviour",
        data: data[0],
        borderColor: options.colors[0]
      }
  ];

  
  initBarChart();

});



