var title = "Figure 2: Proficiency in English";
var subtitle = "England and Wales, 2011";
var units = "%";
var yAxisTitle = "%";

var data = [];
data[0] = [34.6,34.8,35.5,38,38.8,40.7,41.8,43.8,44.2,46.5,41.5];
data[1] = [38.3,37.5,39.3,37.8,38.3,39.1,38,39.5,37.3,37.4,37.8];
data[2] = [22.4,22.7,21,20.2,18.7,17,17.2,14.4,15.7,13.6,17.5];
data[3] = [4.7,5,4.2,4,4.2,3.3,3,2.4,2.8,2.4,3.3];

categories = ['Yorkshire and The Humber','West Midlands','East Midlands','North West','Wales','North East','East of England','South West','London','South East','England and Wales'];

var interval = 1;




$(document).ready(function(){

  options.plotOptions= {
            bar: {
                stacking: 'percent'
            }
        }
  options.series = [
      {
        name: 'Can speak English very well',
        data: data[0],
        borderColor: options.colors[0]
      },
      {
        name: 'Can speak English well',
        data: data[1],
        borderColor: options.colors[1]
      },
      {
        name: 'Cannot speak English well',
        data: data[2],
        borderColor: options.colors[2]
      },
      {
        name: 'Cannot speak English',
        data: data[3],
        borderColor: options.colors[3]
      }
  ];

  
  initBarChart();

});



