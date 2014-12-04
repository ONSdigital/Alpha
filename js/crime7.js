var title = "Figure 7: Trends in police recorded sexual offences, 2002/03 to 2013/14";
var subtitle = "";
var units = "";
var yAxisTitle = "Offences";

var data = [];
data[0] = [56652,60412,60924,60287,56042,52166,50185,53006,53940,52760,53620,64200];
data[1] = [12295,13272,14013,14443,13774,12673,13096,15074,15892,16038,16357,20725];
data[2] = [44357,47140,46911,45844,42268,39493,37089,37932,38048,36722,37263,43475];


var seriesNames = [ 'Total sexual offences','Rape' ,'Other sexual offences'];
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
      },
      {
        name: seriesNames[1],
        data: data[1],
        borderColor: options.colors[1],
            type: 'line'
      },
      {
        name: seriesNames[2],
        data: data[2],
        borderColor: options.colors[2],
            type: 'line'
      }
  ];

  initColumnChart();

});


