var title = "Figure 7: Mix-adjusted average house price: UK, country and region";
var subtitle = "House Prices for May 2014";
var units = "";
var yAxisTitle = "£";

var data = [];
data[0] = [262000,274000,166000,188000,134000,150000,169000,173000,180000,193000,273000,492000,320000,241000];

categories = ['UK','England','Wales','Scotland','Northern Ireland','North East','North West','Yorks & The Humber','East Midlands','West Midlands','East','London','South East','South West'];

var interval = 1;




$(document).ready(function(){

options.legend.enabled = true;
options.yAxis.min = null;
  options.plotOptions= {
          bar: {

          }
      }
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
      }, 
      {
            type: 'line',
            name: 'Average',
            data: [262000,null ,null,null,null,null,null,null,null,null,null,null,null,262000],
            marker: {
              enabled:false,
                lineWidth: 2,
                lineColor: options.colors[3],
                fillColor: 'white'
            }
        }
  ];



  initBarChart();



});



