$(document).ready(

	function(){
		singleLine();
		initBar();
		initMulti();

		showHighcharts();

		populationPyramid();
	}

	);


function initBar(){

	    var chart,
        categories = [ 
		  "Food"
		, "Alcohol"
		, "Clothing"
		, "Housing"
		, "Furniture" 
		, "Health"
		, "Transport"
		, "Communication"
		, "Recreation"
		, "Education"
		, "Restaurant"
		, "Miscellaneous" 
		];


		$('#bar').highcharts({
            chart: {
                type: 'bar'
                ,width:800
            },
            title: {
                text: 'Figure B: Contribution to 12 months growth rate (0.5%), February 2014'
            },
            subtitle: {
                text: 'Source: Index Numbers of Producer Prices (PPI): Provision of Price Information'
            },
            xAxis: [{
                categories: categories,
                reversed: true,
                labels: {
                    step: 1
                }
            }],
            yAxis: {
                title: {
                    text: null
                },
                labels: {
                    /*formatter: function(){
                        return (Math.abs(this.value) / 1000000) + 'M';
                    }*/
                },
                min: -.4,
                max: .2
            },
    
            plotOptions: {
                series: {
                    stacking: 'normal'
                }
            },
    
            tooltip: {

                formatter: function(){

	              var up = ' <span class="fa-stack "> <i class="fa fa-circle fa-stack-2x up"></i> <i class="fa fa-chevron-up fa-stack-1x fa-inverse"></i> </span>';
	              var down = ' <span class="fa-stack "> <i class="fa fa-circle fa-stack-2x up"></i> <i class="fa fa-chevron-down fa-stack-1x fa-inverse"></i> </span>';


	              var swatch = 'Percentage contribution: '+ Highcharts.numberFormat(this.point.y, 2) +'%' +up;


	               var content = swatch +  this.series.name + ": " + this.point.y + ' ' + this.series.color;
	              content += '<br/><br/><b>'+ this.series.name +': '+ this.point.category +'</b><br/>';
	              content += '<hr><i class="fa fa-warning fa-inverse"></i> Important information available';
	              return content;

                }

            },

            legend:{
            	enabled:false
            },
    
            series: [{
                name: 'Contribution',
                data: [ 
						  0.08
						, -0.02
						, -0.05
						, -0.05
						, 0
						, 0.01
						, -0.29
						, 0
						, -0.05
						, 0
						, -0.06
						, 0
						 ]
            }],
            credits: {
			      enabled: false
			  },
    });
}



function initMulti(){
		var palette = new Rickshaw.Color.Palette();

		var graph1 = new Rickshaw.Graph( {
		        element: document.querySelector("#chart_multi"),
		        width: 640,
		        height: 380,
		        padding: {
		          top: 0.1
		          ,bottom:0.1
		        },
		        renderer: 'line',
		        series: 
		[
		{"name": "Total Production",
		"data": [ {x:1199059200,y:100},{x:1209510000,y:99.0036231884},{x:1217458800,y:97.4637681159},{x:1225411200,y:93.0253623188},{x:1230681600,y:88.4057971014},{x:1241046000,y:88.3152173913},{x:1248994800,y:87.5},{x:1256947200,y:88.134057971},{x:1262217600,y:89.2210144928},{x:1272582000,y:90.7608695652},{x:1280530800,y:90.8514492754},{x:1288479600,y:91.4855072464},{x:1293753600,y:90.4891304348},{x:1304118000,y:89.4927536232},{x:1312066800,y:89.2210144928},{x:1320019200,y:88.768115942},{x:1325289600,y:88.4057971014},{x:1335740400,y:87.5},{x:1343689200,y:87.6811594203},{x:1351641600,y:85.8695652174},{x:1356912000,y:86.231884058},{x:1367276400,y:86.865942029},{x:1375225200,y:87.4094202899},{x:1383177600,y:87.8623188406},{x:1388448000,y:88.4963768116}],
		                        color: palette.color()
		},

		{"name": "Mining & Quarrying",
		"data": [ {x:1199059200,y:100},{x:1209510000,y:99.9135695765},{x:1217458800,y:98.2713915298},{x:1225411200,y:94.0363007779},{x:1230681600,y:91.7891097666},{x:1241046000,y:91.3569576491},{x:1248994800,y:85.911840968},{x:1256947200,y:85.2203975799},{x:1262217600,y:87.8133102852},{x:1272582000,y:88.4183232498},{x:1280530800,y:86.2575626621},{x:1288479600,y:83.2324978392},{x:1293753600,y:78.4788245462},{x:1304118000,y:72.6879861711},{x:1312066800,y:71.823681936},{x:1320019200,y:71.477960242},{x:1325289600,y:70.0950734659},{x:1335740400,y:68.1936041487},{x:1343689200,y:68.1936041487},{x:1351641600,y:62.2299049265},{x:1356912000,y:64.9956784788},{x:1367276400,y:66.205704408},{x:1375225200,y:66.4649956785},{x:1383177600,y:65.3414001729},{x:1388448000,y:64.6499567848}],
		                        color: palette.color()
		},

		{"name": "Manufacturing",
		"data": [ {x:1199059200,y:100},{x:1209510000,y:98.5494106981},{x:1217458800,y:96.9174977335},{x:1225411200,y:92.1124206709},{x:1230681600,y:86.7633726201},{x:1241046000,y:86.8540344515},{x:1248994800,y:86.6727107888},{x:1256947200,y:87.7606527652},{x:1262217600,y:88.5766092475},{x:1272582000,y:90.3898458749},{x:1280530800,y:91.4777878513},{x:1288479600,y:92.2030825023},{x:1293753600,y:92.384406165},{x:1304118000,y:92.6563916591},{x:1312066800,y:92.2937443336},{x:1320019200,y:91.9310970082},{x:1325289600,y:91.8404351768},{x:1335740400,y:90.661831369},{x:1343689200,y:91.1151405258},{x:1351641600,y:89.3925657298},{x:1356912000,y:89.2112420671},{x:1367276400,y:89.8458748867},{x:1375225200,y:90.4805077063},{x:1383177600,y:91.1151405258},{x:1388448000,y:92.2937443336}],
		                        color: palette.color()
		},

		{"name": "Electrical,Gas ",
		"data": [ {x:1199059200,y:100},{x:1209510000,y:101.1764705882},{x:1217458800,y:98.2352941176},{x:1225411200,y:97.1568627451},{x:1230681600,y:94.6078431373},{x:1241046000,y:92.9411764706},{x:1248994800,y:95.0980392157},{x:1256947200,y:94.7058823529},{x:1262217600,y:99.0196078431},{x:1272582000,y:98.6274509804},{x:1280530800,y:94.3137254902},{x:1288479600,y:100.2941176471},{x:1293753600,y:94.6078431373},{x:1304118000,y:91.3725490196},{x:1312066800,y:93.7254901961},{x:1320019200,y:89.5098039216},{x:1325289600,y:89.0196078431},{x:1335740400,y:93.3333333333},{x:1343689200,y:91.2745098039},{x:1351641600,y:94.4117647059},{x:1356912000,y:95.5882352941},{x:1367276400,y:93.6274509804},{x:1375225200,y:88.137254902},{x:1383177600,y:89.7058823529},{x:1388448000,y:87.9411764706}],
		                        color: palette.color()
		},

		{"name": "Water supply & sewage",
		"data": [ {x:1199059200,y:100},{x:1209510000,y:99.0187332739},{x:1217458800,y:100.089206066},{x:1225411200,y:95.0044603033},{x:1230681600,y:90.2765388046},{x:1241046000,y:90.1873327386},{x:1248994800,y:90.9009812667},{x:1256947200,y:90.2765388046},{x:1262217600,y:87.9571810883},{x:1272582000,y:89.7413024086},{x:1280530800,y:89.5628902765},{x:1288479600,y:89.5628902765},{x:1293753600,y:92.506690455},{x:1304118000,y:92.952720785},{x:1312066800,y:91.9714540589},{x:1320019200,y:94.0231935772},{x:1325289600,y:93.131132917},{x:1335740400,y:91.7038358608},{x:1343689200,y:92.0606601249},{x:1351641600,y:92.506690455},{x:1356912000,y:91.9714540589},{x:1367276400,y:94.6476360393},{x:1375225200,y:99.3755575379},{x:1383177600,y:100.9812667261},{x:1388448000,y:102.1409455843}],
		                        color: palette.color()
		}
		]

		} );

		var x_axis = new Rickshaw.Graph.Axis.Time( { graph: graph1 } );

		var y_axis = new Rickshaw.Graph.Axis.Y( {
		        graph: graph1,
		        orientation: 'left',
		        tickFormat: Rickshaw.Fixtures.Number.formatKMBT,
		        element: document.getElementById('y_axis_multi'),
		} );



		var legend = new Rickshaw.Graph.Legend( {
		        element: document.querySelector('#legend_multi'),
		        graph: graph1
		} );

		graph1.render();

		}




function singleLine(){
    // crea te an array to store the last month values
    var lastMonth = [];
		var graph = new Rickshaw.Graph.Ajax( {

    dataURL: 'slice-data.json',

    onData: function(d) { 
      // when data loads loop through and store the last month property
      for ( item in d){
        //console.log(item +":" + d[item].lastMonth);
        if(d[item].lastMonth){
          lastMonth[item] = d[item].lastMonth;
        }
      };
      return d 
    },

    onComplete: function(transport) {

      var graph = transport.graph;    
      //once series has been created then pass in the last month property
      for ( item in lastMonth){
          this.graph.series[item].lastMonth = lastMonth[item];
      };


      var x_axis = new Rickshaw.Graph.Axis.Time( {
        graph: graph,
        orientation: 'bottom',
        element: document.getElementById('x_axis_single'),
      } );

      
      var y_axis = new Rickshaw.Graph.Axis.Y( {
              graph: graph,
              orientation: 'left',
              element: document.getElementById('y_axis_single'),
      } );
      
      var hoverDetail = new Rickshaw.Graph.HoverDetail( {
          graph: graph,
          xFormatter: function(x) { return moment.unix(x).format('MMM YYYY') },


            formatter: function(series, x, y) {
              var index;
              var lastMonth;
              var lastYear;


              for (i=0; i<18; i++){
                if(series.data[i].y===y){
                  index = i;
                }
              }

              if(index>0){
                lastMonth = series.data[index-1].y;
              }else{
                lastMonth = series.lastMonth;
              }
              lastYear = series.data[index].lastYear;

              var date = moment.unix(x).format('MMM YYYY');

              var up = ' <span class="fa-stack "> <i class="fa fa-circle fa-stack-2x up"></i> <i class="fa fa-chevron-up fa-stack-1x fa-inverse"></i> </span>';
              var down = ' <span class="fa-stack "> <i class="fa fa-circle fa-stack-2x up"></i> <i class="fa fa-chevron-down fa-stack-1x fa-inverse"></i> </span>';
              var flat = ' <span class="fa-stack "> <i class="fa fa-circle fa-stack-2x up"></i> <i class="fa fa-minus fa-stack-1x fa-inverse"></i> </span>';


              var monthIcon = up;
              var yearIcon = up;

              if( lastMonth > y ){
              	monthIcon = down;
              }
              if( lastMonth === y ){
              	monthIcon = flat;
              }
              if( lastYear > y ){
              	yearIcon = down;
              }
              if( lastYear === y ){
              	yearIcon = flat;
              }

              var date = '<span class="date">' + date + '</span>';
              var swatch = '<span class="detail_swatch" style="background-color: ' + series.color + '"></span>';
              var content = swatch + series.name + ": " + y + ' ' + date;
              content += '<br/><br/>last month: ' + lastMonth + monthIcon + ' | '  + 'last year: ' + lastYear + yearIcon + '<br/>';
              content += '<hr><i class="fa fa-warning fa-inverse"></i> Important information available';
              return content;
            }


      } );
      
      graph.render();
    },
    element: document.querySelector("#chart_single"), 
    renderer: 'line',
      //renderer: 'scatterplot',
    width: 600, 
    height: 350, 
      left:10,
    padding: {
      top: 0
      ,left:0.06
      ,right:0.06
    },
    series: [{
        name: 'Price Index',
        color: 'steelblue'
        }
    ,
    {
        name: 'Price Index Two',
        color: '#f00'
        }]
    } );

}




function showHighcharts(){

  Highcharts.setOptions({

    colors: [
            'rgb(0, 132, 209)',           // blue
            'rgb(255, 149, 14)',          // orange
            'rgb(255, 66, 14)',           // red
            'rgb(168, 189, 58)',          // green
            'rgb(144, 176, 201)',         // lt blue
            'rgb(255, 211, 32)',          // yellow
            //'rgb(65, 64, 66)',            // dk grey
            //'rgb(0, 61, 89)',             // dk grey
            // 'rgb(49, 64, 4)',            // dk grey
            //'rgb(204, 204, 204)'          // lt grey
            'rgb(128, 128 , 128)'           // mid grey
            ],

            chart: {
              style: {
                fontFamily: 'Open Sans',
                color:'#000'
              },
              spacingTop: 30,
              spacingLeft:30,
      backgroundColor:'#F9F9F9'


    },
    symbols: [
    'circle'
    ]
    ,
    plotOptions: {
      series: {
        animation: false
    },
      line: {
        marker: {
         radius: 4,
         fillColor: '#fff',
         lineColor: null,
         lineWidth: 2
       },
       shadow:true
       ,
       dataLabels: {
        enabled: false
      },
      enableMouseTracking: false
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
  }
});





$('#chart_prices').highcharts({
  chart: {
    type: 'line',
      events: {

            load: function () {
                var chart = this,
                    yAxis = chart.yAxis[0],                    
                    titleWidth = yAxis.axisTitle.getBBox().width;
                yAxis.update({
                    title: {
                        offset: -titleWidth
                    }
                });
            }

            
        }
  },
  title: {
    text: 'Prices Indices'
  },
  subtitle: {
    text: ''
  },
  xAxis: {
    categories: ['Feb 2013', '', '', '', '', '', 'Aug 2013', '', '', '', '', '', 'Feb 2014']
  },
  yAxis: {
    title: {
      text: 'Percentage change'
    }
    
  },
  plotOptions: {
    line: {
      dataLabels: {
        enabled: false
      },
      enableMouseTracking: false
    }
  },
  series: [{
      name: 'CPI % change',
      data: [1.7,1.9,2,2.1,2.2,2.7,2.7,2.8,2.9,2.7,2.4,2.8,2.8]
    }, {
      name: ' CPIH % change',
      data: [1.6,1.8,1.9,1.9,2,2.5,2.5,2.5,2.7,2.5,2.2,2.6,2.6]
   },{
      name:'RPIJ % change',
      data:[2,2.1,2,2,1.9,2.5,2.6,2.6,2.7,2.5,2.3,2.7,2.6]
    },{
      name:'RPI % change',
      data:[2.7,2.8,2.7,2.6,2.6,3.2,3.3,3.1,3.3,3.1,2.9,3.3,3.2]
    }
  ,
    {
      name: 'CPI',
      data: [127.4,126.7,127.5,127,126.9,126.8,126.4,125.8,125.9,126.1,125.9,125.6,125.2],
      visible:false
    }
      ,
    {
      name: 'CPIH',
      data: [125.2,124.7,125.3,124.8,124.8,124.7,124.3,123.8,123.8,124,123.8,123.6,123.2],
      visible:false
    }
      ,
    {
      name: 'RPIJ',
      data: [236.3,235.4,236.2,235.1,234.9,235,234.2,233.2,233.2,233.5,233.2,232.6,231.7],
      visible:false
    }
      ,
    {
      name: 'RPI',
      data: [254.2,252.6,253.4,252.1,251.9,251.9,251,249.7,249.7,250,249.5,248.7,247.6],
      visible:false
    }


    ]
  });


}

function populationPyramid(){

    var chart,
        categories = ['0-4', '5-9', '10-14', '15-19',
            '20-24', '25-29', '30-34', '35-39', '40-44',
            '45-49', '50-54', '55-59', '60-64', '65-69',
            '70-74', '75-79', '80-84', '85-89', '90 +'];
    $(document).ready(function() {
        $('#pyramid').highcharts({
             colors: [
            'rgb(255, 66, 14)',           // red
            'rgb(168, 189, 58)'         // green
             ],

            chart: {
                type: 'bar'
            },
            title: {
                text: 'Population pyramid for England, midyear 2012'
            },
            subtitle: {
                text: 'Source: www.ons.gov.uk'
            },
            xAxis: [{
                categories: categories,
                reversed: false,
                labels: {
                    step: 1
                }
            }, { // mirror axis on right side
                opposite: true,
                reversed: false,
                categories: categories,
                linkedTo: 0,
                labels: {
                    step: 1
                }
            }],
            yAxis: {
                title: {
                    text: null
                },
                labels: {
                    formatter: function(){
                        return (Math.abs(this.value) / 1000000) + 'M';
                    }
                },
                min: -2500000,
                max: 2500000
            },
    
            plotOptions: {
                series: {
                    stacking: 'normal'
                }
            },
    
            tooltip: {
                formatter: function(){
                    return '<b>'+ this.series.name +', age '+ this.point.category +'</b><br/>'+
                        'Population: '+ Highcharts.numberFormat(Math.abs(this.point.y), 0);
                }
            },
   
            series: [
            {
                name: 'Female',
                data: [-1951153,-1776769,-1745043,-1913324,-2140693,-2165760,-2130739,-2027676,-2313633,-2372899,-2137943,-1864375,-1848213,-1719021,-1305796,-1118131,-896135,-590364,-372291]
            }
            ,
            {
                name: 'Male',
                data: [2045247,1864230,1831322,2013226,2191539,2152085,2109169,2008678,2253651,2312799,2097878,1819823,1776207,1626032,1170152,928768,637528,335580,141158]
            }
             
            ]


        });
    });
    

}



