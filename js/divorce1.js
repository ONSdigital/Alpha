var title = "Figure 1: Number of marriages and divorces, 1932–2012";
var units = "Thousands";
var yAxisTitle = "Thousands";

var data = [];
data[0] = [3894,4042,4287,4069,5146,4886,6250,8254,7755,6368,7618,10012,12312,15634,29829,60254,43698,34856,30870,28767,33922,30326,28027,26816,26265,23785,22654,24286,23868,25394,28935,32052,34868,37785,39067,43093,45794,51310,58239,74437,119025,106003,113500,120522,126694,129053,143667,138706,148301,145713,146698,147479,144501,160300,153903,151007,152633,150872,153386,158745,160385,165018,158175,155499,157107,146689,145214,144556,141135,143818,147735,153065,152923,141322,132140,128131,121708,113949,119589,117558,118140];
data[1] = [307184,318191,342307,349536,354644,359160,361768,439694,470549,388921,369744,296432,302714,397626,385606,401210,396891,375041,358490,360624,349308,344998,341731,357918,352944,346903,339913,340126,343614,346678,347732,351329,359307,371127,384497,386052,407822,396746,415487,404737,426241,400435,384389,380620,358567,356954,368258,368853,370022,351973,342166,344334,349186,346389,347924,351761,348492,346697,331150,306756,311564,299197,291069,283012,278975,272536,267303,263515,267961,249227,255596,270109,273069,247805,239454,235367,235794,232443,243808,249133,262240];



//set mon to -1 to ignore
var startMon = -1; // keep this as base 1 to match years eg Sept is month 9
//interval to skip in the xAxis category
var interval = 10;
var year = 1932;

var bands =[];


$(document).ready(function(){

  populateCategories();

  options.legend.enabled = true;
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
      },
      {
        name: 'Marriages',
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
