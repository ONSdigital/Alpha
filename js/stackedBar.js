
function stackedBar(){
$('#stackedBar').highcharts({
            chart: {
                type: 'column'
            },
            title: {
                text: 'Energy Consumption by Source, 1990 to 2010'
            },
            xAxis: {
                categories: [1990, '', '', '', '', 1995, '', '', '', '', 2000,  2001,  2002,  2003,  2004,  2005,  2006,  2007,  2008,  2009,  2010]
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Energy Consumption'
                },
                stackLabels: {
                    enabled: true,
                    style: {
                        fontWeight: 'bold',
                        color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray'
                    }
                }
            },
            legend: {
                align: 'right',
                x: -70,
                verticalAlign: 'top',
                y: 20,
                floating: true,
                backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || 'white',
                borderColor: '#CCC',
                borderWidth: 1,
                shadow: false
            },
            tooltip: {
                formatter: function() {
                    return '<b>'+ this.x +'</b><br/>'+
                        this.series.name +': '+ this.y +'<br/>'+
                        'Total: '+ this.point.stackTotal;
                }
            },
            plotOptions: {
                column: {
                    stacking: 'normal',
                    dataLabels: {
                        enabled: true,
                        color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white',
                        style: {
                            textShadow: '0 0 3px black, 0 0 3px black'
                        }
                    }
                }
            },
            series: [
            {
                name: 'Net imports',
                data: [1.0, '', '', '', '', 1.4, '', '', '', '', 1.2, 0.9, 0.7, 0.2, 0.6, 0.7, 0.6, 0.4, 0.9, 0.2, 0.2]
            }
            , 
            {
                name: 'Renewable sources',
                data: [1.3, '', '', '', '', 2.1, '', '', '', '', 2.7, 2.8, 3.0, 3.1, 3.6, 4.3, 4.6, 5.0, 6.0, 6.6, 7.1]
            }
            ,
            {
                name: 'Nuclear',
                data: [16.3, '', '', '', '', 21.3, '', '', '', '', 19.6, 20.8, 20.1, 20.0, 18.2, 18.4, 17.1, 14.0, 11.9, 15.2, 13.9]
            }
            , 
            {
                name: 'Fossil Fuels',
                data: [201.1, '', '', '', '', 199.7, '', '', '', '', 214.0, 219.1, 213.9, 218.1, 221.9, 221.6, 218.0, 215.6, 213.7, 195.2, 202.6]
            }

            ]
        });


}
