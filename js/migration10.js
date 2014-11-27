var title = "Figure 3.11: Long-Term International Migration Estimates of Immigration to the UK, by Main Reason for Migration, 2004–2013 (Year Ending December 2013)";
var subtitle = "";
var units = "";
var yAxisTitle = "Immigration (thousands)";

var data = [];
data[0] = [229,null,null,null,246,null,null,null,235,null,null,null,242,null,null,null,220,null,null,null,193,194,196,204,203,194,194,183,184,177,173,175,180,190,202,218,214];
data[1] = [102,null,null,null,84,null,null,null,105,null,null,null,85,null,null,null,88,null,null,null,76,78,73,76,80,81,85,80,74,71,68,63,62,59,60,66,71];
data[2] = [148,null,null,null,140,null,null,null,157,null,null,null,148,null,null,null,175,null,null,null,211,235,235,245,238,232,239,246,232,213,197,187,180,176,175,175,177];
data[3] = [79,null,null,null,66,null,null,null,55,null,null,null,65,null,null,null,64,null,null,null,50,44,42,42,40,39,40,38,41,43,43,43,43,40,41,45,43];
data[4] = [31,null,null,null,31,null,null,null,44,null,null,null,35,null,null,null,44,null,null,null,36,36,35,33,29,32,30,34,35,32,35,29,32,27,24,26,21];

var titles = ['Work Related',  'Accompany / Join',  'Formal study',  'Other', 'No reason stated'];

var categories = [ 'YE Dec 04', 'YE Mar 05', 'YE Jun 05', 'YE Sep 05', 'YE Dec 05', 'YE Mar 06', 'YE Jun 06', 'YE Sep 06', 'YE Dec 06', 'YE Mar 07', 'YE Jun 07', 'YE Sep 07', 'YE Dec 07', 'YE Mar 08', 'YE Jun 08', 'YE Sep 08', 'YE Dec 08', 'YE Mar 09', 'YE Jun 09', 'YE Sep 09', 'YE Dec 09', 'YE Mar 10', 'YE Jun 10', 'YE Sep 10', 'YE Dec 10', 'YE Mar 11', 'YE Jun 11', 'YE Sep 11', 'YE Dec 11', 'YE Mar 12', 'YE Jun 12', 'YE Sep 12', 'YE Dec 12', 'YE Mar 13', 'YE Jun 13', 'YE Sep 13', 'YE Dec 13'];


var interval = 4;



$(document).ready(function(){


  options.yAxis.min = null;
  options.legend.enabled = true;



options.series = [
      {
        name: titles[0],
        data: data[0],
        marker:{
          symbol:"circle",
          states: {
            hover: {
              fillColor: '#007dc3',
              radiusPlus: 0,
              lineWidthPlus: 0
            }
          }
        },
        dashStyle: 'Solid',
      },
      {
        name: titles[1],
        data: data[1],
        marker:{
          symbol:"square",
          states: {
            hover: {
              fillColor: '#409ed2',
              radiusPlus: 0,
              lineWidthPlus: 0
            }
          }
        },
        dashStyle: 'shortdash'
      },
      {
        name: titles[2],
        data: data[2],
        marker:{
          symbol:"diamond",
          states: {
            hover: {
              fillColor: '#7fbee1',
              radiusPlus: 0,
              lineWidthPlus: 0
            }
          }
        },
        dashStyle: 'shortdot'
      },
      {
        name: titles[3],
        data: data[3],
        marker:{
          symbol:"triangle",
          states: {
            hover: {
              fillColor: '#7fbee1',
              radiusPlus: 0,
              lineWidthPlus: 0
            }
          }
        },
        dashStyle: 'longdot'
      },
      {
        name: titles[4],
        data: data[4],
        marker:{
          symbol:"triangle-down",
          states: {
            hover: {
              fillColor: '#7fbee1',
              radiusPlus: 0,
              lineWidthPlus: 0
            }
          }
        },
        dashStyle: 'shortdot'
      }
  ];

  
  initLineChart();

});

