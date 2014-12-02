var title = "Figure 12: Average number of cars or vans per household";
var subtitle = "England regions, Wales, 2001 and 2011, All cars and vans, All households";
var units = "";
var yAxisTitle = "%";

var data = [];
data[0] = [1.1,1.3,1.3,1.2,1.2,1.1,1.1,1.0,1.0,0.9,0.9];
data[1] = [1.2,1.4,1.3,1.3,1.2,1.2,1.2,1.1,1.1,1.0,0.8];

var categories = ['England and Wales','South East','East of England','South West','East Midlands','Wales','West Midlands','Yorkshire and the Humber','North West','North East','London'];
var seriesNames = ['2001','2011'];




//set mon to -1 to ignore
var startMon = -1; // keep this as base 1 to match years eg Sept is month 9
//interval to skip in the xAxis category
var interval = 1;
var year = 2007;




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



