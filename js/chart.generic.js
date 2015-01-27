var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
var chart;
var categories = [];
var plotLineColor = '#C0D1E7';
var plotBandColor = '#c0d1e7';
var subtitle ="";

var stacked = false;


var markers = [
      {
          symbol:"circle",
          states: {
            hover: {
              fillColor: '#007dc3',
              radiusPlus: 0,
              lineWidthPlus: 0
            }
          }
      },
      {
          symbol:"square",
          states: {
            hover: {
              fillColor: '#409ed2',
              radiusPlus: 0,
              lineWidthPlus: 0
            }
          }
      },
      {
          symbol:"diamond",
          states: {
            hover: {
              fillColor: '#7fbee1',
              radiusPlus: 0,
              lineWidthPlus: 0
            }
          }
      },
      {
          symbol:"triangle",
          states: {
            hover: {
              fillColor: '#7fbee1',
              radiusPlus: 0,
              lineWidthPlus: 0
            }
          }
      }
];

var lineStyles = ['Solid','shortdash','shortdot','shortdot'];

var options = {};
var baseOptions = {

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

   /// tooltip: {},

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

  console.log("pop cat")
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




  // generate chart series dynamically
  // to allow customisation
  function populateSeries(){

    options.series = [];

    $.each(seriesNames, function (i, value){
      var obj = {};
      obj.name = seriesNames[i];
      obj.data = data[i];
      obj.borderColor = options.colors[i];

      if(type==="line"){
       obj.marker = markers[i];
       obj.dashStyle = lineStyles[i];
      }

      options.series.push( obj );
    });
  }



function initLineChart(){
  var step = 1;
    Highcharts.setOptions(options);
    // update the chart with the generated categories
    options.xAxis.categories = categories;

    options.chart.renderTo = 'chart';
    options.chart.type = 'line';
    options.title = {text: title};
    //options.title.y = -10;

    options.subtitle = {
        text: subtitle
    };

    options.yAxis.title = {
        text: yAxisTitle
    }

    if(categories.length>90){
      step=12;
    }


  options.xAxis.labels = {
    // for long sereis need step to display item labels
    step:step,
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
      var symbol = ['<div class="circle">●</div>','<div class="square">■</div>','<div class="diamond">♦</div>','<div class="triangle">▲</div>','<div class="downtriangle">▼</div>','<div class="circle">●</div>','<div class="square">■</div>','<div class="diamond">♦</div>','<div class="triangle">▲</div>','<div class="triangle">▼</div>'];

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
      shared:false
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




  //Highcharts.setOptions(options);
 
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

/*
        plotLines: [{
                color: '#ccc',
                width: 1,
                value: 0,
                zIndex:4
            }], 
            */
    };
    options.tooltip ={
      shared:false
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

function initMap(){
    $.getJSON('../data/LAD_DEC_2011_EW_BGC_5PC_1DP.json', function (geojson) {
    //$.getJSON('../data/gb-all.js', function (geojson) {

        // Initiate the chart
        $('#chart').highcharts('Map', {
          chart: {
                backgroundColor: ''
            },

            title : {
                text : title
            },

            mapNavigation: {
                enabled: true,
                buttonOptions: {
                    verticalAlign: 'bottom'
                }
            },

          colorAxis: {
              dataClasses: [{
                  from: -40,
                  to: -5,
                  color: "#375D93"
              }, {
                  from: -5,
                  to: 0,
                  color: "#6A91C6"
              }, {
                  from: 0,
                  to: 5,
                  color: "#8facd4"
              }, {
                  from: 5,
                  color: "#e5ecf5"
              }]
          },

            tooltip: {
                backgroundColor: '#e6e6e6',
                borderWidth: 0,
                shadow: false,
                useHTML: false,
                padding: 0,
                pointFormat: '{point.properties.LAD11NM}' + ' ::{point.code}: <b>{point.value}%</b>'
            },

            series : [{
                data : data,
                mapData: geojson,
                joinBy: ['LAD11CD', 'code'],
                name: 'Net Migration',
                borderColor: '#375D93',
                borderWidth: 0.2,
                states: {
                    hover: {
                        color: 'gold'
                    }
                },
                dataLabels: {
                    enabled: false,
                    format: '{point.properties.LAD11NM}'
                }
            }],
            credits:{
              enabled:false
            },
        });

    });

    //chart = new Highcharts.Map(options);
}




function initChart(){
  console.log("init chart");

    var stackType = 'normal';

    //reset the base chart options
    options = JSON.parse(JSON.stringify(baseOptions));



    if(stacked){

      if(pc){
        stackType = 'percent';
      }

      options.plotOptions.bar.stacking = stackType;
      options.plotOptions.column.stacking = stackType;
      
    }else{
      pc = false;
      $('#pc').prop('checked', false);
      console.log(" reset stack...")

      // reset
      if(options.plotOptions.bar){
        options.plotOptions.bar.stacking = null;
      }
      if(options.plotOptions.column){
        options.plotOptions.column.stacking = null;
      }

    };

    if(type!=='map'){

      populateSeries();

      if(categories.length===0){
        populateCategories();

      }
    }


  switch (type){
    case "bar":
      console.log("type: " + type);
      initBarChart();
    break;

    case "column":
      console.log("type: " + type);
      initColumnChart();
    break;

    case "line":
      console.log("type: " + type);
      initLineChart();
    break;

    case "map":
      console.log("type: " + type);
      console.log(data);
      initMap();
    break;
  }



}



