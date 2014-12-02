var title = "Figure 4: Quarterly estimates in CSEW violent crime, April 2011 to March 2014";
var subtitle = "";
var units = "";
var yAxisTitle = "Number of Crimes";

var data = [];
data[0] = [443 , 477 , 391 , 434 , 381 , 451 , 427 , 407 , 381 , 253 , 312 , 381];

var seriesNames = [ 'Violent Crimes'];

var categories = ['Apr-Jun 2011','Jul-Sep 2011','Oct-Dec 2011','Jan-Mar 2012','Apr-Jun 2012','Jul-Sep 2012','Oct-Dec 2012','Jan-Mar 2013','Apr-Jun 2013','Jul-Sep 2013','Oct-Dec 2013','Jan-Mar 2014'];

var interval = 1;
var bands =[];



$(document).ready(function(){

  options.legend.enabled = false;
  options.series = [
      {
        name: seriesNames[0],
        data: data[0],
        borderColor: options.colors[0]
      }
  ];

  setBands();
  options.xAxis.plotBands = bands;

  options.xAxis.plotLines = [
            {
                value:8.5,
                color: plotLineColor,
                width:2,
                zIndex:1,
                label:{text:'1',rotation:0}
            }
            ];


  
  initColumnChart();

});

function setBands(){
  for (var i=5; i < 9; i++)
  {

      bands.push({color: plotBandColor,
                  from:i-.5,
                  to:i+.5});

  }
}

