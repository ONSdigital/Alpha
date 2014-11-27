var title = "Figure 1: Numbers of live births and Total Fertility Rate (TFR), 1943-2013";
var units = "";
var yAxisTitle = "Live births (thousands)";

var data = [];
data[0] = [684334,751478,679937,820719,881026,775306,730518,697097,677529,673735,684372,673651,667811,700335,723381,740715,748501,785005,811281,838736,854055,875972,862725,849823,832164,819272,797538,784486,783155,725440,675953,639885,603445,584270,569259,596418,638028,656234,634492,625931,629134,636818,656417,661018,681511,693577,687725,706140,699217,689656,673467,664726,648138,649485,643095,635901,621872,604441,594634,596122,621469,639721,645835,669601,690013,708711,706248,723165,723913,729674,698512];
data[1] = [2.02,2.24,2.04,2.47,2.68,2.38,2.27,2.18,2.14,2.16,2.22,2.21,2.22,2.35,2.45,2.52,2.56,2.68,2.77,2.85,2.88,2.93,2.85,2.75,2.65,2.57,2.47,2.40,2.37,2.17,2.00,1.89,1.78,1.71,1.66,1.73,1.84,1.88,1.80,1.76,1.76,1.75,1.78,1.77,1.81,1.82,1.80,1.84,1.82,1.80,1.76,1.75,1.72,1.74,1.73,1.73,1.70,1.65,1.63,1.64,1.72,1.77,1.77,1.83,1.88,1.92,1.90,1.94,1.93,1.94,1.85];


//set mon to -1 to ignore
var startMon = -1; // keep this as base 1 to match years eg Sept is month 9
//interval to skip in the xAxis category
var interval = 5;
var year = 1943;




$(document).ready(function(){

  populateCategories();
  options.legend.enabled = true;
  options.chart.events = null;


  options.yAxis= [{ // Primary yAxis
            labels: {
                format: '{value}',

            },
            title: {
              offset:0,
                text: 'TFR (children per women)',
                align: 'high',
                rotation: 0,
                y: -15
            },
            opposite: true

        }, { // Secondary yAxis
            gridLineWidth: 0,
            title: {
                text: 'Live births (thousands',
                align: 'high',
                rotation: 0,
                y: -15,
                offset:-70,
            },
            labels: {
                format: '{value}',
            }

        }
        ];


  options.series = [
      {
        name: 'Number of Live births',
        data: data[0],
        yAxis: 1,
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
        name: 'Total Fertility Rate (TFR)',
        data: data[1],
        yAxis: 0,
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



