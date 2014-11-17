var chart;

var title = "Standard Industrial Classification (UK SIC 2007) by year: Agriculture, forestry and fishing";


var data = [];

data[0] = [182975, 182780,  181720,  180160,  178620,  177890,  176805,  175305,  172900,  170735,  169365,  167470];
data[1] = [null, null,  null,  null,  null,  null,  null,  null,  null,  null,  null, 156150, 154700,  152330,  150535,  147810,  148400,  146425,  142840,  140175,  137480,  137090,  137075,  139025];
data[2] = [null,  null, null,  null,  null,  null,  null,  null,  null,  null,  null, null, null,  null,  null,  null,  null,  null,  null,  null,  null,  null,  null, 154015, 156055,  155705];
data[3] = [null,  null,  null,  null,  null,  null,  null,  null,  null,  null, null, null,  null,  null,  null,  null,  null,  null,  null,  null,  null,  null,  null, null, null, 139100, 137135,  139070,  138925,  143855];


var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
var startMon = 1; // keep this as base 1 to match years eg Sept is month 9
var year = 1984;

var categories = [];
var bands = [];




  function initChart(){

    Highcharts.setOptions(options);

    // update the chart with the generated categories
    options.xAxis.categories = categories;
    options.xAxis.plotBands = bands;

    options.chart.renderTo = 'chart';
    options.title = {text: title};

    options.xAxis.min = 0;

    options.yAxis.title = {
        text: ''
    }


    options.legend.enabled = false;


    options.series = [
      {
        name: 'Agriculture, forestry and fishing (1984-1995)',
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
        name: 'Agriculture, forestry and fishing (2005-2007)',
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
        name:'Agriculture, forestry and fishing (2007-2009)',
        data: data[2],
        marker:{
          symbol:"circle",
          states: {
            hover: {
              fillColor: '#7fbee1',
              radiusPlus: 0,
              lineWidthPlus: 0
            }
          }
        },
        dashStyle: 'Solid'
      },
      {
        name:'Agriculture, forestry and fishing (2009-2013)',
        data: data[3],
        marker:{
          symbol:"square",
          states: {
            hover: {
              fillColor: '#7fbee1',
              radiusPlus: 0,
              lineWidthPlus: 0
            }
          }
        },
        dashStyle: 'longdash'
      }
  ];


  options.xAxis.labels = {
    formatter : function() {
        var interval = 4;
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

 
  chart = new Highcharts.Chart(options, function (chart) { // on complete
/*        var point = chart.series[0].data[8],
            text = chart.renderer.text(
                'Max',
                point.plotX + chart.plotLeft + 10, point.plotY + chart.plotTop - 10
            ).attr({
                zIndex: 5
            }).add();*/

        var point = chart.series[3].data[2];
        chart.renderer.text('Figures for the year 1984-1993<br/>are counts of individual legal units.', point.plotX + chart.plotLeft + 10, 220)
            .css({
                color: '#333',
                fontSize: '10px'
            })
            .add();
        point = chart.series[3].data[13];
        chart.renderer.text('1995 - 2002 data are based on<br/>Standard Industrial Classification 1992.<br/><br/>2003 - 2007 data are based on<br/>Standard Industrial Classification 2003.', point.plotX + chart.plotLeft + 10, 270)
            .css({
                color: '#333',
                fontSize: '10px'
            })
            .add();
        point = chart.series[3].data[23];
        chart.renderer.text('Data are based on<br/>Standard Industrial<br/>Classification 2003.', point.plotX + chart.plotLeft + 10, 220)
            .css({
                color: '#333',
                fontSize: '10px'
            })
            .add();
        point = chart.series[3].data[26];
        chart.renderer.text('Data are based on<br/>Standard Industrial<br/>Classification 2007 .', point.plotX + chart.plotLeft + 10, 270)
            .css({
                color: '#333',
                fontSize: '10px'
            })
            .add();

    });

}


// generate chart categories to keep control of content/formatting
function setBands(){



  for (var i=0; i < categories.length; i++)
  {

    if(i>data[0].length-2 && i<data[1].length-1){
      bands.push({color: '#f9f9f9',
                  from:i,
                  to:i+1});
    }

    if(i>=data[2].length-1 && i<data[3].length-1){
      bands.push({color: '#f9f9f9',
                  from:i,
                  to:i+1});
    }
    
  }
}


// generate chart categories to keep control of content/formatting
function populate(){
   
   $.each(data[3], function (index, value){
      categories.push( year );
      year ++;
   });

}


$(document).ready(function(){

  populate();
  setBands();
  initChart();

});



