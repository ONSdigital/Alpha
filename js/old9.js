var title = "Figure 9: Centenarians per 100,000 of the population, by country, 2012";
var subtitle = "";
var units = "";
var yAxisTitle = "";

var data = [];
data[0] = [40,30,25,23,21,21,19,17,16,16,15,14,13,11,6,5,4,3,1];

categories = ['Japan','France','Italy','Spain (2011)','United Kingdom','Sweden','United States','Denmark','Germany (2010)','Norway','Australia','Iceland','Finland','Slovenia','Czech Republic','Bulgaria','Russia (2010)','India (2010)','China (2010)'];

var interval = 1;




$(document).ready(function(){



  options.series = [
      {
        name: 'Centenarians ',
        data: data[0]
      }
  ];

  
  initBarChart();

});



