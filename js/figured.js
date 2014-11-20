var title = "Figure 1: Number of Adoptions, 1998-2012";
var units = "children";

var data = [];
data[0] = [4614,4987,5082,5380,5477,5350,5366,5276,4767,4732,4940,4664,4486,4740,5206];

//set mon to -1 to ignore
var startMon = -1; // keep this as base 1 to match years eg Sept is month 9
//interval to skip in the xAxis category
var interval = 1;
var year = 1998;



$(document).ready(function(){

  populateCategories();

  options.series = [
    {
      name: 'Adoptions',
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



