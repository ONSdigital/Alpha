$(document).ready(function(){
var barChart;
var seriesChart;
var stackedBar;



  // init options and then load individual charts
		setOptions();

    multiseries();
    multiseriesTooltip();
    initBarChart();
    populationPyramid();
    initStackedBar();
    pieChart();
    lineseries();


    window.onresize = function(event) {
      resize();
    };

    resize();

 });


function resize(){

    var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    seriesChart = $('#chart_prices').highcharts();
    stackedBar = $('#stackedBar').highcharts();

    var options = stackedBar.options;

    if(w<768){
      options.chart.type="bar";
      options.yAxis[0].title.align = 'low';
      options.yAxis[0].title.offset = -300;

      options.plotOptions.column = {};
      options.plotOptions.series = {stacking: 'normal'};
      stackedBar =  $('#stackedBar').highcharts(options);

    }else{
      options.chart.type="column";

      yAxis = stackedBar.yAxis[0]
      titleWidth=0;

      if(yAxis.axisTitle){
        titleWidth = yAxis.axisTitle.getBBox().width;
        yAxis.update({
          title: {
            offset: -titleWidth,
            align: 'high'
          }
        });
      }

      options.plotOptions.series = {};
      options.plotOptions.column = {stacking: 'normal'};
      stackedBar =  $('#stackedBar').highcharts(options);

    }
}

function setOptions(){

  Highcharts.setOptions({

    colors: ['#007dc3', '#409ed2', '#7fbee1', '#d2ccbb', '#0054aa', '#757575' ],


            chart: {
              style: {
                fontFamily: 'Open Sans',
                color:'#000'
              },
              spacingTop: 30,
              spacingLeft:30,
              backgroundColor:'#F9F9F9',
              events: {

                load: function () {
                  var chart = this,
                  yAxis = chart.yAxis[0]
                  titleWidth=0;
                  console.log(yAxis);

                  if(yAxis.axisTitle){
                    console.log(yAxis.axisTitle);
                    titleWidth = yAxis.axisTitle.getBBox().width;
                    yAxis.update({
                      title: {
                        offset: -titleWidth
                      }
                    });
                  }
                }

              }
            },

            plotOptions: {
              series: {
                animation: false
              },
              line: {
                marker: {
                 radius: 4,
                 fillColor: '#fff',
                 lineColor: null,
                 lineWidth: 2
               },
               shadow:true
               ,
               dataLabels: {
                enabled: false
              }
            }
          },

          yAxis: {
            title: {
              style: {
                color: '#000',
                fontWeight:300
              },

              align: 'high',
              rotation: 0,
              y: -15,
            }

          },


          legend: {
            borderColor:null,
            borderRadius: 0,
            borderWidth: 1
          },

          credits:{
            enabled:false
          }
        });


}


