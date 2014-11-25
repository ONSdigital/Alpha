var title = "Figure 2: Alcohol-related age-specific death rates per 100,000 population by five year age group, United Kingdom, 2012";
var subtitle = "";
var units = "";
var yAxisTitle = "Age-standardised rates per 100,000 population";

var data = [];
data[0] = [0.3,2.3,5.9,12.5,21.7,30.1,34.7,42.0,42.6,40.3,31.8,33.2,27.9,19.7];
data[1] = [0.3,1.0,3.3,4.8,10.4,15.5,18.1,22.2,19.3,19.3,16.6,15.6,12.5,10.3];


categories = ['20-24','25-29','30-34','35-39','40-44','45-49','50-54','55-59','60-64','65-69','70-74','75-79','80-84','85+'];


/*
//set mon to -1 to ignore
var startMon = -1; // keep this as base 1 to match years eg Sept is month 9
//interval to skip in the xAxis category
var interval = 5;
var year = 1920;


*/

$(document).ready(function(){



  options.series = [
      {
        name: 'Male',
        data: data[0]
      },
      {
        name: 'Female',
        data: data[1]
      }
     
  ];

  
  initColumnChart();

});



