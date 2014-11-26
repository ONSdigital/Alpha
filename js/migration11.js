var title = "Figure 3.12: UK Entry Clearance Visas Issued, Including Dependants, by Reason (Excluding Visitor and Transit Visas), 2005–2014";
var subtitle = "";
var units = "";
var yAxisTitle = "Visas issued";

var data = [];
data[0] = [243466,245687,244661,247944,249634,247209,231194,218458,205826,189605,182249,181156,184711,182073,175758,164263,155691,152993,154615,161020,160737,161809,158261,152132,149310,148589,147377,145558,145110,141772,144554,152139,154860,156378];
data[1] = [191584,195491,195240,207572,211114,212499,210084,213244,213052,215405,213449,226086,231975,235611,227873,269081,303361,313309,320183,309004,285544,295086,304568,285115,261870,226556,214219,210843,209749,206762,204469,216895,218773,219053];
data[2] = [15834,16066,22447,22783,23215,23467,26274,30536,33144,35926,36960,41052,42238,42203,39998,37815,37703,38756,41859,46369,49191,51137,55082,59709,61406,65361,68990,66547,68351,69521,72496,76672,77664,79456];
data[3] = [40672,41379,41911,42609,42051,41097,39939,36826,35302,33505,32303,31894,30248,31058,30543,31830,33743,33512,33181,32932,32424,32847,33315,33009,32343,31738,31424,31198,31738,32440,34449,35355,35829,35766];
data[4] = [66324,66498,65592,67798,70119,72894,70944,68483,64389,59802,58161,55519,53544,52236,49455,46878,49472,49443,51405,53641,53713,52768,50186,49629,45723,44585,45281,42146,40892,37455,34201,33747,33690,35872];
data[5] = [28421,27459,27007,27630,27559,29550,33206,37470,42088,45989,46727,45349,41460,34467,27007,20022,17480,16001,15407,15448,15357,15690,15001,15035,14155,13072,12782,11908,11700,11691,11671,11928,11758,11694];


var categories = [ 'YE Dec 05', 'YE Mar 06', 'YE Jun 06', 'YE Sep 06', 'YE Dec 06', 'YE Mar 07', 'YE Jun 07', 'YE Sep 07', 'YE Dec 07', 'YE Mar 08', 'YE Jun 08', 'YE Sep 08', 'YE Dec 08', 'YE Mar 09', 'YE Jun 09', 'YE Sep 09', 'YE Dec 09', 'YE Mar 10', 'YE Jun 10', 'YE Sep 10', 'YE Dec 10', 'YE Mar 11', 'YE Jun 11', 'YE Sep 11', 'YE Dec 11', 'YE Mar 12', 'YE Jun 12', 'YE Sep 12', 'YE Dec 12', 'YE Mar 13', 'YE Jun 13', 'YE Sep 13', 'YE Dec 13', 'YE Mar 2014'];


var interval = 4;




$(document).ready(function(){


  options.legend.enabled = true;
  options.plotOptions= {
            column: {
                stacking: 'normal'
              }
            };

  options.series = [
      {
        name: 'Work',
        data: data[0],
        borderColor: options.colors[0]
      },
      {
        name: 'Study(1)',
        data: data[1],
        borderColor: options.colors[1]
      }
      ,
      {
        name: 'Student visitors',
        data: data[2],
        borderColor: options.colors[2]
      },
      {
        name: 'Other (excluding visitors and transit)',
        data: data[3],
        borderColor: options.colors[3]
      }
      ,
      {
        name: 'Family',
        data: data[4],
        borderColor: options.colors[4]
      },
      {
        name: 'Dependants joining / accompanying',
        data: data[5],
        borderColor: options.colors[5]
      }

  ];

  
  initColumnChart();

});



