var title = "Figure 6: Probability of divorce by next anniversary, 2010";
var units = "";
var yAxisTitle = "Percentage chance";

var data = [];
data[0] = [0.01,0.81,1.88,2.67,3.05,3.16,3.25,3.24,2.91,2.63,2.39,2.26,2.18,2.04,1.90,1.76,1.72,1.54,1.52,1.48,1.43,1.34,1.24,1.21,1.06,1.03,0.96,0.82,0.73,0.69,0.65,0.57,0.48,0.44,0.37,0.42,0.38,0.25,0.23,0.23,0.18,0.14,0.12,0.11,0.09,0.07,0.07,0.05,0.05,0.04,0.02];

categories = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50];
//set mon to -1 to ignore
var startMon = -1; // keep this as base 1 to match years eg Sept is month 9
//interval to skip in the xAxis category
var interval = 10;
var year = 1932;

var bands =[];


$(document).ready(function(){


  options.yAxis.min = 0;
  options.series = [
    {
        name: 'Divorces',
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
      }
      
  ];

  
  setBands();
  options.xAxis.title = {text: "Anniversary"};
  options.xAxis.plotBands = bands;

  options.xAxis.plotLines = [
            {
                value:8,
                color: plotLineColor,
                width:2,
                zIndex:1,
                label:{text:'1',rotation:0}
            },{
                value:26,
                color: plotLineColor,
                width:2,
                zIndex:1,
                label:{text:'2',rotation:0}
            }
            ];

  initLineChart();


});


function setBands(){



  for (var i=0; i < categories.length; i++)
  {

    if(i>=4 && i<8){
      bands.push({color: plotBandColor,
                  from:i,
                  to:i+1});
    }
    // if(i>=26 && i<27){
    //   bands.push({color: plotBandColor,
    //               from:i,
    //               to:i+1});
    // }

  }
}
