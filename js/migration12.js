var title = "Figure 3.13: Study-Related Sponsored Visa Applications by Sector, 2010-2014";
var subtitle = "";
var units = "";
var yAxisTitle = "Immigration (thousands)";

var data = [];
data[0] = [143130,154630,161160,154574,152479,150136,154181,155877,156629,157339,159833,167260,167995,168075];
data[1] = [65439,98765,113612,100431,84050,54762,35323,33680,32406,29632,26378,23145,21442,20538];
data[2] = [19253,22370,20568,15944,11476,6470,4075,3750,3589,3470,3423,3446,3532,3415];
data[3] = [14478,16627,17397,16943,16168,14836,14172,14087,13937,13798,13778,13763,13617,13492];

var titles = ['Universities','Further education','English language schools','Independent schools'];

var categories = ['YE Dec 10', 'YE Mar 11', 'YE Jun 11', 'YE Sep 11', 'YE Dec 11', 'YE Mar 12', 'YE Jun 12', 'YE Sep 12', 'YE Dec 12', 'YE Mar 13', 'YE Jun 13', 'YE Sep 13', 'YE Dec 13', 'YE Mar 14'];


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
      }
  ];

  
  initLineChart();

});

