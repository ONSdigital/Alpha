var title = "Figure 1: Annual percentage change in parliamentary electors for UK constituent countries, 2008/09 to 2012/13";
var subtitle = "";
var units = "% change";
var yAxisTitle = "% change";

var data = [];
data[0] = [0.57,0.82,0.55,0.47,-0.62];
data[1] = [0.02,0.90,0.74,0.11,-0.17];
data[2] = [-0.40,1.53,0.32,1.11,1.05];
data[3] = [2.27,2.57,1.88,1.42,-0.96];

categories = ['2008/09','2009/10','2010/11','2011/12','2012/13'];


//set mon to -1 to ignore
var startMon = -1; // keep this as base 1 to match years eg Sept is month 9
//interval to skip in the xAxis category
var interval = 1;
var year = 1998;




$(document).ready(function(){

  options.yAxis.min = null;

  options.series = [
      {
        name: 'England',
        data: data[0]
      },
      {
        name: 'Wales',
        data: data[1]
      },
      {
        name: 'Scotland',
        data: data[2]
      },
      {
        name: 'NI',
        data: data[3]
      }
  ];

  
  initColumnChart();

});



