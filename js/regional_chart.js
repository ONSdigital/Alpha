var regional_chart = (function() {

  function initGenderChart(){
    // Create the chart
    genderChart = new Highcharts.Chart({
      chart: {
        renderTo: 'genderChart',
        type: 'pie',
        spacingTop:0,
        marginTop:0,
        marginBottom:30
      },
      title: {
        floating: true,
        text: ''
      },
      yAxis: {
        title: {
          text: ''
        }
      },
      plotOptions: {
        pie: {
          shadow: false
        }
      },
      tooltip: {
          pointFormat: '<b>{point.y}</b> ({point.percentage:.1f}%)'
        },
        series: [{
          name: 'Gender',
          data: [],
          size: '90%',
          innerSize: '55%',
          showInLegend:true,
          dataLabels: {
            enabled: false
          }
        }]
      });
  }

  function initAgeChart(){
    // Create the chart
    ageChart = new Highcharts.Chart({
      chart: {
        renderTo: 'ageChart',
        type: 'pie',
        spacingTop:0,
        marginTop:0,
        marginBottom:30
      },
      title: {
        text: ''
      },
      yAxis: {
        title: {
          text: ''
        }
      },
      plotOptions: {
        pie: {
          shadow: false
        }
      },
      tooltip: {
        formatter: function() {
          return '<b>'+ this.point.name +'</b>: '+ this.y ;
        }
      },
      series: [{
        name: 'Age Groups',
        data: [],
        size: '90%',
        innerSize: '55%',
        showInLegend:true,
        dataLabels: {
          enabled: false
        }
      }]
    });
  }


  return{
    initGenderChart:initGenderChart,
    initAgeChart:initAgeChart
  }

})();