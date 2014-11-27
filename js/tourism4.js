var title = "UK Residents Visits Abroad By Month (Seasonally Adjusted)";
var units = "";
var yAxisTitle = "Visits (Thousands)";

var data = [];
data[0] = [4493,4967,4657,4600,4769,4757,4715,4733,4760,4713,4495,4985,4851,4856,4929,4919,4832,4469,4872,4743,4920,4794,4546,4751,5024];
data[1] = [3625,3827,3608,3656,3779,3743,3639,3784,3750,3705,3515,3833,3809,3827,3933,3824,3771,3494,3832,3716,3850,3776,3484,3712,3916];
data[2] = [240,322,325,232,286,284,284,247,270,280,251,307,294,252,257,297,282,281,296,280,299,253,296,275,267];
data[3] = [628,819,724,713,704,731,792,703,740,728,728,845,748,778,739,798,779,694,744,746,771,765,767,765,840];


//set mon to -1 to ignore
var startMon = 5; // keep this as base 1 to match years eg Sept is month 9
//interval to skip in the xAxis category
var interval = 3;
var year = 2012;



$(document).ready(function(){

  populateCategories();

  options.yAxis.min = 0;
  options.legend.enabled = true;

/*

    Solid
    ShortDash
    ShortDot
    ShortDashDot
    ShortDashDotDot
    Dot
    Dash
    LongDash
    DashDot
    LongDashDot
    LongDashDotDot

*/
  options.series = [
    {
      name: 'All visits',
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
        name: 'Europe',
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
      name: 'North America',
      data: data[2],
      marker:{
        symbol:"diamond",
        states: {
          hover: {
            fillColor: '#007dc3',
            radiusPlus: 0,
            lineWidthPlus: 0
          }
        }
      },
      dashStyle: 'dotdash',
    },
      {
        name: 'Other Countries',
        data: data[3],
        marker:{
          symbol:"triangle",
          states: {
            hover: {
              fillColor: '#409ed2',
              radiusPlus: 0,
              lineWidthPlus: 0
            }
          }
        },
        dashStyle: 'Dot'
      }
  ];

  
  initLineChart();

});



