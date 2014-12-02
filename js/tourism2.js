var title = "Overseas Residents Visits To The UK And UK Residents Visits Abroad (Seasonally Adjusted)";
var units = "£ M";
var yAxisTitle = "£ Millions";

var data = [];
data[0] = [1613,1476,1460,1800,1716,1391,1534,1603,1620,1576,1662,1784,1714,1726,1901,1755,1859,1753,1697,1792,1771,2041,1711,1526,1642];
data[1] = [2735,2818,2711,2678,2742,2663,2619,2555,2772,2691,2717,2906,3043,2772,2881,2974,2839,2813,2849,2706,2546,2568,2404,2323,2414];



//set mon to -1 to ignore
var startMon = 5; // keep this as base 1 to match years eg Sept is month 9
//interval to skip in the xAxis category
var interval = 3;
var year = 2012;



$(document).ready(function(){

  populateCategories();

  options.yAxis.min = 0;

  options.series = [
    {
      name: 'Spending by overseas residents',
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
        name: 'Spending by UK residents',
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
        dashStyle: 'shortdash'
      }
  ];

  
  initLineChart();

  chart.options.tooltip.formatter= function(){
      var id = '<div id="custom-tooltip" class="tooltip-left tooltip-right">';
      var block = id + "<div class='sidebar' >";
      var title = '<b class="title">'+ this.x +' </b><br/>';
      var symbol = ['<div class="circle">●</div>','<div class="square">■</div>','<div class="diamond">♦</div>','<div class="triangle">▲</div>','<div class="downtriangle">▼</div>','<div class="circle">●</div>','<div class="square">■</div>','<div class="diamond">♦</div>','<div class="triangle">▲</div>','<div class="triangle">▼</div>'];

      var content = block + "<div class='title'>&nbsp;</div>" ;

      // symbols
      $.each(this.points, function(i, val){
        content +=  symbol[i] +'<br/>';
      })

      content+= "</div>";
      content+= "<div class='mainText'>";
      content+= title;


      // series names and values
      $.each(this.points, function(i, val){
        content += '<div class="tiptext"><b>' + val.point.series.chart.series[i].name + " </b><br/>" + val.y + ' ' + units + '</div>' ;
      })
      content+= "</div>";
      return content;
    }

});



