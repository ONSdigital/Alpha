var title = "Overseas Residents Visits To The UK And UK Residents Visits Abroad (Seasonally Adjusted)";
var units = "Visits";
var yAxisTitle = "Visits (Thousands)";

var data = [];
data[0] = [2641,2383,2507,2418,2605,2536,2740,2795,2583,2732,2509,2828,2757,2714,2593,2825,2760,2798,2692,2751,2907,2894,2792,2797,2858];
data[1] = [4493,4967,4657,4600,4769,4757,4715,4733,4760,4713,4495,4985,4851,4856,4929,4919,4832,4469,4872,4743,4920,4794,4546,4751,5024];



//set mon to -1 to ignore
var startMon = 5; // keep this as base 1 to match years eg Sept is month 9
//interval to skip in the xAxis category
var interval = 3;
var year = 2012;



$(document).ready(function(){

  populateCategories();

  options.yAxis.min = 0;

  options.series = [
    {
      name: 'Overseas residents',
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
        name: 'UK residents',
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
      }
  ];

  
  initLineChart();

});



