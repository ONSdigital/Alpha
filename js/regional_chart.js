var regional_chart = (function() {
	

/*

    function showComparison(area){
      console.log("showComparison " + area );
      console.log( regions[area] );
      console.log("show parent " + regions[area].parent );

      var displayText = "";
      var selected = "";
      var localComparisons = [];
      totalCats = [];
      totalData = [];
      comparisonLookUp = [];

      switch (area){
        case REGION:
          selected = selectedRegion;
   console.log(regions);
        //loop thru all the compariosn data
          $.each(comparisons, function (index,value){
            // and check each one to see it is one of the regions
            $.each(regions, function (regionIdx, regionVal){

              if(regionVal.code === value.code){

                //console.log("match " + regionVal.code +",  "+ value.code);
                totalCats.push( value.name );
                totalData.push( value.value );
               // console.log("REGION set look up " + value.name + ": " + totalData.length);
                comparisonLookUp[value.name] = totalData.length-1;
                comparisons.push( {name:index, value: value.population} );
              }
            });

          })
          displayText = "Population Comparison: Regions";

        break;

        case COUNTY:
        selected = selectedCounty;
          counties = regions[selectedRegion].county;

        //loop thru all the compariosn data
          $.each(comparisons, function (index,value){
            // and check each one to see it is one of the regions
            $.each(counties, function (idx, val){
              if(val.code === value.code){
                totalCats.push( value.name );
                totalData.push( value.value );
               // console.log("COUNTY set look up " + value.name + ": " + totalData.length);
                comparisonLookUp[value.name] = totalData.length-1;
                comparisons.push( {name:index, value: value.population} );
              }
            });

          })
           displayText = "Population Comparison: Counties & Unitary Authorities";
        break;

        case DISTRICT:
        selected = selectedDistrict;
          districts = regions[selectedRegion].district[selectedCounty];
         // console.log(districts);
        //loop thru all the compariosn data
          $.each(comparisons, function (index,value){
           // console.log(  value );
            // and check each one to see it is one of the regions
            $.each(districts, function (idx, val){
              if(val.code === value.code){
                //console.log("got match " + value);
                totalCats.push( value.name );
                totalData.push( value.value );
                //console.log("DISTRICT set look up " + value.name + ": " + totalData.length);
                comparisonLookUp[value.name] = totalData.length-1;
                comparisons.push( {name:index, value: value.population} );
              }
            });

          })
         displayText = "Population Comparison: Districts";
        break;
      }
      //console.log(displayText);
      $("#popComparison").text( displayText );
      // sort comparison by size
      comparisons.sort(compare);

      barChart = $('#stackedBar').highcharts();
      barChart.series[0].setData( totalData );
      barChart.xAxis[0].setCategories(totalCats);


      //reset last bar to blue
      //barChart.series[0].data[lastBar].update( {color:'#0084D1'} );

      lastBar = comparisonLookUp[selected];

      console.log("last BAR" + lastBar + " for " + selected);

      //barChart.series[0].data.update( {color:'#0084D1'} );
      if(lastBar){
        var highlight = barChart.series[0].data[ lastBar ];
        barChart.series[0].data[lastBar].update( {color:'#FF950E'} );
      }

    }


*/
    
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
                     /* formatter: function() {
                          return '<b>'+ this.point.name +'</b>: '+ this.y +' (' + 20 + '%)';
                      }*/

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