var title = "Figure 3: Ethnic group of usually resident population";
var subtitle = "";
var units = "";
var yAxisTitle = "%";

var data = [];
data[0] = [0.4,0.6,0.3,0.5,0.6,0.8,0.5,1.1,1.8,0.7,0.8,1.5,2.0,2.5];


var seriesNames = [ '2001', '2011'];

categories = ['Arab','Any other ethnic group','White and Black African','Other Mixed','White and Asian','White and Black Caribbean','Other Black','Caribbean','African','Chinese','Bangladeshi','Other Asian','Pakistani','Indian'];


var interval = 1;




$(document).ready(function(){

  options.legend.enabled = false;
  options.plotOptions= {
            bar: {
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



