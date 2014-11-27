var title = "Figure 5: Alcohol-related death rates per 100,000 population, males and females, regions of England, 2012";
var subtitle = "";
var units = "";
var yAxisTitle = "Age-standardised rates per 100,000 population";

var data = [];
data[0] = [17.6,20.7,15.7,14.3,16.5,10.2,13.9,12.1,14.1];

data[1] = [
            [15.4,19.7],
            [19.3,22.2],
            [14.3,17.2],
            [12.8,15.8],
            [15.1,18.0],
            [9.1,11.2],
            [12.7,15.1],
            [11.1,13.1],
            [12.8,15.5]
          ];
data[2] = [9.8,11.8,7.6,6.9,8.4,5.7,5.5,6,6];

data[3] = [
            [8.2,11.3],
            [10.7,12.8],
            [6.6,8.6],
            [5.9,7.9],
            [7.4,9.4],
            [4.9,6.5],
            [4.8,6.3],
            [5.3,6.6],
            [5.1,6.8]
          ];


/*
,Lower 95% Confidence Interval,,,,,,,,,,,,,
,Upper 95% Confidence Interval,,,,,,,,,,,,,
*/

categories = ['North East','North West','Yorkshire and the Humber','East Midlands','West Midlands','East of England','London','South East','South West'];

var interval = 1;
/*
//set mon to -1 to ignore
var startMon = -1; // keep this as base 1 to match years eg Sept is month 9
//interval to skip in the xAxis category
var interval = 5;
var year = 1920;


*/

$(document).ready(function(){

  options.xAxis.labels = {
    rotation:-45
  };

  options.series = [
      {
        name: 'Male',
        data: data[0]
      },
      {
        name: 'Confidence interval',
        type: 'errorbar',
        data: data[1]
      },
      {
        name: 'Female',
        data: data[2]
      },
      {
        name: 'Confidence interval',
        type: 'errorbar',
        data: data[3]
      }
     
  ];

  
  initColumnChart();

});



