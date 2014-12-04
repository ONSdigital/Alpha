var title = "Figure 9: Trends in police recorded crimes involving the use of firearms other than air weapons, 2002/03 to 2013/14";
var subtitle = "";
var units = "";
var yAxisTitle = "Offences";

var data = [];
data[0] = [10248,10338,11069,11088,9645,9865,8199,8082,7040,6022,5158,4843];

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


