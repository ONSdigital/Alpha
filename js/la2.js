var title = "Figure 2: Ethnic group (excluding White)";
var subtitle = "";
var units = "";
var yAxisTitle = "";

var data = [];
data[0] = [2,1,1.6,2,2,2,1.9,5,1.9,1,1,0.4,0.3];
data[1] = [6.9,2.9,6.2,7.3,6.5,10.8,4.8,18.5,5.2,2,2.3,2.7,1.1];
data[2] = [3,0.5,1.4,1.5,1.8,3.3,2,13.3,1.6,0.9,0.6,0.7,0.2];
data[3] = [0.1,0.1,0.1,0.1,0.1,0.1,0.1,0.1,0.2,0.1,0.1,0.1,0.1];
data[3] = [0.9,0.4,0.6,0.8,0.6,0.9,0.5,3.4,0.6,0.3,0.5,0.3,0.1];

var seriesNames = [ 'Mixed/Multiple', 'Asian/Asian British', 'Black/African/Carribean/Black British', 'Gypsy/Irish Traveller', 'Other'];


categories = ['United Kingdom','North East','North West','Yorkshire and The Humber','East Midlands','West Midlands','East','London','South East','South West','Wales','Scotland','Northern Ireland'];

var interval = 1;




$(document).ready(function(){

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



