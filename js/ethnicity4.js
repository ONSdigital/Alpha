var title = "Figure 4: Ethnic group";
var subtitle = "";
var units = "";
var yAxisTitle = "";

var data = [];
data[0] = [95.6,95.4,95.3,90.8,90.7,90.2,89.3,88.8,82.7,59.8,86.0];
data[1] = [1.0,1.4,0.9,1.9,1.9,1.6,1.9,1.6,2.4,5.0,2.2];
data[2] = [2.3,2.0,2.9,4.8,5.2,6.2,6.5,7.3,10.8,18.5,7.5];
data[3] = [0.6,0.9,0.5,2.0,1.6,1.4,1.8,1.5,3.3,13.3,3.3];
data[4] = [0.5,0.3,0.4,0.5,0.6,0.6,0.6,0.8,0.9,3.4,1.0];

var seriesNames = [ 'White','Other','Black/African','Asian/Asian British','Mixed/Multiple'];

categories = ['Wales','South West','North East','East of England','South East','North West','East Midlands','Yorkshire and The Humber','West Midlands','London','England and Wales'];


var interval = 1;




$(document).ready(function(){
    options.legend.enabled = true;

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
      },
      {
        name: seriesNames[1],
        data: data[1],
        borderColor: options.colors[1]
      },
      {
        name: seriesNames[2],
        data: data[2],
        borderColor: options.colors[2]
      },
      {
        name: seriesNames[3],
        data: data[3],
        borderColor: options.colors[3]
      },
      {
        name: seriesNames[4],
        data: data[4],
        borderColor: options.colors[4]
      }
  ];

  
  initBarChart();

});



