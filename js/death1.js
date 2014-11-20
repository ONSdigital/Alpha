var title = "Figure 1: Age-standardised mortality rates1 (ASMRs), 2001-2013";
var subtitle = "";
var units = "";
var yAxisTitle = "Deaths per million population";

var data = [];
data[0] = [15117,14967,14823,14007,13684,13243,12989,12917,12297,12013,11595,11594,11583];
data[1] = [10462,10456,10550,9927,9812,9445,9391,9432,8866,8767,8421,8561,8526];


//set mon to -1 to ignore
var startMon = -1; // keep this as base 1 to match years eg Sept is month 9
//interval to skip in the xAxis category
var interval = 4;
var year = 2001;




$(document).ready(function(){

  populateCategories();

   options.legend.enabled = true;


  options.series = [
{
        name: 'Male',
        data: data[0],
        marker:{
          enabled:false,
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
        name: 'Female',
        data: data[1],
        marker:{
          enabled:false,
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



