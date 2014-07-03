
function initTrend(){
$('#trend').highcharts({
            chart: {
                type: 'column'
            },
            title: {
                text: 'Area population trend since 2000'
            },
            xAxis: {
                categories: [2001,  2002,  2003,  2004,  2005,  2006,  2007,  2008,  2009,  2010, 2011, 2012, 2013]
            },
            yAxis: {
                min: 0,
                title: {
                    text: ''
                },
                stackLabels: {
                    enabled: false
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
                        enabled: false
                    }
                }
            },
            series: [
            {
                name: 'Population',
                data: [2001,  2002,  2003,  2004,  2005,  2006,  2007,  2008,  2009,  2010, 2011, 2012, 2013]
            }


            ]
        });


}

