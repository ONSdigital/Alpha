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
      plotBackgroundColor: "#fff",
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
      enabled:false
    },

    credits:{
      enabled:false
    },

    series: []



        
  };

