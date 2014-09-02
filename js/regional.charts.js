var pyr = [];

var options = {

    chart: {
      type: 'bar'
    },
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
                  console.log("on load");
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





    //ANNUAL CHANGE
    options.chart.renderTo = 'changeAnnual';
    options.chart.type = 'bar';
    options.title.text = 'Annual Change';
    options.yAxis.title.text = null;
    options.series= [
                        { name: 'Migration', data: [0] },
                        { name: 'UK', data: [0] },
                        { name: 'Natural', data: [0] }
                      ];
    chartAnnual = new Highcharts.Chart(options);



    // AGE GROUPS
    options.chart.renderTo = 'changeAge';
    options.chart.type = 'bar';
    options.title.text = 'Age Groups';
    options.plotOptions.series = { stacking: 'normal' };
    options.series= [
                      { name: 'over 64', data: [0] },
                      { name: 'Adult', data: [0] },
                      { name: 'Under 18', data: [0] }
                    ];
    chartAge = new Highcharts.Chart(options);



    // TREND
    options.chart.renderTo = 'trend';
    options.chart.type = 'line';
    options.title.text = 'Population Trend';
    options.xAxis = [{
                categories : ['2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013'],
                reversed: false
            }];
    options.plotOptions.series = {  };
    options.series= [
                      { data: [0] },
                      { data: [0] },
                      { data: [0] },
                      { data: [0] },
                      { data: [0] },
                      { data: [0] },
                      { data: [0] },
                      { data: [0] },
                      { data: [0] },
                      { data: [0] }
                    ];

    chartTrend = new Highcharts.Chart(options);



    //POPULATION PYRAMIDS
    options.chart.renderTo = 'pyr1';
    options.chart.type = 'bar';

    options.title.text = 'Population pyramid, midyear 2012';
    options.plotOptions.series = {  };
    options.xAxis = [{
                categories : [ '0-4', '5-9', '10-14', '15-19', '20-24', '25-29', '30-34', '35-39', '40-44','45-49', '50-54', '55-59', '60-64', '65-69', '70-74', '75-79', '80-84', '85-89', '90 +'],
                reversed: false,
                labels: {
                    step: 1
                }
            }, { // mirror axis on right side
              categories : [ '0-4', '5-9', '10-14', '15-19', '20-24', '25-29', '30-34', '35-39', '40-44','45-49', '50-54', '55-59', '60-64', '65-69', '70-74', '75-79', '80-84', '85-89', '90 +'],
                opposite: true,
                reversed: false,
                linkedTo: 0,
                labels: {
                    step: 1
                }
            }];
    options.series= [
                      { name: 'Male', data: [0] },
                      { name: 'Female', data: [0] },
                    ];
    options.plotOptions.series = {
                    stacking: 'normal'
                }
    options.colors = [
            'rgb(255, 66, 14)',           // red
            'rgb(168, 189, 58)'         // green
            ];

    options.yAxis.labels = {
                    formatter: function(){
                       // return (Math.abs(this.value) / 1000000) + 'M';
                        return Math.abs(this.value);
                    }
                };

    pyr[0] = new Highcharts.Chart(options);
    options.chart.renderTo = 'pyr2';
    pyr[1]= new Highcharts.Chart(options);
    options.chart.renderTo = 'pyr3';
    pyr[2]= new Highcharts.Chart(options);
    options.chart.renderTo = 'pyr4';
    pyr[3] = new Highcharts.Chart(options);





    //thumbs

    //ANNUAL CHANGE
    options.chart.renderTo = 'thumbChange';
    options.chart.type = 'bar';
   // options.title.text = null;
    options.title.text = "";
    options.yAxis.title = {
                              align: 'high',
                              offset: 50,
                              text: 'Change'
                             
                          };
    options.xAxis = {
                     labels: {
                         enabled: false
                     }
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

    options.legend.enabled = false;
    options.plotOptions.series = {};
    options.colors =  [
            'rgb(0, 132, 209)',           // blue
            'rgb(255, 149, 14)',          // orange
            'rgb(255, 66, 14)',           // red
            'rgb(168, 189, 58)'         // green
            ];
    options.series= [
                        { name: 'Migration', data: [0] },
                        { name: 'UK', data: [0] },
                        { name: 'Natural', data: [0] }
                      ];
    changeThumb = new Highcharts.Chart(options);



    // TREND
    options.chart.renderTo = 'thumbTrend';
    options.chart.type = 'line';
    options.title.text = '';
    options.chart.events= {

                load: function () {
                  console.log("XXX load");

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

                
              };
    options.xAxis = {
                      categories : ['2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013'],
                     lineWidth: 0,
                     minorGridLineWidth: 0,
                     lineColor: 'transparent',
                     
                     labels: {
                         enabled: false
                     },
                     minorTickLength: 0,
                     tickLength: 0
                  };

    options.yAxis = {
                     lineWidth: 0,
                     minorGridLineWidth: 0,
                     lineColor: 'transparent',
                     
                     labels: {
                         enabled: false
                     },
                     title: {
                              align: 'high',
                              offset: 0,
                              text: 'Trend since 2001',
                              rotation: 0,
                              y: -10
                          }
                  };

 /*   options.yAxis = {
                     lineWidth: 0,
                     minorGridLineWidth: 0,
                     lineColor: 'transparent',
                     
                     labels: {
                         enabled: false
                     },
                     minorTickLength: 0,
                     tickLength: 0
                  };*/
    options.title.text = null;

    options.plotOptions.series = {  };
    options.plotOptions.line.marker.enabled = false;
    options.series= [
                      { data: [0] }
                    ];
    options.tooltip = {
      formatter: function() {
          return 'Population <b>' + Math.abs(this.y) + '</b>, ('+ this.x +')';
      }
    }
    trendThumb = new Highcharts.Chart(options);



    //POPULATION PYRAMID
    options.chart.renderTo = 'thumbPyramid';
    options.chart.type = 'bar';

    options.title.text = null;
    options.plotOptions.series = {  };
    //options.xAxis.enabled = false;

    options.xAxis = [{
                categories : [ '0-4', '5-9', '10-14', '15-19', '20-24', '25-29', '30-34', '35-39', '40-44','45-49', '50-54', '55-59', '60-64', '65-69', '70-74', '75-79', '80-84', '85-89', '90 +'],
                reversed: false,
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
    options.yAxis.title = {
                              text: ''
                          };
    options.series= [
                      { name: 'Male', data: [0] },
                      { name: 'Female', data: [0] },
                    ];
    options.plotOptions.series = {stacking: 'normal'};
    options.colors = [
            'rgb(255, 66, 14)',           // red
            'rgb(168, 189, 58)'         // green
            ];


    options.yAxis.labels = {
                    formatter: function(){
                        return Math.abs(this.value);
                    }
                };
    options.tooltip = {
      formatter: function() {
          return '<b>'+ this.series.name +', age '+ this.point.category +'</b><br/>'+
                    'Population: '+ Highcharts.numberFormat(Math.abs(this.point.y), 0);
      }
    }


   pyramidThumb = new Highcharts.Chart(options);

  }
