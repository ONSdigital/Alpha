var title = "Figure 4: Total household wealth, by total household income quintile: Great Britain, 2010-12";
var subtitle = "";//"Quintiles of total household income";
var units = "%";
var yAxisTitle = "Total household wealth £";

var data = [];
data[0] = [3400,14800,63700,217100,358400];
data[1] = [7900,26500,123800,323500,536200];
data[2] = [16600,61300,196200,447900,726700];
data[3] = [47600,125300,298300,605400,1019500];
data[4] = [114900,266100,547100,1029600,1774200];

categories = ['Quintile 1 (lowest income)','Quintile 2','Quintile 3','Quintile 4','Quintile 5 (highest income)'];

var interval = 1;




$(document).ready(function(){

  options.legend.enabled = true;


  options.series = [
      {
        name: '10th Percentile',
        data: data[0]
      },
      {
        name: '25th Percentile',
        data: data[1]
      }
      ,
      {
        name: '50th Percentile',
        data: data[2]
      }
      ,
      {
        name: '75th Percentile',
        data: data[3]
      }
      ,
      {
        name: '90th Percentile',
        data: data[4]
      }
  ];

  
  initColumnChart();



});



