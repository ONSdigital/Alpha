var title = "Figure 3: Most reported countries1 of birth of non-UK born usual residents";
var subtitle = "England and Wales";
var units = "";
var yAxisTitle = "Thousands";

var data = [];
data[0] = [468,61,321,534,266,154,141,88,158,53];
data[1] = [722,654,503,468,300,214,203,201,197,170];


var seriesNames = [ '2001', '2011' ];

categories = ['India','Poland','Pakistan','Republic of Ireland','Germany','Bangladesh','South Africa','Nigeria','United States of America','China'];



var interval = 1;





$(document).ready(function(){


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
      }
  ];

  
  initColumnChart();

});



