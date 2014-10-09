



function multiseriesTooltip(){

  $('#chart_prices').highcharts({
    chart: {
      type: 'line'
    }

    ,
   /* colors: ['#0084d1', '#16a9ff', '#5ac2ff', '#9edbff'],*/

    title: {
      text: 'Prices Indices'
    },
    subtitle: {
      text: ''
    },
    xAxis: {
      categories: ['Feb 2013', 'Mar 2013', 'Apr 2013', 'May 2013', 'Jun 2103', 'Jul 2013', 'Aug 2013', 'Sept 2013', 'Oct 2013', 'Nov 2013', 'Dec 2013', 'Jan 2014', 'Feb 2014']
      ,
      labels:{
        formatter: function() {
          var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
          var response = "";
          if(w<768){
            if(this.isFirst){
              count=0;
            }
            if(count%3===0){
              response = this.value;
            }
            count++;
          }else{
            response = this.value;
          }
            return response
        },
      }
    },
    yAxis: {
      title: {
        text: 'Percentage change'
      }
    },
    tooltip: {
      shared: true,
      crosshairs: true,
      positioner: function () {
        var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
        var points = { x: 80, y: 50 };

        if(w>768){
          points = { x: 80, y: 50 };
        }

                return points;
            }
      ,

     // backgroundColor: '#333',
      borderWidth: 0,
      shadow: false,
      useHTML: true,
      style: {
        padding: 10,
       // color: '#eee'
        color: '#333'
      }
/*
      ,
      formatter: function(){

        var monthIcon = "";
        var x = this.point.x;
        var lastY;
        var change ="";
        console.log(this.point.series.data[x-1].y);


        var block = "<div class='sidebar ' style='background-color: " + this.series.color + "'></div>";
        var title = '<b>'+ this.series.name +': </b>' + monthIcon + '<br/>';
        var content = block + title ;
        content += '<br/>This month: ' + Highcharts.numberFormat(this.point.y, 2) +'%<br/>' ;
        if(monthIcon!==""){
          content += 'Last month: '+ Highcharts.numberFormat(lastY, 2) +'%' ;
        }else{
          content += "&nbsp;";
        }
        content += '<hr><i class="fa fa-warning fa-inverse"></i> Important information available';
        return content;
      }
*/
    }
    ,



/*

    Solid
    ShortDash
    ShortDot
    ShortDashDot
    ShortDashDotDot
    Dot
    Dash
    LongDash
    DashDot
    LongDashDot
    LongDashDotDot

*/

    series: [{
      name: 'CPI % change',
      data: [1.7,1.9,2,2.1,2.2,2.7,2.7,2.8,2.9,2.7,2.4,2.8,2.8],
      marker:{
        symbol:"circle"
      },
      dashStyle: 'shortdot'
    }, {
      name: ' CPIH % change',
      data: [1.6,1.8,1.9,1.9,2,2.5,2.5,2.5,2.7,2.5,2.2,2.6,2.6],
      marker:{
        symbol:"square"
      },
      dashStyle: 'longdash'
    },{
      name:'RPIJ % change',
      data:[2,2.1,2,2,1.9,2.5,2.6,2.6,2.7,2.5,2.3,2.7,2.6],
      marker:{
        symbol:"diamond"
      },
      dashStyle: 'Solid'
    },{
      name:'RPI % change',
      data:[2.7,2.8,2.7,2.6,2.6,3.2,3.3,3.1,3.3,3.1,2.9,3.3,3.2],
      marker:{
        symbol:"triangle"
      },
      dashStyle: 'Dot'
    }
    ,
    {
      name: 'CPI',
      data: [127.4,126.7,127.5,127,126.9,126.8,126.4,125.8,125.9,126.1,125.9,125.6,125.2],
      visible:false,
      marker:{
        symbol:"circle"
      }
    }
    ,
    {
      name: 'CPIH',
      data: [125.2,124.7,125.3,124.8,124.8,124.7,124.3,123.8,123.8,124,123.8,123.6,123.2],
      visible:false,
      marker:{
        symbol:"square"
      }
    }
    ,
    {
      name: 'RPIJ',
      data: [236.3,235.4,236.2,235.1,234.9,235,234.2,233.2,233.2,233.5,233.2,232.6,231.7],
      visible:false,
      marker:{
        symbol:"diamond"
      }
    }
    ,
    {
      name: 'RPI',
      data: [254.2,252.6,253.4,252.1,251.9,251.9,251,249.7,249.7,250,249.5,248.7,247.6],
      visible:false,
      marker:{
        symbol:"triangle"
      }
    }


    ]
  });


}