var title = "Figure 2: Divorce rates1 by sex, 1972-2012";
var units = "000";
var yAxisTitle = "Thousands";

var data = [];
data[0] = [9.5,8.4,9.0,9.6,10.1,10.4,11.6,11.2,12.0,11.9,12.1,12.2,12.0,13.4,12.9,12.7,12.9,12.8,13.1,13.6,13.9,14.3,13.8,13.7,13.9,13.1,13.0,13.0,12.7,13.0,13.4,13.9,14.0,12.9,12.1,11.8,11.2,10.5,11.0,10.8,10.8];
data[1] = [9.4,8.4,9.0,9.6,10.1,10.3,11.6,11.2,12.0,11.9,12.0,12.2,12.0,13.3,12.8,12.6,12.8,12.7,12.9,13.4,13.6,14.1,13.6,13.5,13.7,12.9,12.9,12.9,12.6,12.9,13.3,13.9,13.9,12.9,12.1,11.8,11.3,10.6,11.1,10.8,10.9];

//set mon to -1 to ignore
var startMon = -1; // keep this as base 1 to match years eg Sept is month 9
//interval to skip in the xAxis category
var interval = 10;
var year = 1972;

var bands =[];


$(document).ready(function(){

  populateCategories();

  options.legend.enabled = true;
  options.yAxis.min = 0;
  options.series = [
    {
        name: 'Male',
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
        name: 'Female',
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

  
  setBands();
  options.xAxis.plotBands = bands;

  options.xAxis.plotLines = [
            {
                value:38,
                color: plotLineColor,
                width:2,
                zIndex:4,
                label:{text:'1',rotation:0}
            }
            ];


  initLineChart();


});


function setBands(){



  for (var i=0; i < categories.length; i++)
  {

    if(i>29 && i<38){
      bands.push({color: plotBandColor,
                  from:i,
                  to:i+1});
    }

  }
}
