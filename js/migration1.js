var title = "Figure 1.1 Long Term International Migration, 1970 to 2013 ";
var subtitle = "";
var units = "";
var yAxisTitle = "Migration (thousands)";

var data = [];
data[0] = [226,200,222,196,184,197,191,162,187,195,173,153,201,202,201,232,250,211,216,250,267,329,268,266,315,312,318,327,391,454,479,481,516,511,589,567,596,574,590,567,591,566,498,492,502,530,526];
data[1] = [291,240,233,246,269,238,210,208,192,189,228,232,257,184,164,174,213,209,237,205,231,285,281,266,238,236,264,279,251,291,321,309,363,363,344,361,398,341,427,368,339,351,321,317,319,317,314];
data[2] = [-65,-40,-11,-50,-85,-41,-19,-46,-5,6,-55,-79,-56,17,37,58,37,2,-21,44,36,44,-13,-1,77,76,55,48,140,163,158,171,153,148,268,267,265,273,229,229,256,205,177,175,183,212,212];



var categories = ['1970','1971','1972','1973','1974','1975','1976','1977','1978','1979','1980','1981','1982','1983','1984','1985','1986','1987','1988','1989','1990','1991','1992','1993','1994','1995','1996','1997','1998','1999','2000','2001','2002','2003','2004','2005','2006','2007','2008','2009','2010','2011','2012','YE 2013 Q1','YE 2013 Q2','YE 2013 Q3','YE 2013 Q4'];


var interval = 5;
var bands =[];



$(document).ready(function(){


// options.xAxis.title = {text: "Income Quartile"};
  options.legend.enabled = true;



  options.series = [
      {
        name: 'Immigration',
        data: data[0],
        borderColor: options.colors[0],
            type: 'line'
      },
      {
        name: 'Emigration',
        data: data[1],
        borderColor: options.colors[1],
            type: 'line'
      },
      {
        name: 'Net Migration',
        data: data[2],
        borderColor: options.colors[1],
            type: 'column'
      }
     
  ];

  setBands();
    options.xAxis.plotBands = bands;

  options.xAxis.tickInterval = 5;
  options.xAxis.plotLines = [
            {
                value:41,
                color: plotLineColor,
                width:2,
                zIndex:1,
                label:{text:'1',rotation:0}
            }
            ];
  initColumnChart();

});


function setBands(){
  for (var i=0; i < categories.length; i++)
  {
    if(i>30 && i<41){
      bands.push({color: plotBandColor,
                  from:i,
                  to:i+1});
    }
  }
}

