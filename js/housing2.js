var title = "Figure 2: Index values, UK all dwellings from January 2004 to May 2014";
var units = "";
var yAxisTitle = "Index value";

var data = [];
data[0] = [135.4,134.1,134.4,140.5,142.2,144.7,147.8,149.5,149.2,150.3,150.1,149.0,148.9,148.1,151.3,150.1,150.8,152.0,153.7,153.7,154.0,152.7,153.4,153.3,155.1,153.2,156.2,157.6,159.3,160.0,162.7,165.0,166.3,165.6,166.9,168.5,171.9,171.3,173.2,175.0,176.5,179.4,182.8,183.7,184.3,184.4,183.2,182.5,185.5,182.1,182.3,183.1,181.7,180.4,180.2,175.2,175.0,170.8,167.7,163.8,164.2,159.7,157.5,158.4,158.6,161.1,165.0,165.3,167.7,166.9,168.5,168.6,174.3,171.4,172.8,173.9,175.5,177.1,178.5,178.7,178.0,175.0,174.8,173.7,174.5,171.1,173.2,172.6,171.1,173.1,175.6,176.0,175.2,174.2,173.8,173.0,175.5,172.8,172.6,175.1,175.1,177.1,179.1,179.3,178.2,176.7,177.6,178.7,179.2,176.1,177.3,179.7,180.2,182.5,185.0,185.9,185.0,186.4,187.2,188.5,191.3,192.2,191.4,197.5,199.0];

//set mon to -1 to ignore
var startMon = 1; // keep this as base 1 to match years eg Sept is month 9
//interval to skip in the xAxis category
var interval = 12;
var year = 2004;




$(document).ready(function(){

  populateCategories();
  options.legend.enabled = true;
  options.yAxis.min = null;

  options.series = [
      {
        name: 'House Price',
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



