var title = "Figure 3: Annual percentage change in local government electors for UK constituent countries, 2008/09 to 2012/13";
var subtitle = "";
var units = "% change";
var yAxisTitle = "% change";

var data = [];
data[0] = [0.75,1.00,0.88,0.71,-0.27];
data[1] = [0.02,0.97,0.86,0.27,0.01];
data[2] = [-0.28,1.68,0.58,1.37,1.41];
data[3] = [2.43,2.72,2.07,1.65,-0.50];


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



