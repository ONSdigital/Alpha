var title = "Figure 2.21 Long-Term International Migration Estimates of EU Citizens (Excluding British) UK, 2004–2013 (Year Ending December 2013)";
var subtitle = "";
var units = "";
var yAxisTitle = "Migration (thousands)";

var data = [];
data[0] = [84, null,130, null,149, null,152, null,152, null,170, null,192, null,195, null,184, null,198, null,183, null,167,172,176,182,176,169,175,166,174,166,158,149,158,170,183,209,201];
data[1] = [41, null,43, null,43, null,56, null,63, null,66, null,70, null,69, null,96, null,134, null,121, null,109,115,104,101,99,92,95,91,92,90,86,84,75,75,77,78,78];
data[2] = [43, null,87, null,106, null,96, null,89, null,104, null,122, null,127, null,88, null,63, null,62, null,58,58,72,81,77,77,79,75,82,76,72,65,82,95,106,131,124];


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

