var title = "Figure 12: Trends in CSEW vehicle-related theft, 1981 to 2013/14";
var subtitle = "";
var units = "";
var yAxisTitle = "Offences";

var data = [];
data[0] = [1757,null,2118,null,null,null,2922,null,null,null,3833,null,4293,null,4266,null,3430,null,2929,null,2465,2302,2063,1828,1674,1630,1440,1447,1198,1172,1199,1020,934];

var seriesNames = [ 'Vehicle-related theft'];
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


