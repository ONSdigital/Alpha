

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