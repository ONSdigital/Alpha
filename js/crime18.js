var title = "Figure 18: Police recorded crime and anti-social behaviour incidents, 2007/08 to 2013/14";
var subtitle = "";
var units = "";
var yAxisTitle = "Number of incidents";

var data = [];
data[0] = [4952277,4702697,4338295,4150916,4023007,3733090,3718043];
data[1] = [3873916,3673523,3532250,3217817,2722663,2255888,2102700];

var seriesNames = [ 'Total police recorded crime', 'ASB incidents excluding BTP'];

var categories = ['2007/08','2008/09','2009/10','2010/11','2011/12','Apr-12 to Mar-13','Apr-13 to Mar-14'];

var interval = 1;



$(document).ready(function(){

  options.legend.enabled = false;
  options.series = [
      {
        name: seriesNames[0],
        data: data[0],
        borderColor: options.colors[0]
      },
      {
        name: seriesNames[1],
        data: data[1],
        borderColor: options.colors[1]
      }
  ];


  options.xAxis.plotLines = [
            {
                value: 3.5,
                color: plotLineColor,
                width:2,
                zIndex:1,
                label:{text:'1',rotation:0}
            }
            ];

  
  initColumnChart();

});


