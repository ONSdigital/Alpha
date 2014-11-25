var title = "Figure 5: Cumulative percentage of marriages ending in divorce or death by anniversary, 2010";
var units = "";
var yAxisTitle = "Cumulative percentage";

var data = [];
data[0] = [0.0,0.8,2.7,5.3,8.1,11.0,13.8,16.5,18.9,21.0,22.8,24.5,26.0,27.5,28.8,29.9,31.1,32.0,33.0,33.9,34.8,35.5,36.3,36.9,37.5,38.1,38.6,39.0,39.4,39.8,40.1,40.4,40.6,40.8,41.0,41.2,41.3,41.4,41.5,41.6,41.7,41.8,41.8,41.9,41.9,41.9,42.0,42.0,42.0,42.0,42.0,42.0,42.0,42.0,42.0,42.0,42.0,42.0,42.0,42.0];
data[1] = [0.3,0.5,0.8,1.1,1.4,1.7,2.0,2.3,2.6,2.9,3.2,3.5,3.8,4.1,4.4,4.7,5.1,5.4,5.8,6.1,6.5,6.9,7.3,7.7,8.1,8.5,9.0,9.5,10.0,10.5,11.0,11.6,12.1,12.8,13.4,14.0,14.7,15.4,16.1,16.8,17.6,18.3,19.1,20.0,20.9,21.9,23.0,24.1,25.3,26.6,27.9,29.3,30.8,32.3,33.9,35.6,37.3,39.0,40.7,42.4];

categories = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60];
//set mon to -1 to ignore
var startMon = -1; // keep this as base 1 to match years eg Sept is month 9
//interval to skip in the xAxis category
var interval = 10;
var year = 1932;



$(document).ready(function(){

  options.legend.enabled = true;
  options.yAxis.min = 0;
  options.xAxis.title = {text:"By anniversary"};

  options.series = [
    {
        name: 'Marriages ending in divorce',
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
        name: 'Marriages ending in death',
        data: data[1],
        marker:{
          symbol:"square",
          states: {
            hover: {
              fillColor: '#007dc3',
              radiusPlus: 0,
              lineWidthPlus: 0
            }
          }
        },
        dashStyle: 'shortdash',
      }
      
  ];

  
  initLineChart();


});

