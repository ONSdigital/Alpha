var chart;

var title = "Figure C: CPIH, OOH component and CPI 12-month rates since January 2006";


var data = [];

data[0] = [1.9,2.0,1.8,2.0,2.2,2.5,2.4,2.5,2.4,2.4,2.7,3.0,2.7,2.8,3.1,2.8,2.5,2.4,1.9,1.8,1.8,2.1,2.1,2.1,2.2,2.5,2.5,3.0,3.3,3.8,4.4,4.7,5.2,4.5,4.1,3.1,3.0,3.2,2.9,2.3,2.2,1.8,1.8,1.6,1.1,1.5,1.9,2.9,3.5,3.0,3.4,3.7,3.4,3.2,3.1,3.1,3.1,3.2,3.3,3.7,4.0,4.4,4.0,4.5,4.5,4.2,4.4,4.5,5.2,5.0,4.8,4.2,3.6,3.4,3.5,3.0,2.8,2.4,2.6,2.5,2.2,2.7,2.7,2.7,2.7,2.8,2.8,2.4,2.7,2.9,2.8,2.7,2.7,2.2,2.1,2.0,1.9,1.7,1.6,1.8,1.5,1.9,1.6,1.5,1.2];
data[1] = [1.9,2.0,1.8,2.0,2.2,2.4,2.3,2.4,2.4,2.4,2.6,2.9,2.6,2.7,2.9,2.6,2.4,2.3,1.8,1.8,1.7,2.0,2.0,2.0,2.1,2.4,2.4,2.8,3.2,3.6,4.1,4.4,4.8,4.2,3.8,2.9,2.8,3.0,2.7,2.2,2.1,1.7,1.6,1.5,1.0,1.3,1.7,2.5,3.0,2.5,2.9,3.2,2.9,2.8,2.6,2.7,2.7,2.8,2.9,3.3,3.5,3.9,3.6,4.0,4.0,3.8,4.0,4.1,4.7,4.6,4.4,3.9,3.4,3.2,3.3,2.9,2.6,2.4,2.5,2.4,2.1,2.5,2.5,2.5,2.5,2.6,2.6,2.2,2.5,2.7,2.5,2.5,2.5,2.0,1.9,1.9,1.8,1.6,1.5,1.6,1.4,1.8,1.5,1.5,1.2];
data[2] = [1.4,1.5,1.4,1.4,1.4,1.5,1.5,1.5,1.6,1.5,1.6,1.6,1.4,1.4,1.4,1.3,1.4,1.3,1.4,1.5,1.3,1.5,1.4,1.4,1.5,1.5,1.5,1.6,1.5,1.5,1.5,1.4,1.6,1.5,1.6,1.5,1.3,1.4,1.3,1.2,1.0,0.6,0.4,0.3,0.2,-0.1,-0.3,-0.6,-0.7,-0.9,-0.9,-0.9,-0.8,-0.7,-0.6,-0.6,-0.5,-0.3,-0.1,0.1,0.3,0.3,0.5,0.6,0.6,0.8,0.9,0.9,1.1,1.1,1.2,1.2,1.3,1.3,1.3,1.2,1.2,1.2,1.1,1.1,1.1,1.0,1.0,1.0,1.0,1.0,1.0,1.0,1.0,1.0,1.0,1.0,1.0,1.0,1.0,1.0,0.9,0.9,0.9,0.9,0.9,0.9,0.9,1.0,1.0];


var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
var startMon = 1; // keep this as base 1 to match years eg Sept is month 9
var year = 2006;

var categories = [];




  function initChart(){

    Highcharts.setOptions(options);

    // update the chart with the generated categories
    options.xAxis.categories = categories;

    options.chart.renderTo = 'chart';
    options.title = {text: title};

    options.yAxis.title = {
        text: 'Per cent'
    }
    options.yAxis.min = null;




    options.series = [
      {
        name: 'CPI % change',
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
      },
      {
        name: ' CPIH % change',
        data: data[1],
        marker:{
          symbol:"square",
          states: {
            hover: {
              fillColor: '#409ed2',
              radiusPlus: 0,
              lineWidthPlus: 0
            }
          }
        },
        dashStyle: 'longdash'
      },
      {
        name:'OOH % change',
        data: data[2],
        marker:{
          symbol:"diamond",
          states: {
            hover: {
              fillColor: '#7fbee1',
              radiusPlus: 0,
              lineWidthPlus: 0
            }
          }
        },
        dashStyle: 'shortdot'
      }
  ];


  options.xAxis.labels = {
    formatter : function() {
        var interval = 24;
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
      var symbol = ['<div class="circle">●</div>','<div class="square">■</div>','<div class="diamond">♦</div>','<div class="triangle">▲</div>','<div class="triangle">▼</div>'];

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
        content += '<div class="tiptext"><b>' + val.point.series.chart.series[i].name + " </b>" + Highcharts.numberFormat(val.y, 2) +'%</div>' ;
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


// generate chart categories to keep control of content/formatting
function populate(){
   $.each(data[0], function (index, value){

    var mon = months[startMon-1];
    var str = mon  + " " + year;
    categories.push( str );
    
    startMon++;
    if (startMon>=13){
      startMon = 1;
      year ++;
    }

   });
}


$(document).ready(function(){

  populate();
  initChart();

});



