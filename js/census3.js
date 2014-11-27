var title = "Figure 3: Five most reported main languages other than English";
var subtitle = "England and Wales, 2011";
var units = "%";
var yAxisTitle = "%";

var data = [];
data[0] = [0.3,0.6,0.8,0.9,1.0,0.7,0.9,1.2,0.9,1.9,1.0];
data[1] = [0.1,0.1,0.0,0.3,0.2,0.4,0.9,0.5,1.2,0.9,0.5];
data[2] = [0.2,0.1,0.1,0.3,0.3,0.6,0.7,0.3,0.9,1.0,0.5];
data[3] = [0.2,0.2,0.1,0.2,0.3,0.3,0.2,0.1,0.4,1.5,0.4];
data[4] = [0.0,0.0,0.0,0.1,0.1,0.3,0.2,1.0,0.3,1.3,0.4];

categories = ['North East','Wales','South West','South East','East of England','North West','Yorkshire and The Humber','East Midlands','West Midlands','London','England and Wales'];
var interval = 1;




$(document).ready(function(){

  options.legend.enabled = true;

  options.plotOptions= {
            bar: {
                stacking: 'bar'
            }
        }
  options.series = [
      {
        name: 'Polish',
        data: data[0],
        borderColor: options.colors[0]
      },
      {
        name: 'Punjabi',
        data: data[1],
        borderColor: options.colors[1]
      },
      {
        name: 'Urdu',
        data: data[2],
        borderColor: options.colors[2]
      },
      {
        name: 'Bengali (with Sylheti and Chatgaya)',
        data: data[3],
        borderColor: options.colors[3]
      },
      {
        name: 'Gujarati',
        data: data[4],
        borderColor: options.colors[4]
      }
  ];

  
  initBarChart();

});



