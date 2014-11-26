var title = "Figure 1.3: Long-Term International Migration, Rolling annual data to year ending December 2013";
var subtitle = "Immigration by Citizenship when Main Reason for Migration is  'Work Related'";
var units = "";
var yAxisTitle = "Migration (thousands)";

var data = [];
data[0] = [41, null,37, null,42, null,48, null,43, null,31, null,31, null,32, null,39, null,42, null,40, null,45,44,46,46,49,47,44,38,36,32,33,34,35,36,36,39,37];
data[1] = [30, null,27, null,18, null,24, null,26, null,21, null,31, null,42, null,42, null,36, null,33, null,38,35,39,40,32,32,34,35,40,41,41,42,49,53,59,65,62];
data[2] = [10, null,37, null,59, null,61, null,56, null,63, null,75, null,82, null,69, null,48, null,45, null,43,50,47,57,54,47,53,45,47,44,37,41,40,43,46,46,46];
data[3] = [null, null, null, null, null, null, null, null, null, null, null, null,1, null,2, null,7, null,14, null,11, null,7,8,8,5,5,4,3,5,5,5,5,5,6,7,13,17,16];
data[4] = [93, null,113, null,107, null,93, null,101, null,100, null,82, null,73, null,74, null,66, null,59, null,54,51,48,49,52,51,50,51,47,48,48,45,44,44,42,42,44];



var categories = [ 'YE Jun 04', 'YE Sep 04', 'YE Dec 04', 'YE Mar 05', 'YE Jun 05', 'YE Sep 05', 'YE Dec 05', 'YE Mar 06', 'YE Jun 06', 'YE Sep 06', 'YE Dec 06', 'YE Mar 07', 'YE Jun 07', 'YE Sep 07', 'YE Dec 07', 'YE Mar 08', 'YE Jun 08', 'YE Sep 08', 'YE Dec 08', 'YE Mar 09', 'YE Jun 09', 'YE Sep 09', 'YE Dec 09', 'YE Mar 10', 'YE Jun 10', 'YE Sep 10', 'YE Dec 10', 'YE Mar 11', 'YE Jun 11', 'YE Sep 11', 'YE Dec 11', 'YE Mar 12', 'YE Jun 12', 'YE Sep 12', 'YE Dec 12', 'YE Mar 13', 'YE Jun 13', 'YE Sep 13', 'YE Dec 13'];


//set mon to -1 to ignore
var startMon = -1; // keep this as base 1 to match years eg Sept is month 9
//interval to skip in the xAxis category
var interval = 4;
var year = 1964;

var bands =[];

$(document).ready(function(){
  populateCategories();


  options.legend.enabled = true;

  options.series = [
      {
        name: 'British',
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
        name: 'EU15',
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
        name:'EU8',
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
        name:'EU2',
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
        dashStyle: 'longdot'
      },
      {
        name:'Non European Union',
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
