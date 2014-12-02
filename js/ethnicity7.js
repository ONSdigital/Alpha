var title = "Figure 7: Most recent year of arrival ";
var subtitle = "England and Wales, 2011, All non-UK born usual residents ";
var units = "";
var yAxisTitle = "%";

var data = [];
data[0] = [0.6,1.8,4.7,8.9,8.4,8.7,16.5,50.3];

var categories = ['1940 and before','1941 to 1950','1951 to 1960','1961 to 1970','1971 to 1980','1981 to 1990','1991 to 2000','2001 to March 2011'];




//set mon to -1 to ignore
var startMon = -1; // keep this as base 1 to match years eg Sept is month 9
//interval to skip in the xAxis category
var interval = 1;
var year = 2007;




$(document).ready(function(){

  //populateCategories();

  options.series = [
      {
        name: 'All non-UK born usual residents ',
        data: data[0]
      }
  ];

  
  initColumnChart();

});



