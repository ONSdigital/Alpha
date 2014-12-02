var title = "Figure 19: Highest level of qualification";
var subtitle = "England regions, Wales, 2011, Usual residents aged 16 and over ";
var units = "";
var yAxisTitle = "%";

var data = [];
data[0] = [22.2,23.3,23.3,23.6,24.4,24.5,25.7,27.4,29.9,37.7,27.2];
data[1] = [13.1,12.8,12.3,12.9,12.9,12.3,11.8,13.2,12.8,10.5,12.3];
data[2] = [4.7,4.2,3.3,4.0,3.9,3.9,3.7,4.3,3.6,1.6,3.6];
data[3] = [15.7,15.5,15.4,15.6,15.8,15.7,16.2,16.4,15.9,11.8,15.3];
data[4] = [13.7,13.6,13.7,13.9,13.6,13.3,14.6,13.6,13.5,10.7,13.3];
data[5] = [4.1,4.9,5.4,5.3,4.5,4.3,5.4,4.5,5.2,10.0,5.7];
data[6] = [26.5,25.8,26.6,24.7,24.8,25.9,22.5,20.7,19.1,17.6,22.7];


var seriesNames = ['Level 4 and above','Level 3', 'Apprenticeships', 'Level 2', 'Level 1', 'Other qualification','No  qualification'];

var categories = ['North East','Yorkshire and The Humber','West Midlands','East Midlands','North West','Wales','East of England','South West','South East','London','England and Wales'];

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
      },
      {
        name: seriesNames[5],
        data: data[5],
        borderColor: options.colors[5]
      },
      {
        name: seriesNames[6],
        data: data[6],
        borderColor: options.colors[6]
      }
      
  ];

  
  initBarChart();

});



