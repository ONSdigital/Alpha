

function populationPyramid(){

    var chart,
    categories = ['0-4', '5-9', '10-14', '15-19',
    '20-24', '25-29', '30-34', '35-39', '40-44',
    '45-49', '50-54', '55-59', '60-64', '65-69',
    '70-74', '75-79', '80-84', '85-89', '90 +'];


    $(document).ready(function() {

     pyramid =  $('#pyramid').highcharts({
           colors: [
            'rgb(255, 66, 14)',           // red
            'rgb(168, 189, 58)'         // green
            ],

            chart: {
                type: 'bar'
            },
            title: {
                text: 'Population pyramid'
            },
            subtitle: {
                text: ''
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
                       // return (Math.abs(this.value) / 1000000) + 'M';
                        return Math.abs(this.value);
                    }
                }
/*
                ,
                min: -22000,
                max: 22000
*/
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
                data: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
            }
            ,
            {
                name: 'Male',
                data: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
            }

            ]
        });

     pyramid2 =  $('#pyramid2').highcharts({
           colors: [
            'rgb(255, 66, 14)',           // red
            'rgb(168, 189, 58)'         // green
            ],

            chart: {
                type: 'bar'
            },
            title: {
                text: 'Population pyramid'
            },
            subtitle: {
                text: ''
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
                       // return (Math.abs(this.value) / 1000000) + 'M';
                        return Math.abs(this.value);
                    }
                }
/*
                ,
                min: -22000,
                max: 22000
*/
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
                data: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
            }
            ,
            {
                name: 'Male',
                data: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
            }

            ]
        });


    });


}