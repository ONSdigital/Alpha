var chart;


var data = [1.1,1.2,1.5,1.7,1.6,1.7,1.9,1.9,1.9,2.0,2.3,2.4,2.5,2.3,2.1,1.9,1.9,2.0,1.8,2.0,2.2,2.5,2.4,2.5,2.4,2.4,2.7,3.0,2.7,2.8,3.1,2.8,2.5,2.4,1.9,1.8,1.8,2.1,2.1,2.1,2.2,2.5,2.5,3.0,3.3,3.8,4.4,4.7,5.2,4.5,4.1,3.1,3.0,3.2,2.9,2.3,2.2,1.8,1.8,1.6,1.1,1.5,1.9,2.9,3.5,3.0,3.4,3.7,3.4,3.2,3.1,3.1,3.1,3.2,3.3,3.7,4.0,4.4,4.0,4.5,4.5,4.2,4.4,4.5,5.2,5.0,4.8,4.2,3.6,3.4,3.5,3.0,2.8,2.4,2.6,2.5,2.2,2.7,2.7,2.7,2.7,2.8,2.8,2.4,2.7,2.9,2.8,2.7,2.7,2.2,2.1,2.0,1.9,1.7,1.6,1.8,1.5,1.9,1.6,1.5,1.2];
var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
var startMon = 9;
var year = 2004;

var categories = [];


function populate(){
   $.each(data, function (index, value){

    var mon = months[startMon-1];

    var str = mon  + " " + year;
    console.log( str );
    categories.push( str );
    
    startMon++;
    if (startMon>=13){
      startMon = 1;
      year ++;
    }

    options.xAxis.categories = categories;

   });
}


var options = {

    chart: {
      type: 'line',
      style: {
        fontFamily: 'Open Sans',
        color:'#000'
      },
      spacingTop: 30,
      spacingLeft:30,
      backgroundColor:'#fff',
      events: {

          load: function () {
            var chart = this,
            yAxis = chart.yAxis[0]

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
    title:{
        style: {
          fontFamily: 'Open Sans',
          color:'red'
        },
      },
    colors: ['#007dc3', '#409ed2', '#7fbee1', '#007dc3', '#409ed2', '#7fbee1'],
    xAxis: {
        categories: ['']
    },
    yAxis: {
        min: 0,
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

    plotOptions: {
        series: {
          animation: false
        },
        line: {
          marker: {
            radius: 4,
            fillColor: '#fff',
            lineColor: null,
            lineWidth: 2,
            symbol:'circle'
          },
          shadow:true
          ,
          dataLabels: {
            enabled: false
          }
        }
    },



    legend: {
      enabled:false
    },

    credits:{
      enabled:false
    },

    series: []
  };




  function initChart(){

    Highcharts.setOptions(options);

    options.chart.renderTo = 'chart';
    options.chart.plotBackgroundColor = "#fff";
    options.title = {text: 'Figure A: CPI 12-month inflation rate for the last 10 years: September 2004 to September 2014'};

    options.yAxis.title = {
        text: 'Per cent'
    }

    options.xAxis.labels = {
    
      formatter : function() {
        
          //var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
          var response = "";
          //if(w<768){
            if(this.isFirst){
              count=0;
            }
            if(count%24===0){
              response = this.value;
            }
            count++;
          //}else{
          // response = this.value;
          //}
            return response

        }


      };

    options.xAxis.tickmarkPlacement = 'on';

    options.series = [
                        {
                            name: 'CPI',
                            data: data,
                            symbol: 'none'
                        }
                      ];

    options.plotOptions = {
      series:{
        shadow:false,
        states:{
          hover:{
            enabled:true,
            shadow:false,
            lineWidth: 3,
            lineWidthPlus: 0
          }
        },
        marker: {
                    enabled: false
        }
      }
    };

    options.tooltip = {
      shared: false,
      width:'150px',
      useHTML: true,
      crosshairs: {
        width: 2,
        color: '#f37121'
      },
      positioner: function (labelWidth, labelHeight, point) {
        var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
        var points = { x: 30, y: 42 };
        var tooltipX, tooltipY;

        if(w>768){

            if (point.plotX + labelWidth > trendThumb.plotWidth) {
              tooltipX = point.plotX + trendThumb.plotLeft - labelWidth - 20;
              $("#custom-tooltip").removeClass('tooltip-left');
            } else {
              tooltipX = point.plotX + trendThumb.plotLeft + 20;
              $("#custom-tooltip").removeClass('tooltip-right');
            }

            tooltipY = 50;
            points = { x: tooltipX, y: tooltipY };
        }else{
            $("#custom-tooltip").removeClass('tooltip-left');
            $("#custom-tooltip").removeClass('tooltip-right');
        }

        return points;
      }
     ,

      formatter: function(){
        var content = '<b>' + this.series.name + '</b> ' + this.x + '<br/><span class="stat">' + this.y + '%</span>';

        return content;
      }
      
  };

  options.shadow = false;


  trendThumb = new Highcharts.Chart(options);

  }




$(document).ready(function(){
  populate();
  initChart();

});



