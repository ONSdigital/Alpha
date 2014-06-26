
function barChart(){

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
        }
        ,
        min: -.4,
        max: .2
    },

    plotOptions: {
        series: {
            stacking: 'normal'
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
