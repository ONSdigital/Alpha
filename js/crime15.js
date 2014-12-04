var title = "Figure 15: Trends in CSEW criminal damage, 1981 to 2013/14";
var subtitle = "";
var units = "";
var yAxisTitle = "Offences";

var data = [];
data[0] = [2723,null,2801,null,null,null,2952,null,null,null,2750,null,3363,null,3300,null,2800,null,2784,2601,2494,2421,2487,2643,2884,2590,2656,2359,2133,1999,1739,1451];

var seriesNames = [ 'Criminal Damage'];
var categories = ['1981','1982','1983','1984','1985','1986','1987','1988','1989','1990','1991','1992','1993','1994','1995','1996','1997', '1998', '1999','2000/01','2001/02','2002/03','2003/04','2004/05','2005/06','2006/07','2007/08','2008/09','2009/10','2010/11','2011/12','2012/13','2013/14'];


var interval = 5;




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
      }
  ];

  initLineChart();

});


