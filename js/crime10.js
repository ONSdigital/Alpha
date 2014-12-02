var title = "Figure 10: Trends in police recorded theft offences, 2002/03 to 2013/14 ";
var subtitle = "";
var units = "";
var yAxisTitle = "Offences";

var data = [];
data[0] = [3413319,3249647,2837862,2739231,2638784,2422728,2321580,2132620,2107446,2074779,1900948,1845243];

var seriesNames = [ 'Offences involving firearms (excluding air weapons)'];
var categories = ['2002/03','2003/04','2004/05','2005/06','2006/07','2007/08','2008/09','2009/10','2010/11','2011/12','2012/13','2013/14'];


var interval = 1;




$(document).ready(function(){

  options.legend.enabled = true;

  options.series = [
      {
        name: seriesNames[0],
        data: data[0],
        borderColor: options.colors[0],
        type: 'line'
      }
  ];

  initColumnChart();

});


