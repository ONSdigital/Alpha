var title = "Figure 1.2 Net migration for EU, Non EU and British Citizens";
var subtitle = "";
var units = "";
var yAxisTitle = "Net Migration (thousands)";

var data = [];
data[0] = [226,200,222,196,184,197,191,162,187,195,173,153,201,202,201,232,250,211,216,250,267,329,268,266,315,312,318,327,391,454,479,481,516,511,589,567,596,574,590,567,591,566,498,492,502,530,526];
data[1] = [291,240,233,246,269,238,210,208,192,189,228,232,257,184,164,174,213,209,237,205,231,285,281,266,238,236,264,279,251,291,321,309,363,363,344,361,398,341,427,368,339,351,321,317,319,317,314];
data[2] = [-65,-40,-11,-50,-85,-41,-19,-46,-5,6,-55,-79,-56,17,37,58,37,2,-21,44,36,44,-13,-1,77,76,55,48,140,163,158,171,153,148,268,267,265,273,229,229,256,205,177,175,183,212,212];


//Year,,1964,1965,1966,1967,1968,1969,1970,1971,1972,1973,1974,1975,1976,1977,1978,1979,1980,1981,1982,1983,1984,1985,1986,1987,1988,1989,1990,1991,1992,1993,1994,1995,1996,1997,1998,1999,2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,,YE Q1 2013,YE Q2 2013,YE Q3 2013,YE Q4 2013
data[0] = [null, null, null, null, null, null, null, null, null, null, null,3,1,0,3,5,-4,-4,6,2,9,11,22,4,4,9,7,-1,5,4,9,23,28,18,33,8,6,7,7,15,87,96,104,127,63,58,77,82,82,,95,106,131,124];
data[1] = [null, null, null, null, null, null, null, null, null, null, null,40,30,25,45,49,32,28,26,42,35,46,26,30,29,53,59,89,44,58,85,104,88,88,129,179,214,213,234,224,266,198,218,204,187,184,217,204,157,,145,140,140,146];
data[2] = [-131,-148,-152,-155,-115,-139,-119,-79,-49,-93,-120,-84,-50,-71,-53,-48,-83,-104,-88,-26,-7,1,-11,-32,-54,-18,-30,-44,-62,-62,-16,-51,-62,-59,-22,-24,-62,-48,-88,-91,-107,-88,-124,-97,-87,-44,-43,-70,-63,,-65,-63,-59,-57];


//var categories = ['1970','1971','1972','1973','1974','1975','1976','1977','1978','1979','1980','1981','1982','1983','1984','1985','1986','1987','1988','1989','1990','1991','1992','1993','1994','1995','1996','1997','1998','1999','2000','2001','2002','2003','2004','2005','2006','2007','2008','2009','2010','2011','2012','YE 2013 Q1','YE 2013 Q2','YE 2013 Q3','YE 2013 Q4'];


//set mon to -1 to ignore
var startMon = -1; // keep this as base 1 to match years eg Sept is month 9
//interval to skip in the xAxis category
var interval = 10;
var year = 1964;

var bands =[];

$(document).ready(function(){
    populateCategories();

    var len = categories.length;
    categories[len-2] = "YE Q4 2013";
    categories[len-3] = "YE Q3 2013";
    categories[len-4] = "YE Q2 2013";
    categories[len-5] = "YE Q1 2013";

// options.xAxis.title = {text: "Income Quartile"};
  options.legend.enabled = true;

  options.yAxis.min = null;

  options.series = [
      {
        name: 'EU Citizens',
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
        name: 'Non EU Citizens',
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
        dashStyle: 'shortdash'
      },
      {
        name:'British Citizens',
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

  setBands();
  options.xAxis.plotBands = bands;

  options.xAxis.plotLines = [
            {
                value:categories.length-5,
                color: plotLineColor,
                width:2,
                zIndex:4,
                label:{text:'1',rotation:0}
            }
            ];
  initLineChart();

});

function setBands(){
  for (var i=categories.length-5; i < categories.length; i++)
  {
      bands.push({color: plotBandColor,
                  from:i,
                  to:i+1});

  }
}