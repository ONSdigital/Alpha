var title = "Figure 12: Average number of cars or vans per household";
var subtitle = "England regions, Wales, 2001 and 2011, All cars and vans, All households";
var units = "";
var yAxisTitle = "%";

var data = [];
data[0] = [26.8,43.8,23.5,4.5,1.4];
data[1] = [25.6,42.2,24.7,5.5,1.9];

var categories = ['None','One','Two','Three','Four or more'];
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



