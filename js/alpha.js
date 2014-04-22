

$(document).ready(function() {

  // catch errors with closing menu
  $(document).on('click', '.yamm .dropdown-menu', function(e) {  
    e.stopPropagation()  
  })  




	    $('.sparkline').each(function() {
	    	var wd = $(this).parent().width()-10;
	    	ht = $(this).parent().height();

        $(this).highcharts({

          chart: {
            backgroundColor: '#FFF',
            borderWidth: 0,
            borderRadius: 0,
            type: 'area',
            margin: [2, 0, 2, 0],
            width: wd,
            height: ht,
            skipClone: true,
            marginTop: 10,
            style: {
                overflow: 'visible'
            }
          },

          title: {
            text: ''
          },

          credits: {
              enabled: false
          },

          xAxis: {
            labels: {
                enabled: false
            },
            title: {
                text: null
            },
            startOnTick: false,
            endOnTick: false,
            tickPositions: []
          },

          yAxis: {
            minPadding: 0,
            endOnTick: false,
            startOnTick: false,
            labels: {
              enabled: false
            },
            title: {
              text: null
            },
            tickPositions: []
          },

          legend: {
              enabled: false
          },

          tooltip: {
              backgroundColor: null,
              borderWidth: 0,
              shadow: false,
              useHTML: true,
              hideDelay: 0,
              shared: true,
              padding: 0,
              positioner: function (w, h, point) {
                return { x: point.plotX - w / 2, y: point.plotY - h +50};
              },
            headerFormat: '',
            pointFormat: '{point.y}'
          },

          plotOptions: {
            series: {
              animation: false,
              lineWidth: 1,
              shadow: false,
              states: {
                hover: {
                  lineWidth: 1
                }
              },

              marker: {
                radius: 0,
                states: {
                  hover: {
                    radius: 2
                  }
                }
              },

              fillOpacity: 0.25
            }
          },

          series: [{
              data: $(this).data('sparkline-data')
          }]

        }); // end highcharts function

      }); // end of .each sparkline
        

        $(".ons-chart").onsc();
});