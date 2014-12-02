var title = "Figure 14: Provision of unpaid care by hours given";
var subtitle = "England regions, Wales, 2011, All usual residents";
var units = "";
var yAxisTitle = "%";

var data = [];
data[0] = [91.6,90.2,89.8,89.6,89.2,89.2,89.0,89.0,88.9,87.9,89.7];
data[1] = [5.3,6.7,6.8,6.5,7.1,6.9,6.8,6.4,6.7,6.9,6.5];
data[2] = [1.3,1.1,1.2,1.4,1.3,1.4,1.5,1.6,1.6,1.8,1.4];
data[3] = [1.8,2.0,2.2,2.6,2.4,2.5,2.7,3.0,2.8,3.4,2.4];


var seriesNames = ['None','1 to 19', '20 to 49', '50 or more'];

var categories = ['London','South East','East of England','Yorkshire and The Humber','South West','East Midlands','West Midlands','North East','North West','Wales','England and Wales'];


var interval = 1;




$(document).ready(function(){
    options.legend.enabled = true;

  options.plotOptions= {
            bar: {
                stacking: 'normal'
            }
        }
  options.series = [
/*      {
        name: seriesNames[0],
        data: data[0],
        borderColor: options.colors[0]
      },*/
      {
        name: seriesNames[1],
        data: data[1],
        borderColor: options.colors[0]
      },
      {
        name: seriesNames[2],
        data: data[2],
        borderColor: options.colors[1]
      },
      {
        name: seriesNames[3],
        data: data[3],
        borderColor: options.colors[2]
      }
      
  ];

  
  initBarChart();

});



