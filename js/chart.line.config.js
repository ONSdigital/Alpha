
function initChart(){

    Highcharts.setOptions(options);

    // update the chart with the generated categories
    options.xAxis.categories = categories;

    options.chart.renderTo = 'chart';
    options.title = {text: title};
    options.title.y = -10;

    options.yAxis.title = {
        text: '%'
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