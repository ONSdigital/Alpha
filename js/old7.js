var title = "Figure 7: Persons aged 90 and over per 100,000 population in UK Countries, 2012";
var subtitle = "";
var units = "";
var yAxisTitle = "Number per 100,000";

var data = [];
data[0] = [823];
data[1] = [695];
data[2] = [605];


categories = ['90-94','95-99','100 & over'];


//set mon to -1 to ignore
var startMon = -1; // keep this as base 1 to match years eg Sept is month 9
//interval to skip in the xAxis category
var interval = 1;
var year = 1998;




$(document).ready(function(){

 // options.title.margin = 40;

  options.series = [
      {
        name: 'England & Wales',
        data: data[0]
      },
      {
        name: 'Scotland',
        data: data[1]
      }
      ,
      {
        name: 'Northern Ireland',
        data: data[2]
      }
      
  ];

  
  initColumnChart();

});



