var title = "Figure 17: Proportion of CSEW plastic card users who had been a victim of plastic card fraud in the last year, 2005/06 to 2013/14";
var subtitle = "";
var units = "";
var yAxisTitle = "%";

var data = [];
data[0] = [3.7,3.8,4.8,6.4,6.4,5.3,4.7,4.6,5.1];


var seriesNames = [ 'Plastic card fraud'];

var categories = ['Apr-05 to Mar-06','Apr-06 to Mar-07','Apr-07 to Mar-08','Apr-08 to Mar-09','Apr-09 to Mar-10','Apr-10 to Mar-11','Apr-11 to Mar-12','Apr-12 to Mar-13','Apr-13 to Mar-14'];

var interval = 1;
var bands =[];



$(document).ready(function(){

  options.legend.enabled = false;
  options.series = [
      {
        name: seriesNames[0],
        data: data[0],
        borderColor: options.colors[0]
      }
  ];



  
  initColumnChart();

});


