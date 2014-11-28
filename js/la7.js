var title = "Figure 3: Most reported countries1 of birth of non-UK born usual residents";
var subtitle = "England and Wales";
var units = "";
var yAxisTitle = "Thousands";

var data = [];
data[0] = [468,61,321,534,266,154,141,88,158,53];
data[1] = [722,654,503,468,300,214,203,201,197,170];


var seriesNames = [ '2001', '2011' ];

categories = ['India','Poland','Pakistan','Republic of Ireland','Germany','Bangladesh','South Africa','Nigeria','United States of America','China'];



var interval = 1;

/*
Figure 7: Tenure (Households),,,,,,,,,,,,,
,,,,,,,,,,,,,
,,,,,,,,,,,,,
,,Owned,,Shared ownership,Social rented,,Private rented,,,,,,
,All categories: Tenure,Owned outright,Owned with a mortgage or loan,Part owned and part rented,Rented from council (Local Authority) or equivalent1,Other,Private landlord or letting agency,Other,Living rent free,,,,
uk,,31,33,1,10,8,15,1,1,,,,
england,,31,33,1,9,8,15,1,1,,,,
wales,,35,32,0,10,7,13,1,2,,,,
scotland,,28,34,0,13,11,11,1,1,,,,
northern ireland,,32,35,1,12,3,14,2,3,,,,

*/
$(document).ready(function(){


  options.series = [
      {
        name: seriesNames[0],
        data: data[0],
        borderColor: options.colors[0]
      },
      {
        name: seriesNames[1],
        data: data[1],
        borderColor: options.colors[1]
      }
  ];

  
  initColumnChart();

});



