var title = "Figure 3.14: Applications for Asylum in the UK, Excluding Dependants, 2001-2014";
var subtitle = "";
var units = "";
var yAxisTitle = "Applications (thousands)";

var data = [];
data[0] = [71027,71272,75680,79092,84132,80736,71316,61343,49407,42504,39746,36305,33960,32013,30314,28017,25712,25159,24442,23986,23608,22874,22335,22358,23431,24356,25228,26026,25932,27716,27997,26422,24487,20441,18719,18097,17916,18411,18823,19255,19865,19826,19996,20890,21843,22630,23499,23765,23507,23731];

var titles = ['Asylum seekers, excluding dependants'];

var categories = [ 'YE Mar 01', 'YE Jun 01', 'YE Sep 01', 'YE Dec 01', 'YE Mar 02','YE Jun 02', 'YE Sep 02', 'YE Dec 02', 'YE Mar 03', 'YE Jun 03', 'YE Sep 03', 'YE Dec 03','YE Mar 04','YE Jun 04', 'YE Sep 04', 'YE Dec 04', 'YE Mar 05', 'YE Jun 05', 'YE Sep 05', 'YE Dec 05', 'YE Mar 06', 'YE Jun 06', 'YE Sep 06', 'YE Dec 06', 'YE Mar 07', 'YE Jun 07', 'YE Sep 07', 'YE Dec 07', 'YE Mar 08', 'YE Jun 08', 'YE Sep 08', 'YE Dec 08', 'YE Mar 09', 'YE Jun 09', 'YE Sep 09', 'YE Dec 09', 'YE Mar 10', 'YE Jun 10', 'YE Sep 10', 'YE Dec 10', 'YE Mar 11', 'YE Jun 11', 'YE Sep 11', 'YE Dec 11', 'YE Mar 12', 'YE Jun 12', 'YE Sep 12', 'YE Dec 12', 'YE Mar 13', 'YE Jun 13', 'YE Sep 13', 'YE Dec 13'];


var interval = 4;



$(document).ready(function(){


  options.yAxis.min = null;
  options.legend.enabled = true;



options.series = [
      {
        name: titles[0],
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

