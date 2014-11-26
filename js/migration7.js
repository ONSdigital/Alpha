var title = "Figure 2.23: Long-Term International Migration Estimates of EU8 Citizens, UK, 2004–2013 (Year Ending December 2013)";
var subtitle = "";
var units = "";
var yAxisTitle = "Migration (thousands)";

var data = [];

data[0] = [20,null,53,null,77,null,76,null,74,null,92,null,103,null,112,null,106,null,89,null,84,null,68,73,72,86,86,82,86,75,77,71,63,59,60,63,66,74,70];
data[1] = [10,null,3,null,3,null,15,null,16,null,22,null,27,null,25,null,43,null,69,null,62,null,52,52,46,36,37,37,40,39,37,36,32,31,30,29,30,26,26];
data[2] = [9,null,49,null,74,null,61,null,57,null,71,null,76,null,87,null,63,null,20,null,21,null,16,21,26,50,49,44,46,36,40,35,31,28,30,34,36,48,44];

var categories = [ 'YE Jun 04', 'YE Sep 04', 'YE Dec 04', 'YE Mar 05', 'YE Jun 05', 'YE Sep 05', 'YE Dec 05', 'YE Mar 06', 'YE Jun 06', 'YE Sep 06', 'YE Dec 06', 'YE Mar 07', 'YE Jun 07', 'YE Sep 07', 'YE Dec 07', 'YE Mar 08', 'YE Jun 08', 'YE Sep 08', 'YE Dec 08', 'YE Mar 09', 'YE Jun 09', 'YE Sep 09', 'YE Dec 09', 'YE Mar 10', 'YE Jun 10', 'YE Sep 10', 'YE Dec 10', 'YE Mar 11', 'YE Jun 11', 'YE Sep 11', 'YE Dec 11', 'YE Mar 12', 'YE Jun 12', 'YE Sep 12', 'YE Dec 12', 'YE Mar 13', 'YE Jun 13', 'YE Sep 13', 'YE Dec 13'];


var interval = 4;



$(document).ready(function(){


  options.yAxis.min = null;
  options.legend.enabled = true;



  options.series = [
      {
        name: 'Inflow',
        data: data[0],
        type: 'line'
      },
      {
        name: 'Outflow',
        data: data[1],
        type: 'line'
      },
      {
        name: 'Balance',
        data: data[2],
        type: 'column'
      }
     
  ];

  
  initColumnChart();

});

