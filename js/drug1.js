var title = "Figure 1: Age-standardised mortality rates for deaths related to drug poisoning and drug misuse, by sex, England and Wales, deaths registered between 1993–2012";
var units = "";
var yAxisTitle = "Rate per million population";

var data = [];
data[0] = [51.1,56.5,63.9,66.9,73.7,77.3,82.3,79.1,82.0,74.2,66.0,69.7,70.2,65.9,70.7,75.7,76.3,68.3,63.4,61.0];
data[1] = [22.1,27.7,32.3,35.7,40.7,44.4,51.0,51.2,55.7,48.9,42.8,44.7,47.3,46.2,51.7,55.5,55.4,50.4,43.1,39.2];
data[2] = [30.9,32.2,32.5,31.3,34.0,35.8,35.1,31.4,33.8,31.3,31.1,32.2,30.8,27.1,25.0,29.3,26.3,28.9,29.6,30.1];
data[3] = [8.7,8.5,8.8,7.8,9.8,11.6,11.1,10.1,13.0,12.5,11.3,11.4,12.6,11.4,12.0,15.5,12.5,13.8,14.2,14.1];

//set mon to -1 to ignore
var startMon = -1; // keep this as base 1 to match years eg Sept is month 9
//interval to skip in the xAxis category
var interval = 3;
var year = 1993;




$(document).ready(function(){

  populateCategories();

  options.legend.enabled = true;
  options.series = [
      {
        name: 'Male: All drug poisoning',
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
        name: 'Male: Drug misuse',
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
        dashStyle: 'longdash'
      },
      {
        name:'Female: All drug poisoning',
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
        name:'Female: Drug misuse',
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
        dashStyle: 'shortdot'
      }
  ];

  
  initLineChart();

});



