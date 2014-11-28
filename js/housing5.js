var title = "Figure 5: All dwellings annual house price rates of change: UK, country and regions";
var subtitle = "";
var units = "%";
var yAxisTitle = "%";

var data = [];
data[0] = [10.5,11.0,6.5,3.6,-0.7,4.8,3.9,6.1,7.0,7.2,8.6,20.1,9.6,7.1];

categories = ['UK','England','Wales','Scotland','Northern Ireland','North East','North West','Yorks & The Humber','East Midlands','West Midlands','East','London','South East','South West'];

var interval = 1;




$(document).ready(function(){

options.legend.enabled = true;
options.yAxis.min = null;
  options.plotOptions= {
          bar: {

          }
      }
  options.yAxis.plotLines = [{
          color: '#FF0000',
          width: 2,
          value: 10.5,
          zIndex: 4,
          label:{text:'UK: 10.5%',rotation:0}
      }];

  options.series = [
      {
        name: 'In good health',
        data: data[0],
        borderColor: options.colors[0]
      },
      {
        name: 'Not in good health',
        data: data[1],
        borderColor: options.colors[1]
      }
  ];


  initBarChart();

});



