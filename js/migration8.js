var title = "Figure 2.3: Long-Term International Migration Estimates of Non-EU Citizens, UK, 2004–2013 (Year Ending December 2013) ";
var subtitle = "";
var units = "";
var yAxisTitle = "Migration (thousands)";

var data = [];
data[0] = [351,null,370,null,359,null,317,null,320,null,343,null,326,null,305,null,306,null,307,null,292,null,303,318,311,326,322,317,327,334,314,296,282,269,260,246,241,243,249];
data[1] = [118,null,104,null,105,null,119,null,125,null,126,null,119,null,101,null,110,null,120,null,118,null,119,119,115,108,104,102,104,106,110,112,110,108,103,101,101,103,103];
data[2] = [233,null,266,null,254,null,198,null,195,null,218,null,208,null,204,null,196,null,187,null,174,null,184,199,196,218,217,215,222,228,204,185,172,160,157,145,140,140,146];
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

