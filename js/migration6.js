var title = "Figure 2.22 Long-Term International Migration Estimates of EU15 Citizens (Excluding British) UK, 2004–2013 (Year Ending December 2013)";
var subtitle = "";
var units = "";
var yAxisTitle = "Migration (thousands)";

var data = [];
data[0] = [69, null,77, null,70, null,73, null,76, null,74, null,83, null,77, null,69, null,90, null,82, null,82,81,86,83,76,76,78,79,83,82,82,79,85,92,96,107,104];
data[1] = [38, null,39, null,38, null,40, null,46, null,44, null,43, null,41, null,41, null,54, null,55, null,53,58,53,61,58,52,51,46,49,49,49,49,41,42,44,46,47];
data[2] = [31, null,38, null,32, null,33, null,30, null,30, null,40, null,36, null,28, null,37, null,27, null,29,23,33,22,18,24,26,32,34,33,32,30,44,50,53,60,58];


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

