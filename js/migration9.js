var title = "Figure 2.4: Entry Clearance Visas Issued (Excluding Visitor and Transit Visas), by World Area, UK, 2005–2014 ";
var subtitle = "";
var units = "";
var yAxisTitle = "Visas issued";

var data = [];
data[0] = [99370,97410,93147,93331,92716,90871,89143,86885,85608,84590,84946,89356,89836,85841,78612,74054,70378,69841,72144,72063,72577,72139,69014,63541,58972,57561,57428,57352,58062,57778,58089,61076,62564,63506];
data[1] = [65546,65816,65332,66110,67227,68643,68628,70020,70646,70585,71368,72752,73918,73360,69617,68281,67001,67054,70055,70620,70108,69629,68109,67044,65002,62949,62692,61835,61609,62346,62901,66457,68111,67214];
data[2] = [259869,265517,268857,284182,290001,296210,291978,288817,283917,278437,279895,283109,281608,277407,269560,302821,338177,350139,357588,355990,335771,347164,357494,342421,321435,293058,284246,276078,273861,266337,263893,275078,275709,279663];
data[3] = [84685,88559,92662,94421,94856,90235,83336,81652,78033,72611,59316,57237,57227,56706,52266,47475,46232,45189,46543,47781,47716,48650,48797,51309,49956,49784,50906,47971,48952,48527,51191,53986,54197,54700];
data[4] = [25941,26240,26669,28076,28732,29176,29285,30393,31106,34046,36517,41320,44298,47295,45419,44152,44023,40829,40044,41264,40492,41725,43121,41293,40264,38672,38001,39091,39903,40324,41032,44145,45569,46742];
data[5] = [48964,47047,48247,48263,48268,49695,47259,45243,42390,37901,35915,35468,35589,35392,33564,31632,30110,29462,28753,29130,28795,28475,28392,27587,27809,26612,25658,24784,24074,23264,23657,24941,25421,25065];

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
        name: 'Africa',
        data: data[0],
        borderColor: options.colors[0]
      },
      {
        name: 'America',
        data: data[1],
        borderColor: options.colors[1]
      }
      ,
      {
        name: 'Asia',
        data: data[2],
        borderColor: options.colors[2]
      },
      {
        name: 'Europe',
        data: data[3],
        borderColor: options.colors[3]
      }
      ,
      {
        name: 'Middle East',
        data: data[4],
        borderColor: options.colors[4]
      },
      {
        name: 'Oceania',
        data: data[5],
        borderColor: options.colors[5]
      }

  ];

  
  initColumnChart();

});



