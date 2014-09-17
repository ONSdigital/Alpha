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





    // employment
    options.chart.renderTo = 'employment';
    options.chart.type = 'bar';
    options.title.text = 'Employment';
    options.yAxis.title.text = null;
    options.legend.enabled = false;
     options.plotOptions = {
            series: {
                dataLabels: {
                    enabled: true,
                    align: 'right',
                    color: '#FFFFFF',
                    x: -10,
                    formatter: function() {
                      return this.series.name;
                    }
                },
                pointPadding: 0.1,
                groupPadding: 0
            }
        };

    options.series= [
                        { name:"", data: [0] },
                        { name:"", data: [0] },
                        { name:"United Kingdom", data: [0] }
                      ];
    options.tooltip = {
      formatter: function() {
        console.log(this);
          return '<b>'+ this.series.name +', '+ this.point.category +'</b><br/>'+
                    'Employment Rate: '+ Highcharts.numberFormat( this.point.y,1) + '%';
      }
    }
    chartEmploy = new Highcharts.Chart(options);



    // unemployment
    options.chart.renderTo = 'unemployment';
    options.chart.type = 'bar';
    options.title.text = 'Unemployment';
    options.series= [
                      { name:"", data: [0] },
                      { name:"", data: [0] },
                      { name:"United Kingdom", data: [0] }
                    ];
    options.tooltip = {
      formatter: function() {
        console.log(this);
          return '<b>'+ this.series.name +', '+ this.point.category +'</b><br/>'+
                    'Unemployment Rate: '+ Highcharts.numberFormat( this.point.y,1) + '%';
      }
    }
    chartUnemploy = new Highcharts.Chart(options);




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
    options.tooltip = {
      formatter: function() {
          return '<b>'+ this.series.name +', '+ this.point.category +'</b><br/>'+
                    'Annual Change: '+ Highcharts.numberFormat( this.point.y ,0);
      }
    }
    changeThumb = new Highcharts.Chart(options);




    //LIFE EXPECTANCY
    options.chart.renderTo = 'thumbLife';
    options.chart.type = 'column';
   // options.title.text = null;
    options.title.text = "";
    options.yAxis.title = {
                              align: 'high',
                              offset: 50,
                              text: ''

                          };
    options.xAxis = {
                     labels: {
                         enabled: false
                     }
                  };
/*    options.chart.events= {

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
*/
    options.legend.enabled = false;
    options.plotOptions.series = {};
    options.colors =  [
            'rgb(0, 132, 209)',           // blue
            'rgb(0, 132, 209)',           // blue
            'rgb(0, 132, 209)',           // blue
            'rgb(255, 149, 14)',          // orange
            'rgb(255, 149, 14)',          // orange
            'rgb(255, 149, 14)'          // orange

            ];
/*    options.series= [
                        { name: 'Migration', data: [0] },
                        { name: 'UK', data: [0] },
                        { name: 'Natural', data: [0] }
                      ];
*/
  options.series = [
                    {
                        name: 'Males 1993-1994',
                        data: [7]
                    }
                    ,{
                        name: 'Males 2000-2002',
                        data: [12]
                    }
                    ,{
                        name: 'Males 2010-2012',
                        data: [16]
                    }
                    ,{
                        name: 'Females 1993-1994',
                        data: [9]
                    }
                    ,{
                        name: 'Females 2000-2002',
                        data: [16]
                    }
                    ,{
                        name: 'Females 2010-2012',
                        data: [32]
                    }



                    ];





    options.tooltip = {
      formatter: function() {
          return '<b>'+ this.series.name +', '+ this.point.category +'</b><br/>'+
                    'Annual Change: '+ Highcharts.numberFormat( this.point.y ,0);
      }
    }
    lifeThumb = new Highcharts.Chart(options);


    // GENDER
    options.chart.renderTo = 'thumbGender';
    options.chart.plotBackgroundColor = "#fff";
    options.chart.margin = 0;
    options.chart.spacing =[10, 10, 15, 10]
    options.title.text = '';
    options.colors = [
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
    options.plotOptions.series = {
      pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    connectorWidth: 0,
                    //format: '<b>{point.name}</b>: {point.percentage:.1f} %'
                    format: '<b>{point.name}</b>: {point.value} %'
                }
            }
             };

    options.series= [
                      {
                        type: 'pie',
                        data: [
                                ["Male", 50],
                                ["Female", 50]
                              ]
                      }
                    ];
    options.tooltip = {
      formatter: function() {
        console.log(this)
          return this.key + ' <b>' + Math.abs(this.y) + '%</b>';
      }
    }
    genderThumb = new Highcharts.Chart(options);





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
