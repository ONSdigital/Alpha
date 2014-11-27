var title = "Figure 3.2: Long-Term International Migration Estimates of Emigration from the UK, by Main Reason, 2004–2013 (Year Ending December 2013)";
var subtitle = "";
var units = "";
var yAxisTitle = "Emigration (thousands)";

var data = [];
data[0] = [151,null,null,null,170,null,null,null,187,null,null,null,173,null,null,null,219,null,null,null,211,210,198,192,189,182,190,191,201,206,199,198,182,184,187,186,186];
data[1] = [50,null,null,null,54,null,null,null,51,null,null,null,43,null,null,null,57,null,null,null,46,43,42,40,39,38,37,35,33,33,33,35,36,35,33,30,29];
data[2] = [15,null,null,null,14,null,null,null,20,null,null,null,15,null,null,null,23,null,null,null,23,27,25,30,29,26,26,21,19,19,21,20,21,19,18,22,23];
data[3] = [51,null,null,null,39,null,null,null,44,null,null,null,49,null,null,null,41,null,null,null,42,40,38,39,35,37,37,39,41,42,46,43,40,40,35,34,33];
data[4] = [77,null,null,null,83,null,null,null,96,null,null,null,61,null,null,null,88,null,null,null,46,44,45,44,46,52,52,54,57,53,50,46,43,40,46,46,43];


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

