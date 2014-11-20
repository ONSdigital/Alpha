var title = "Figure 4: Age-standardised mortality rates for selected substances, males, England and Wales, deaths registered between 1993–2012";
var units = "";
var yAxisTitle = "Rate per million population";

var data = [];
data[0] = [8.5,8.9,9.7,9.9,11.2,11.4,10.7,9.4,9.1,7.5,8.3,9.3,7.0,6.4,5.9,7.2,8.1,6.8,7.1,7.8];
data[1] = [6.2,6.7,6.9,6.3,6.7,6.8,7.2,5.8,6.6,6.0,5.9,6.1,5.0,4.5,5.4,6.0,7.6,7.8,7.9,7.3];
data[2] = [0.4,0.7,0.7,0.4,0.8,1.9,2.8,2.7,2.9,4.4,4.3,5.0,5.7,6.2,6.1,7.3,6.6,4.6,3.2,4.3];
data[3] = [4.6,8.4,11.0,14.2,15.0,20.3,25.7,28.5,32.8,29.0,22.7,24.5,27.2,23.2,26.5,27.4,27.7,24.4,17.0,15.6];
data[4] = [6.7,8.8,9.6,11.1,14.6,12.6,10.8,8.9,7.8,6.5,6.3,6.7,6.2,7.2,9.2,10.6,12.1,9.9,13.4,11.3];
data[5] = [10.9,9.8,12.1,10.9,13.4,13.0,11.8,11.1,10.9,9.4,8.1,9.3,8.2,5.0,4.8,5.1,4.9,3.0,3.0,2.7];

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
        name: 'Antidepressants',
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
        name: 'Benzodiazepines',
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
        name:'Cocaine',
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
        name:'Heroin/morphine',
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
      },
      {
        name:'Methadone',
        data: data[4],
        marker:{
          symbol:"square",
          states: {
            hover: {
              fillColor: '#7fbee1',
              radiusPlus: 0,
              lineWidthPlus: 0
            }
          }
        },
        dashStyle: 'shortdash'
      },
      {
        name:'Paracetamol',
        data: data[5],
        marker:{
          symbol:"circle",
          states: {
            hover: {
              fillColor: '#7fbee1',
              radiusPlus: 0,
              lineWidthPlus: 0
            }
          }
        },
        dashStyle: 'solid'
      }
  ];

  
  initLineChart();

});



