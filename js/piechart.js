function pieChart(){
        $('#piechart').highcharts({
            chart: {
                type: 'bar'
            },
            title: {
                text: 'Percentage Land Use 2008'
            },
            xAxis: {
                categories: ['Grasses and rough grazing', 'Crops and bare fallow', 'Urban land', 'Forest & woodland', 'Inland water', 'Other agricultural land']
            },
            yAxis: {
                min: 0,
                title: {
                    text: ''
                }
            },
            legend: {
                reversed: true
            },
            plotOptions: {
                series: {
                    stacking: 'normal'
                }
            },
                series: [{
                name: 'Land Use',
                data: [52, 20, 14, 12, 1, 1]
            }
            ]
        });

}