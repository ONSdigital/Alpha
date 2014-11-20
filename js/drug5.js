var title = "Figure 5: Age-standardised mortality rates for selected substances, females, England and Wales, deaths registered between 1993–2012";
var units = "";
var yAxisTitle = "Rate per million population";

var data = [];
data[0] = [8.5,9.2,10.2,9.7,9.1,9.2,9.6,7.4,7.9,6.8,7.8,7.9,7.6,5.7,6.2,6.6,6.2,6.6,6.6,8.5];
data[1] = [3.8,3.2,3.5,1.9,2.4,2.3,2.5,1.7,2.4,2.9,2.2,2.3,1.8,1.7,2.0,2.2,1.6,3.1,2.5,2.8];
data[2] = [0.1,0.2,0.1,0.1,0.2,0.6,0.5,0.6,0.8,0.6,0.7,1.0,1.0,1.0,1.2,1.5,0.9,0.7,0.9,0.8];
data[3] = [1.2,1.9,1.6,2.3,2.2,3.2,3.5,4.2,5.0,4.4,4.1,4.0,4.5,3.4,4.4,5.5,4.4,4.5,4.4,5.2];
data[4] = [1.2,1.3,2.2,1.5,2.7,3.0,2.4,1.5,1.6,1.2,1.3,1.7,2.3,1.9,2.9,3.4,2.9,3.2,4.2,3.8];
data[5] = [9.6,9.8,10.0,9.5,11.0,10.4,10.2,9.4,8.9,8.8,7.9,8.7,6.0,5.3,3.1,3.3,3.4,3.3,3.6,3.2];
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



