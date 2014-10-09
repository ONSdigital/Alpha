
function initBarChart(){

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


 barChart = $('#bar').highcharts({
    chart: {
        type: 'bar'

    },
    title: {
        text: 'Figure B: Contribution to 12 months growth rate (0.5%), February 2014'
    },
    subtitle: {
        text: 'Source: Index Numbers of Producer Prices (PPI): Provision of Price Information'
    },
    xAxis: [{
      alternateGridColor: '#f1f1f1',
        categories: categories,
        reversed: true,
        labels: {
            /*
            formatter: function() {
              console.log(this);
                  if (this.value === null) {
                    return '<span style="fill: #ddd;">' + this.value + '</span>';
                  } else {
                     return this.value;
                  }
              }
              */
        }      

    }],
    yAxis: {
        title: {
            text: null
        },
        labels: {
          format : '{value} %'
        }
        ,
        min: -.4,
        max: .2
    },
    tooltip: {
            /*crosshairs: true*/
        },

    plotOptions: {
        series: {
               
        },
        bar: {
          dataLabels: {
              enabled: true,
              formatter: function() {
                  if (this.y===null) {
                      return '<i>N/A</i>';
                  } else {
                      return '';
                  }
              }
          }
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
    , null
    , 0.01
    , -0.29
    , null
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
