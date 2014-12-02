var title = "Figure 5: Trends in CSEW violence, 1981 to 2013/14";
var subtitle = "";
var units = "";
var yAxisTitle = "Offences";

var data = [];
data[0] = [1910,null,1852,null,null,null,2055,null,null,null,2374,null,3280,null,3837,null,3259,null,2975,null,2277,2307,2213,2010,1984,2103,1815,1774,1687,1896,1744,1666,1327];



var seriesNames = [ 'All violence'];
var categories = ['1981','1982','1983','1984','1985','1986','1987','1988','1989','1990','1991','1992','1993','1994','1995','1996','1997', '1998', '1999','2000/01','2001/02','2002/03','2003/04','2004/05','2005/06','2006/07','2007/08','2008/09','2009/10','2010/11','2011/12','2012/13','2013/14'];


var interval = 5;




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


