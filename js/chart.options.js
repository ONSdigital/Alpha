var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
var chart;
var categories = [];
var plotLineColor = '#C0D1E7';
var plotBandColor = '#c0d1e7';
;
var options = {

    chart: {
      type: 'line',
      style: {
        fontFamily: 'Open Sans',
        color:'#000'
      },
      spacingTop: 10,
      spacingLeft:50,
      backgroundColor:'#F9F9F9',
      plotBackgroundColor: "#F1F1F1",
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
      margin:40,
        style: {
          font: 'normal 16px ff-dax-web-pro',

          color:'black'
        },
      },

    colors: ['#007dc3', '#409ed2', '#7fbee1', '#007dc3', '#409ed2', '#7fbee1'],

    xAxis: {
        categories: [''],
        tickmarkPlacement : 'on'
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
        },
        min:0

      },

    plotOptions: {
        series: {
          shadow:false,
          animation: false,
          states:{
            hover:{
              enabled:true,
              shadow:false,
              lineWidth: 3,
              lineWidthPlus: 0
            }
          },
          connectNulls: true,
          marker: {
            enabled: false
          }
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
      enabled:false,
      borderColor:null
    },

    credits:{
      enabled:false
    },

    series: []



        
  };


// generate chart categories to keep control of content/formatting
function populateCategories(){
   $.each(data[0], function (index, value){

    if(startMon>0){

      var mon = months[startMon-1];
      var str = mon  + " " + year;
      categories.push( str );
      
      startMon++;
      if (startMon>=13){
        startMon = 1;
        year ++;
      }
    }else{

      categories.push( year );
      year ++;
    }

   });
}



function initLineChart(){

    Highcharts.setOptions(options);
    // update the chart with the generated categories
    options.xAxis.categories = categories;

    options.chart.renderTo = 'chart';
    options.title = {text: title};
    //options.title.y = -10;


    options.yAxis.title = {
        text: yAxisTitle
    }


  options.xAxis.labels = {
    formatter : function() {
        
        var response = "";
        
          if(this.isFirst){
            count=0;
          }
          if(count%interval ===0 ){
            response = this.value;
          }
          count++;

          return response
      }
    };



    options.tooltip = {
      shared: true,
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

            if (point.plotX + labelWidth > chart.plotWidth) {
              tooltipX = point.plotX + chart.plotLeft - labelWidth - 20;
              $("#custom-tooltip").removeClass('tooltip-left');
            } else {
              tooltipX = point.plotX + chart.plotLeft + 20;
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
      var id = '<div id="custom-tooltip" class="tooltip-left tooltip-right">';
      var block = id + "<div class='sidebar' >";
      var title = '<b class="title">'+ this.x +' </b><br/>';
      var symbol = ['<div class="circle">●</div>','<div class="square">■</div>','<div class="diamond">♦</div>','<div class="triangle">▲</div>','<div class="triangle">▼</div>','<div class="circle">●</div>','<div class="square">■</div>','<div class="diamond">♦</div>','<div class="triangle">▲</div>','<div class="triangle">▼</div>'];

      var content = block + "<div class='title'>&nbsp;</div>" ;

      // symbols
      $.each(this.points, function(i, val){
        content +=  symbol[i];
      })

      content+= "</div>";
      content+= "<div class='mainText'>";
      content+= title;


      // series names and values
      $.each(this.points, function(i, val){
        content += '<div class="tiptext"><b>' + val.point.series.chart.series[i].name + " </b>" + val.y + ' ' + units + '</div>' ;
      })
      content+= "</div>";
      return content;
    },

      backgroundColor: 'rgba(255, 255, 255, 0)',
      borderWidth: 0,
      borderColor: 'rgba(255, 255, 255, 0)',
      shadow: false,
      useHTML: true
      
  };

 
  chart = new Highcharts.Chart(options);

}

function initColumnChart(){

    Highcharts.setOptions(options);

    options.chart.type = 'column';
   // options.chart.events = null;
    options.chart.renderTo = 'chart';
    options.title = {
      text: title
    };

    options.subtitle = {
        text: subtitle
    };


    options.yAxis.title = {
        text: '%'
    }

    
    options.legend.enabled = false;

    options.xAxis = {
        categories: categories
    };
    
    options.xAxis.labels = {
    formatter : function() {
        var response = "";
        if(this.isFirst){
          count=0;
        }
        if(count%interval ===0 ){
           response = this.value;
        }
        count++;
        return response
      }
    };

    options.yAxis = {
        title: {
            text: yAxisTitle,
            align: 'high',
            offset: 20,
            margin: 20
        },
        labels: {
          format : '{value} '
        }
        ,
        gridZIndex:1,
        gridLineColor:'#ccc'  ,
        plotLines: [{
                color: '#ccc',
                width: 1,
                value: 0,
                zIndex:1
            }], 
    };
    options.tooltip ={
            /*crosshairs: true*/
        };

    options.legend ={
      enabled: true
    }

    options.plotOptions = {
        series: {
            connectNulls:true
        },
/*
        bar: {
          dataLabels: {
              enabled: true,
              formatter: function() {
                  if (this.y===null) {
                      return '<i>N/A</i>';
                  } else if (this.y=== 0) {
                      return '<i>0.0%</i>';
                  } else {
                      return '';
                  }
              }
          }
      }
      */
    };




 
  chart = new Highcharts.Chart(options);

}

 function initBarChart(){

    Highcharts.setOptions(options);

    options.chart.type = 'bar';
    //NB Important as this removes the event listener that positions the label
    options.chart.events = null;
    options.chart.renderTo = 'chart';
    options.title = {
      text: title
    };

    options.subtitle = {
        text: subtitle
    };


    options.yAxis.title = {
        text: yAxisTitle
    }


    
    options.legend.enabled = false;

      options.xAxis = {
        tickmarkPlacement : 'between',
        alternateGridColor: '#f1f1f1',
        categories: categories,
       // reversed: true,
        labels: {
          enabled:true
        } 

    };

    options.yAxis = {
        title: {
            text: yAxisTitle
            /*,
            align: 'high',
            offset: 20,
            margin: 20
            */
        },
        labels: {
          format : '{value}'+units
        }
        ,
        gridZIndex:1,
        gridLineColor:'#ccc'  ,
        plotLines: [{
                color: '#ccc',
                width: 1,
                value: 0,
                zIndex:4
            }], 
    };
    options.tooltip ={
        };

    options.plotOptions = {
        series: {
          connectNulls:true
        },
        bar: {
          dataLabels: {
              enabled: true
              ,
              formatter: function() {
                  if (this.y===null) {
                     // return '<i>N/A</i>';
                      return '';
                  } else if (this.y=== 0) {
                      return '';//'<i>0.0%</i>';
                  } else {
                      return '';
                  }
              }

          }
      }
    };

 
  chart = new Highcharts.Chart(options);

}



