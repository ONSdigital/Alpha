var title = "Figure 1: Number of people aged 90 and over per 100,000 population in the United Kingdom, 1982-2012";
var units = "";
var yAxisTitle = "Number";

var data = [];
data[0] = [315,322,332,344,356,373,386,403,416,431,457,487,503,528,545,562,588,603,618,637,648,662,675,685,685,680,657,675,721,768,806];


//set mon to -1 to ignore
var startMon = -1; // keep this as base 1 to match years eg Sept is month 9
//interval to skip in the xAxis category
var interval = 3;
var year = 1982;




$(document).ready(function(){

  populateCategories();


  options.series = [
      {
        name: 'People aged 90 and over',
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



