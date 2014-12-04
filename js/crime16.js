var title = "Figure 16: Trends in police recorded other crimes against society, 2002/03 to 2013/14";
var subtitle = "";
var units = "";
var yAxisTitle = "Offences";

var data = [];
data[0] = [387821,420595,453825,515453,534159,542656,539153,504649,480330,448626,402616,398662];
data[1] = [143320,143511,145837,178479,194233,229913,243536,235584,232922,229099,208002,198176];
data[2] = [36379,39021,40605,39711,38937,37079,35662,28758,26327,23688,19910,20620];
data[3] = [129517,158178,191872,222581,236661,218380,204289,188254,173081,150858,132204,134433];
data[4] = [78605,79885,75511,74682,64328,57284,55666,52053,48000,44981,42500,45433];


var seriesNames = [ 'Other crimes', 'Drug offences', 'Possession of weapons', 'Public order offences', 'Miscellaneous'];
var categories = ['2002/03','2003/04','2004/05','2005/06','2006/07','2007/08','2008/09','2009/10','2010/11','2011/12','2012/13','2013/14'];


var interval = 1;




$(document).ready(function(){

  options.legend.enabled = true;

  options.series = [
      {
        name: seriesNames[0],
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
        name: seriesNames[1],
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
        name: seriesNames[2],
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
        name: seriesNames[3],
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
        dashStyle: 'longdot'
      },
      {
        name: seriesNames[4],
        data: data[4],
        marker:{
          symbol:"triangle-down",
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


