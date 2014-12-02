var title = "Figure 3: Trends in police recorded crime and CSEW, 1981 to 2013/14";
var subtitle = "";
var units = "";
var yAxisTitle = "Offences (thousands)";

var data = [];
data[0] = [11066,null,11901,null,null,null,13313,null,null,null,15111,null,18355,null,19109,null,16469,null,14762,null,12366,12018,11417,10550,10581,10942,9842,10283,9344,9446,9345,8487,7333];
data[1] = [2964,3262,3247,3499,3612,3847,3892,3716,3871,4544,5276,5592,5526,5253,5100,5037,4598,4481];
data[2] = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,5109,5301,5171,5525];
data[3] = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,5975,6014,5638,5555,5428,4952,4703,4338,4151,3789,3733,3718];



var seriesNames = [ 'CSEW Estimate', 'Old counting rules', 'New counting rules','Post NCRS'];
var categories = ['1981','1982','1983','1984','1985','1986','1987','1988','1989','1990','1991','1992','1993','1994','1995','1996','1997', '1998/99','1999/00','2000/01','2001/02','2002/03','2003/04','2004/05','2005/06','2006/07','2007/08','2008/09','2009/10','2010/11','2011/12','2012/13','2013/14'];


var interval = 5;




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
            type: 'column'
      },
      {
        name: seriesNames[2],
        data: data[2],
        borderColor: options.colors[2],
            type: 'column'
      },
      {
        name: seriesNames[3],
        data: data[3],
        borderColor: options.colors[3],
            type: 'column'
      }
     
  ];

  initColumnChart();

});


