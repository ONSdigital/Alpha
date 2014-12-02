var title = "Figure 2: Selected victim-based police recorded crime offences: volumes and percentage change between 2012/13 and 2013/14";
var subtitle = "";
var units = "";
var yAxisTitle = "Recorded Offences";

var data = [];
data[0] = [53620,65155,109757,300623,529713,387360,601139];
data[1] = [64200,57818,98305,321008,506190,372307,634586];

var seriesNames = [ 'Yr end Mar 13', 'Yr end Mar 14'];

var categories = ['Sexual offences','Robbery','Theft from the person','Shoplifting','Criminal damage and arson','Vehicle offences','Violence against the person'];


var interval = 1;




$(document).ready(function(){
  options.legend.enabled = true;
  options.plotOptions= {
            bar: {
            }
        }
  options.series = [
      {
        name: seriesNames[0],
        data: data[0],
        borderColor: options.colors[0]
      },
      {
        name: seriesNames[1],
        data: data[1],
        borderColor: options.colors[1]
      }
  ];

  
  initBarChart();

});



