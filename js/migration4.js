var title = "Figure 2.11 Long Term International Migration, 1970 to 2013 ";
var subtitle = "";
var units = "";
var yAxisTitle = "Migration (thousands)";

var data = [];
data[0] = [94, null,89, null,88, null,98, null,93, null,83, null,77, null,74, null,81, null,85, null,88, null,96,97,96,92,93,92,88,81,78,74,77,79,80,76,77,78,76];
data[1] = [195, null,196, null,189, null,186, null,199, null,207, null,198, null,171, null,169, null,173, null,158, null,140,131,128,136,136,141,143,142,149,150,153,150,143,141,140,137,134];
data[2] = [-101, null,-107, null,-100, null,-88, null,-107, null,-124, null,-122, null,-97, null,-87, null,-87, null,-70, null,-44,-34,-33,-44,-43,-50,-55,-60,-70,-77,-76,-72,-63,-65,-63,-59,-57];

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

