var title = "Overseas Residents Visits To The UK By Month (Seasonally Adjusted)";
var units = "";
var yAxisTitle = "Visits (Thousands)";

var data = [];
data[0] = [2641,2383,2507,2418,2605,2536,2740,2795,2583,2732,2509,2828,2757,2714,2593,2825,2760,2798,2692,2751,2907,2894,2792,2797,2858];
data[1] = [1929,1684,1833,1807,1865,1853,2038,2059,1848,2001,1798,2112,2036,1968,1874,2079,2032,2057,1990,2036,2134,2185,2079,2077,2084];
data[2] = [311,309,280,272,331,284,279,297,293,314,274,275,286,295,290,310,302,305,278,276,302,265,279,300,288];
data[3] = [401,390,394,338,408,399,423,439,441,417,437,441,436,451,429,435,426,436,424,439,471,444,434,420,486];


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



