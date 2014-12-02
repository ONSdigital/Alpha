var title = "Figure 6: Mix-adjusted House Price Index by selected regions from January 2004 to May 2014";
var subtitle = "Index level (Feb 2002=100)";
var units = "";
var yAxisTitle = "Index Value";

var data = [];
data[0] = [135.4,134.1,134.4,140.5,142.2,144.7,147.8,149.5,149.2,150.3,150.1,149.0,148.9,148.1,151.3,150.1,150.8,152.0,153.7,153.7,154.0,152.7,153.4,153.3,155.1,153.2,156.2,157.6,159.3,160.0,162.7,165.0,166.3,165.6,166.9,168.5,171.9,171.3,173.2,175.0,176.5,179.4,182.8,183.7,184.3,184.4,183.2,182.5,185.5,182.1,182.3,183.1,181.7,180.4,180.2,175.2,175.0,170.8,167.7,163.8,164.2,159.7,157.5,158.4,158.6,161.1,165.0,165.3,167.7,166.9,168.5,168.6,174.3,171.4,172.8,173.9,175.5,177.1,178.5,178.7,178.0,175.0,174.8,173.7,174.5,171.1,173.2,172.6,171.1,173.1,175.6,176.0,175.2,174.2,173.8,173.0,175.5,172.8,172.6,175.1,175.1,177.1,179.1,179.3,178.2,176.7,177.6,178.7,179.2,176.1,177.3,179.7,180.2,182.5,185.0,185.9,185.0,186.4,187.2,188.5,191.3,192.2,191.4,197.5,199.0];
data[1] = [123.4,121.9,121.1,127.8,129.7,131.3,133.4,132.9,131.8,132.9,131.6,128.9,129.6,130.5,133.0,131.2,131.7,133.5,134.6,134.0,134.3,131.7,133.5,133.7,136.1,132.5,138.4,140.0,141.0,140.8,144.1,144.1,146.4,145.4,146.7,149.5,153.8,153.8,157.6,159.0,161.2,165.4,171.1,168.9,170.6,171.0,168.2,167.8,174.5,167.9,169.5,170.6,172.4,167.7,169.3,161.3,162.1,158.9,156.5,151.7,150.3,146.9,143.0,144.0,144.0,149.0,153.4,152.8,157.7,157.0,158.1,159.1,167.1,162.4,165.2,168.2,168.6,171.1,175.5,171.7,171.9,170.1,171.0,169.2,172.7,169.1,173.2,173.9,170.4,173.1,176.5,176.5,176.2,176.3,175.7,175.7,179.4,174.4,172.9,182.3,182.4,183.5,186.5,187.6,185.3,182.1,184.6,187.0,189.2,184.5,186.1,193.5,194.3,198.4,204.6,203.6,202.6,203.9,206.0,210.0,214.1,217.3,217.7,229.7,233.3];
data[2] = [141.5,140.4,141.3,147.9,150.3,153.1,156.8,159.2,159.1,160.3,160.8,160.2,159.9,159.0,162.3,161.4,162.6,163.9,165.7,166.1,166.1,165.3,165.8,166.0,167.0,166.1,168.5,169.8,171.8,172.8,175.6,178.6,179.9,179.4,180.7,182.0,185.2,184.3,185.7,187.7,189.0,191.7,194.2,196.0,196.0,196.3,195.2,194.4,196.3,193.8,193.4,194.0,192.2,191.6,191.0,186.7,185.6,181.1,178.2,174.7,175.4,170.8,169.0,169.4,169.9,171.9,175.7,176.3,178.2,176.9,178.7,178.7,182.3,180.1,181.3,182.2,183.7,184.8,185.3,186.7,185.5,182.2,181.8,180.7,180.4,176.9,178.1,177.5,177.1,178.6,180.5,181.3,179.6,178.8,178.8,177.5,178.9,177.1,178.1,177.3,177.4,180.4,181.9,181.4,181.0,180.2,180.2,180.9,181.0,178.2,179.2,179.9,180.7,182.2,183.4,185.4,183.7,185.9,186.0,186.6,187.8,188.5,187.7,191.1,192.3];
data[3] = [130.7,129.0,128.7,132.6,132.6,135.1,137.7,139.5,139.2,140.0,138.8,138.2,137.7,135.5,139.2,137.4,136.8,137.5,139.5,138.9,140.2,138.4,138.7,137.7,140.9,138.0,140.1,141.2,143.0,143.6,145.6,148.2,148.5,147.6,148.6,149.7,153.1,152.7,154.1,155.8,157.1,159.0,162.7,164.2,165.6,164.9,165.0,164.3,166.5,163.8,164.5,165.3,161.9,161.9,161.4,157.4,158.4,154.1,150.0,145.8,147.4,141.9,140.6,142.4,142.2,143.2,147.0,147.5,148.7,149.0,150.9,150.0,159.3,156.1,156.5,156.5,159.3,161.6,162.5,163.5,163.1,159.8,158.9,158.3,159.4,156.7,159.2,157.4,155.2,157.5,160.6,160.4,161.5,158.9,157.9,157.7,161.8,159.2,157.0,160.7,160.5,160.9,163.4,164.2,162.7,160.9,162.6,163.5,163.4,161.1,162.2,163.9,163.0,165.6,167.5,167.8,168.8,168.1,169.6,169.6,175.0,174.1,172.1,178.5,178.7];
data[4] = [132.9,131.5,131.4,137.0,137.2,138.9,140.6,143.5,143.1,144.2,144.5,144.9,142.4,142.8,144.4,141.9,142.0,143.4,145.0,144.1,145.0,142.2,144.2,142.8,145.6,141.3,145.1,146.3,147.6,147.5,150.8,153.0,153.4,152.2,153.6,154.4,157.6,158.2,158.2,158.7,160.3,161.6,165.2,167.2,166.2,166.2,168.0,165.9,168.4,167.7,167.5,167.6,166.6,164.0,165.1,159.7,158.5,156.1,150.3,147.9,149.5,145.6,144.5,142.4,143.5,145.6,149.2,148.6,152.3,151.6,151.9,152.3,158.1,157.6,156.6,159.2,160.7,160.7,162.7,164.7,164.1,160.9,162.2,159.3,163.2,158.6,159.5,159.2,157.4,160.0,160.8,161.9,160.5,159.5,160.4,158.1,160.4,159.4,158.4,160.8,160.4,162.7,164.8,163.5,163.7,161.9,161.9,163.2,165.3,160.5,162.8,162.4,164.7,166.2,167.0,167.2,166.8,169.8,168.7,170.7,173.0,172.7,173.6,176.3,178.8];





//set mon to -1 to ignore
var startMon = 1; // keep this as base 1 to match years eg Sept is month 9
//interval to skip in the xAxis category
var interval = 12;
var year = 2004;

var seriesNames = [ 'UK', 'London', 'UK excl Ldn & S.East', 'South East', 'East'];

$(document).ready(function(){

  populateCategories();

  options.legend.enabled = true;
  options.yAxis.min = null;

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
        dashStyle: 'shortdash'
      },
      {
        name:seriesNames[2],
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
      },
      {
        name: seriesNames[3],
        data: data[3],
        marker:{
          symbol:"triangle",
          states: {
            hover: {
              fillColor: '#7fbee1',
              radiusPlus: 0,
              lineWidthPlus: 0
            }
          }
        },
        dashStyle: 'shortdot'
      },
      {
        name: seriesNames[4],
        data: data[4],
        marker:{
          symbol:"triangle-down",
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

});



