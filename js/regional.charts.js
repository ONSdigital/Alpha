var pyr = [];

var options = {

    chart: {
      type: 'bar'
    },
    
    colors: [ '#A8233E', '#dc5571', '#edaab7'],

    title: {
        text: ''
    },
    xAxis: {
        categories: ['']
    },
    yAxis: {
        min: 0,
        title: {
            text: ''
        },
        stackLabels: {
            enabled: true,
            style: {
                fontWeight: 'bold',
                color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray'
            }
        }
    },


  
    chart: {
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
          },
          series: [
            {
                name: 'over 64',
                data: [0]
            },
            {
                name: 'Adult',
                data: [0]
            },
            {
                name: 'Under 18',
                data: [0]
            }


            ]
        };



  function initCharts(){

    Highcharts.setOptions(options);


    //LIFE EXPECTANCY
    options.chart.renderTo = 'thumbLife';
    options.chart.type = 'column';
    options.title.text = "";
    options.yAxis.title = {
                              align: 'high',
                              offset: 50,
                              text: ''

                          };

    options.xAxis = {
                     categories: ['1991-1993', '2000-2002', '2010-2012']
                  };


    options.chart.events= {

                load: function () {
                  var chart = this,
                  yAxis = chart.yAxis[0]
                  titleWidth=0;

                  if(yAxis.axisTitle){
                    titleWidth = yAxis.axisTitle.getBBox().width;
                    yAxis.update({
                      title: {
                        offset: -80,
                        align:"low"
                      }
                    });
                  }

                }


              };

  options.legend.enabled = true;
  options.plotOptions.series = {};

  options.series = [

                    {
                        name: 'Male',
                        data: [7,12,16],
                        stack: 'Male'
                    }

                    ,{
                        name: 'Female',
                        data: [9,16,32],
                        stack: 'Female'
                    }

                    ];

    options.tooltip = {
      formatter: function() {
          return '<b>'+ this.series.name +', '+ this.point.category +'</b><br/>'+
                    'Life Expectancy: '+ Highcharts.numberFormat( this.point.y ,0) +" years";
      }
    }
    lifeThumb = new Highcharts.Chart(options);

    options.chart.renderTo = 'life1';
    life1 = new Highcharts.Chart(options);
    options.chart.renderTo = 'life2';
    life2 = new Highcharts.Chart(options);
    options.chart.renderTo = 'life3';
    life3 = new Highcharts.Chart(options);





    // POPULATION trend
    options.chart.type = 'line';
    options.chart.renderTo = 'trendThumb';
    options.chart.plotBackgroundColor = "#fff";
    options.title ='Population Trend';
    options.xAxis.categories = ['2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014'];

    options.yAxis.min = 0;
    options.xAxis.labels = {
    
      formatter : function() {
        

          var response = "";

            if(this.isFirst){
              count=0;
            }
            if(count%3===0){
              response = this.value;
            }
            count++;

            return response

        }


      };

    options.xAxis.tickmarkPlacement = 'on';
    options.series = [
                        {
                            name: 'Population Trend',
                            data: [],
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
      shared: true,
      width:'150px',
      crosshairs: {
        width: 2,
        color: '#DC5571'  //pink
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

  };
  options.shadow = false;


  trendThumb = new Highcharts.Chart(options);

    //POPULATION PYRAMID
    
    options.chart.type = 'bar';
    options.title.text = null;
    options.chart.plotBackgroundColor = "#fff";
    options.chart.margin = 10;
    options.chart.marginBottom = 20;
    options.chart.spacing =[10, 10, 10, 10];
    options.legend.enabled = false;
    options.xAxis = [{
                categories : [ '0-4', '5-9', '10-14', '15-19', '20-24', '25-29', '30-34', '35-39', '40-44','45-49', '50-54', '55-59', '60-64', '65-69', '70-74', '75-79', '80-84', '85-89', '90 +'],
                reversed: false,
                alternateGridColor: '#f1f1f1',
                lineWidth: 0,
                     minorGridLineWidth: 0,
                     lineColor: 'transparent',

                     labels: {
                         enabled: false
                     },
                     minorTickLength: 0,
                     tickLength: 0
            }, { // mirror axis on right side
              categories : [ '0-4', '5-9', '10-14', '15-19', '20-24', '25-29', '30-34', '35-39', '40-44','45-49', '50-54', '55-59', '60-64', '65-69', '70-74', '75-79', '80-84', '85-89', '90 +'],
                opposite: true,
                reversed: false,
                linkedTo: 0,
                lineWidth: 0,
                     minorGridLineWidth: 0,
                     lineColor: 'transparent',

                     labels: {
                         enabled: false
                     },
                     minorTickLength: 0,
                     tickLength: 0
            }];



    options.yAxis = {
                      title:  {text: ''},
                      gridZIndex:4,
                      gridLineColor:'#F9F9F9',
                      labels: {

                              formatter: function () {
                                  return (Math.abs(this.value) / 1000) + "k";
                              },
                              style : {
                                    font: 'normal 14px "Open Sans", sans-serif'
                                }

                      }
                  };

    options.series= [
                      { name: 'Male', data: [0] },
                      { name: 'Female', data: [0] },
                    ];
    options.plotOptions.series = {stacking: 'normal'};



    options.tooltip = {
      formatter: function() {
          return '<b>'+ this.series.name +', age '+ this.point.category +'</b><br/>'+
                    'Population: '+ Highcharts.numberFormat(Math.abs(this.point.y), 0);
      }
    }

    options.chart.renderTo = 'thumbPyramid';
    pyramidThumb = new Highcharts.Chart(options);

    options.chart.renderTo = 'pyramid1';
    pyramid1 = new Highcharts.Chart(options);
    options.chart.renderTo = 'pyramid2';
    pyramid2 = new Highcharts.Chart(options);
    options.chart.renderTo = 'pyramid3';
    pyramid3 = new Highcharts.Chart(options);


  }
