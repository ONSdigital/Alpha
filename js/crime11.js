var title = "Figure 11: Trends in CSEW domestic burglary, 1981 to 2013/14";
var subtitle = "";
var units = "";
var yAxisTitle = "Offences";

var data = [];
data[0] = [975,null,1123,null,null,null,1425,null,null,null,1735,null,2445,null,2389,null,2139,null,1861,null,1405,1361,1307,1057,1024,1005,965,991,915,1032,922,888,785];
data[1] = [752,null,916,null,null,null,1189,null,null,null,1376,null,1754,null,1735,null,1583,null,1256,null,951,961,935,748,719,708,716,717,648,736,690,640,573];
data[2] = [223,null,207,null,null,null,236,null,null,null,359,null,691,null,654,null,556,null,605,null,454,400,372,309,305,297,249,275,266,296,232,247,212];

var seriesNames = [ 'Domestic burglary','In a dwelling' ,'In a non-connected building'];
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
      }
  ];

  initLineChart();

  chart.options.tooltip.formatter= function(){
      var id = '<div id="custom-tooltip" class="tooltip-left tooltip-right">';
      var block = id + "<div class='sidebar' >";
      var title = '<b class="title">'+ this.x +' </b><br/>';
      var symbol = ['<div class="circle">●</div>','<div class="square">■</div>','<div class="diamond">♦</div>','<div class="triangle">▲</div>','<div class="downtriangle">▼</div>','<div class="circle">●</div>','<div class="square">■</div>','<div class="diamond">♦</div>','<div class="triangle">▲</div>','<div class="triangle">▼</div>'];

      var content = block + "<div class='title'>&nbsp;</div>" ;

      // symbols
      $.each(this.points, function(i, val){
        content +=  symbol[i] +'<br/>';
      })

      content+= "</div>";
      content+= "<div class='mainText'>";
      content+= title;


      // series names and values
      $.each(this.points, function(i, val){
        content += '<div class="tiptext"><b>' + val.point.series.chart.series[i].name + " </b><br/>" + val.y + ' ' + units + '</div>' ;
      })
      content+= "</div>";
      return content;
    }
});


