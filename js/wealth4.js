var title = "Figure 4: Total household wealth, by total household income quintile: Great Britain, 2010-12";
var subtitle = "Quintiles of total household income";
var units = "%";
var yAxisTitle = "Percentiles of total household wealth";

var data = [
            [3400,14800,63700,217100,358400],
            [7900,26500,123800,323500,536200],
            [16600,61300,196200,447900,726700],
            [47600,125300,298300,605400,1019500],
            [114900,266100,547100,1029600,1774200]
          ];
categories = ['Quintile 1 (lowest income)','Quintile 2','Quintile 3','Quintile 4','Quintile 5 (highest income)'];

var interval = 0;




$(document).ready(function(){
/*
  options.chart.type = 'boxplot';
  options.legend.enabled = true;
  options.xAxis.tickInterval = 10000000;

  options.series = [
      {
        name: 'Total household wealth',
        data: data,
        type: 'bar'
      }
  ];
*/
  
  //initBarChart();

    $('#chart').highcharts({

        chart: {
            type: 'boxplot'
        },

        title: {
            text: title
        },

        legend: {
            enabled: false
        },

        xAxis: {
            categories: categories,
            title: {
                text: 'Total income quintiles'
            }
        },

        yAxis: {
            min:0,
            title: {
                text: "Total household Wealth £"
            }
        },

        plotOptions: {
            boxplot: {
                fillColor: '#F0F0E0',
                lineWidth: 2,
                medianColor: '#0C5DA5',
                medianWidth: 3,
                stemColor: '#A63400',
                stemDashStyle: 'solid',
                stemWidth: 1,
                whiskerColor: '#3D9200',
                whiskerLength: '90%',
                whiskerWidth: 3
            }
        },

        series: [{
            name: 'Total household wealth',
            data: data
        }]

    });

});



