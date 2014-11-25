var title = "Figure 6: Distribution of aggregate household wealth, by total household income quintile: Great Britain 2010-12";
var subtitle = "";
var units = "%";
var yAxisTitle = "% of total aggregate wealth held";

var data = [[7], [11], [16], [22], [44]];


categories = ["Wealth"];

var interval = 1;




$(document).ready(function(){
  options.yAxis.plotLines= [{
                color: '#f00',
                width: 1,
                value: 0,
                zIndex:4
            }]


  options.legend.enabled = true;

  options.plotOptions= {
            bar: {
                stacking: 'percent'
            }
        }
  options.series = [
      {
        name: 'Q5 (Highest)',
        data: data[4],
        borderColor: options.colors[4]
      },
      {
        name: 'Q4',
        data: data[3],
        borderColor: options.colors[3]
      },
      {
        name: 'Q3',
        data: data[2],
        borderColor: options.colors[2]
      },
      {
        name: 'Q2',
        data: data[1],
        borderColor: options.colors[1]
      },
      {
        name: 'Q1 Lowest',
        data: data[0],
        borderColor: options.colors[0]
      }
  ];

  
  initBarChart();

});



