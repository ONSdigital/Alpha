var title = "Figure 8: Percentage change in car or van availability";
var subtitle = "";
var units = "";
var yAxisTitle = "%";

var data = [];
data[0] = [{y: 15, color: "#4E6127"}, 14, 20,21,28];


var seriesNames = [ 'Cars or vans'];

var categories = ['United Kingdom','England','Wales','Scotland','Northern Ireland'];

var interval = 1;



$(document).ready(function(){


  options.series = [
      {
        name: seriesNames[0],
        data: data[0]

      }
  ];

  
  initBarChart();

});



