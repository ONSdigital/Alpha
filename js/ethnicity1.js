var title = "Figure 1: General health";
var subtitle = "England and Wales, 2011, All usual residents";
var units = "";
var yAxisTitle = "%";

var data = [];
data[0] = [48,34,13,4,1];




var seriesNames = [ '2001', '2011' ];

categories = ['Very good health','Good health','Fair health','Bad health','Very bad health'];



var interval = 1;





$(document).ready(function(){


  options.series = [
      {
        name: '',
        data: data[0],
        borderColor: options.colors[0]
      }
  ];

  
  initColumnChart();

});



