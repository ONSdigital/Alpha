var title = "Figure 6: Method of travel to work, by region";
var subtitle = "England and Wales, 2011";
var units = "%";
var yAxisTitle = "%";

var data = [];
data[0] = [3.7,4.5,4.6,4.8,5.1,5.1,5.4,5.7,6.6,7.0,5.4];
data[1] = [13.1,11.7,11.4,10.5,49.9,7.8,6.7,12.1,12.1,6.3,16.4];
data[2] = [69.9,70.2,69.1,72.3,31.4,72.8,75.2,68.0,66.8,68.9,64.0];
data[3] = [12.4,13.1,14.3,11.9,12.9,13.8,12.1,13.7,13.9,17.1,13.6];
data[4] = [0.9,0.6,0.6,0.5,0.7,0.5,0.6,0.6,0.7,0.7,0.6];

categories = ['North East','North West','Yorkshire and The Humber','West Midlands','London','East Midlands','Wales','East of England','South East','South West','England and Wales'];

var interval = 1;




$(document).ready(function(){
  options.yAxis.plotLines= [{
                color: '#ccc',
                width: 1,
                value: 0,
                zIndex:4
            }]

  options.legend.enabled = true;

  options.plotOptions= {
            bar: {
                stacking: 'percent'
            }
        }
  options.series = [
      {
        name: 'Work mainly at or from home',
        data: data[0]
      },
      {
        name: 'Bus, tram or train',
        data: data[1]
      },
      {
        name: 'Car or van (inc. passenger), motorcycle or taxi',
        data: data[2]
      },
      {
        name: 'Bicycle or foot',
        data: data[3]
      },
      {
        name: 'Other',
        data: data[4]
      }
  ];

  
  initBarChart();

});



