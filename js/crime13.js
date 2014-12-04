var title = "Figure 13: Trends in CSEW other household theft and theft from the person, 1981 to 2013/14";
var subtitle = "";
var units = "";
var yAxisTitle = "Offences";

var data = [];
data[0] = [1300,null,1339,null,null,null,1283,null,null,null,1492,null,1647,null,1570,null,1422,null,1225,null,967,943,897,843,812,872,778,862,875,938,1120,1017,777];
data[1] = [434,null,505,null,null,null,318,null,null,null,438,null,595,null,680,null,621,null,637,null,599,675,607,567,562,559,564,705,514,549,608,546,567];

var seriesNames = [ 'Other household theft','Theft from the person'];
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
        dashStyle: 'longdash'
      }
  ];

  initLineChart();

});


