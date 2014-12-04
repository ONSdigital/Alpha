var title = "Figure 6: Trends in police recorded robberies, 2002/03 to 2013/14";
var subtitle = "";
var units = "";
var yAxisTitle = "Offences";

var data = [];
data[0] = [110271,103736,91010,98198,101376,84773,80130,75105,76189,74688,65155,57818];


var seriesNames = [ 'Robbery offences'];
var categories = ['2002/03','2003/04','2004/05','2005/06','2006/07','2007/08','2008/09','2009/10','2010/11','2011/12','2012/13','2013/14'];


var interval = 1;




$(document).ready(function(){

  options.legend.enabled = true;

  options.series = [
      {
        name: seriesNames[0],
        data: data[0],
        borderColor: options.colors[0],
            type: 'line'
      }
  ];

  initColumnChart();

});


