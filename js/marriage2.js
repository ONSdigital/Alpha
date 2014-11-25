var title = "Figure 2:General Marriage Rate (GMR), 1932–2012";
var subtitle = "";
var units = "Thousands";
var yAxisTitle = "Thousands";

var data = [];
data[0] = [52.5,54.6,59.3,59.8,60.3,60.6,61.2,74.4,80.5,68.5,66.7,54.0,54.5,72.1,68.9,73.0,72.0,68.6,66.1,69.2,67.6,67.2,67.0,70.8,70.9,70.0,68.5,68.0,67.8,67.1,65.6,65.5,66.4,68.3,70.7,71.2,75.6,73.7,77.5,75.1,78.4,72.9,69.0,67.0,61.5,59.6,59.7,58.0,60.4,55.7,52.5,51.2,50.5,48.7,47.7,47.1,45.8,44.8,42.1,39.3,39.6,37.7,36.3,34.7,33.6,32.3,31.1,30.1,30.1,27.4,27.4,28.4,28.0,24.8,23.4,22.4,22.0,21.4,22.0,22.1,23.2];
data[1] = [41.0,42.6,46.1,46.6,46.9,47.4,47.8,58.3,63.4,53.2,51.0,40.9,41.6,54.7,53.6,56.6,56.4,53.7,51.7,52.1,50.9,50.5,50.3,53.1,52.9,52.3,51.1,50.8,50.9,50.9,50.3,50.3,51.3,52.8,54.6,54.8,58.1,56.7,59.5,57.7,60.5,56.5,53.7,52.4,48.5,47.3,47.6,46.6,48.1,44.7,42.5,41.8,41.6,40.5,39.9,39.6,38.8,38.1,36.1,33.2,33.4,31.8,30.6,29.3,28.5,27.5,26.6,25.8,25.9,23.7,23.9,24.9,24.7,22.0,20.9,20.2,19.9,19.3,20.0,19.9,21.0];

categories = [];
var bands =[];

//set mon to -1 to ignore
var startMon = -1; // keep this as base 1 to match years eg Sept is month 9
//interval to skip in the xAxis category
var interval = 10;
var year = 1932;




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
        name: 'Feamle',
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
                value:13,
                color: plotLineColor,
                width:2,
                zIndex:4,
                label:{text:'1',rotation:0}
            },{
                value:37,
                color: plotLineColor,
                width:2,
                zIndex:4,
                label:{text:'2',rotation:0}
            },{
                value:72,
                color: plotLineColor,
                width:2,
                zIndex:4,
                label:{text:'3',rotation:0}
            },{
                value:79,
                color: plotLineColor,
                width:2,
                zIndex:4,
                label:{text:'4',rotation:0}
            }
            ];
  initLineChart();

});

function setBands(){



  for (var i=0; i < categories.length; i++)
  {

    if(i>6 && i<13){
      bands.push({color: plotBandColor,
                  from:i,
                  to:i+1});
    }

  }
}

