$(document).ready(function(){
var barChart;
var seriesChart;
var stackedBar;
  // init options and then load individual charts

	//
		setOptions();

    multiseries();
    multiseriesTooltip();
    initBarChart();
    populationPyramid();
    initStackedBar();
    pieChart();
    lineseries();

  window.onresize = function(event) {

   // barChart =  $('#bar').highcharts();
    seriesChart =   $('#chart_prices').highcharts();
    stackedBar =   $('#stackedBar').highcharts();

    var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    var options = stackedBar.options;

    if(w<768){
      console.log("small");
      options.chart.type="bar";
      options.plotOptions.column = {};
      options.plotOptions.series = {stacking: 'normal'};
      //barChart =  $('#bar').highcharts(options);
      stackedBar =  $('#stackedBar').highcharts(options);
/*
      seriesChart.tooltip.positioner = function () {
        console.log("func");
                return { x: 80, y: 50 };
            }
            */
    }else{
      options.chart.type="column";
      options.plotOptions.series = {};
      options.plotOptions.column = {stacking: 'normal'};
     // barChart =  $('#bar').highcharts(options);
      stackedBar =  $('#stackedBar').highcharts(options);
     // seriesChart.tooltip.positioner = function () {return { x: 80, y: 150 };};
    }
  };

 });




function setOptions(){

  Highcharts.setOptions({

    colors: [
            'rgb(0, 132, 209)',           // blue
            'rgb(255, 149, 14)',          // orange
            'rgb(255, 66, 14)',           // red
            'rgb(168, 189, 58)',          // green
            'rgb(144, 176, 201)',         // lt blue
            'rgb(255, 211, 32)',          // yellow
            'rgb(65, 64, 66)',            // dk grey
            'rgb(0, 61, 89)',             // dk grey
            'rgb(49, 64, 4)',             // dk grey
            'rgb(204, 204, 204)',         // lt grey
            'rgb(128, 128 , 128)'         // mid grey
            ],


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

                  if(yAxis.axisTitle){
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


