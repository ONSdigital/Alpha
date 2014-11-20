var title = "Figure D: Number of registrations by major sites, England, 2012";
var subtitle = "";
var units = "";
var yAxisTitle = "Number of registrations";

var data = [];
data[0] = [154,157,161,167,168,170,175,176,192,200,207,209,216,217,235,236,244,255,256,260,264,275,272,281,288,292,305,314,326,331,337,338,345,359,369,382,396,424,434,432,429];
data[1] = [155,158,165,177,176,181,185,186,188,189,194,197,199,203,205,214,223,252,247,258,263,271,269,276,282,284,288,307,312,319,321,325,332,343,359,367,376,405,410,417,427];


//set mon to -1 to ignore
var startMon = -1; // keep this as base 1 to match years eg Sept is month 9
//interval to skip in the xAxis category
var interval = 4;
var year = 1971;




$(document).ready(function(){

  populateCategories();

   options.legend.enabled = true;
   options.plotOptions = {
        series: {
            threshold: 100
        }
    }

  options.series = [
{
        name: 'Current',
        data: data[0],
        marker:{
          enabled:false,
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
        name: 'Published',
        data: data[1],
        marker:{
          enabled:false,
          states: {
            hover: {
              fillColor: '#409ed2',
              radiusPlus: 0,
              lineWidthPlus: 0
            }
          }
        },
        dashStyle: 'shortdash'
      }
  ];

  
  initLineChart();

});



