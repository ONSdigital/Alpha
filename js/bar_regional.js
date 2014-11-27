
function stackedBar(){

    
$('#stackedBar').highcharts({
            chart: {
                type: 'bar'
            },
            title: {
                text: 'Area population'
            },
            xAxis: {
                categories: [1990, '', '', '', '', 1995, '', '', '', '', 2000,  2001,  2002,  2003,  2004,  2005,  2006,  2007,  2008,  2009,  2010]
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
            legend: {
                enabled: false
            },
            tooltip: {
                formatter: function() {
                    return '<b>'+ this.x +'</b><br/>'+
                        this.series.name +': '+ this.y +'<br/>';
                        //'Total: '+ this.point.stackTotal;
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
                name: 'Population',
                data: [1.0, '', '', '', '', 1.4, '', '', '', '', 1.2, 0.9, 0.7, 0.2, 0.6, 0.7, 0.6, 0.4, 0.9, 0.2, 0.2]
            }


            ]
        });


$('#stackedBar2').highcharts({
            chart: {
                type: 'bar'
            },
            title: {
                text: 'Area population'
            },
            xAxis: {
                categories: [1990, '', '', '', '', 1995, '', '', '', '', 2000,  2001,  2002,  2003,  2004,  2005,  2006,  2007,  2008,  2009,  2010]
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
            legend: {
                enabled: false
            },
            tooltip: {
                formatter: function() {
                    return '<b>'+ this.x +'</b><br/>'+
                        this.series.name +': '+ this.y +'<br/>';
                        //'Total: '+ this.point.stackTotal;
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
                name: 'Population',
                data: [1.0, '', '', '', '', 1.4, '', '', '', '', 1.2, 0.9, 0.7, 0.2, 0.6, 0.7, 0.6, 0.4, 0.9, 0.2, 0.2]
            }


            ]
        });


}

