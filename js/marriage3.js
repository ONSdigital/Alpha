var title = "Figure 3: Age at marriage for men and women, 2012 (provisional)";
var subtitle = "";
var units = "Thousands";
var yAxisTitle = "Thousands";

var data = [];
data[0] = [770,19930,65960,62630,36140,25200,18650,12840,8150,5640,3520,1490,780,500];
data[1] = [3020,34620,79000,57110,28680,20640,16000,10450,5890,3450,1990,870,350,150];

categories = ['Under 20','20-24','25-29','30-34','35-39','40-44','45-49','50-54','55-59','60-64','65-69','70-74','75-79','80 and over'];


//set mon to -1 to ignore
var startMon = -1; // keep this as base 1 to match years eg Sept is month 9
//interval to skip in the xAxis category
var interval = 10;
var year = 1932;




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
/*
      ,
      {
        name: 'Persons',
        data: data[2]
      }
      */
  ];

  
  initColumnChart();

});



