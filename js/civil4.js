var title = "Figure 4: Percentage of civil partners by age group and sex, 2012";
var subtitle = "England and Wales";
var units = "%  ";
var yAxisTitle = "";

var data = [];
data[0] = [7.7,16.5,17,13.9,13.6,11.5,7.5,4.8,3.4,4.1];
data[1] = [9.2,19.2,19.6,14.2,13.5,10.6,6.5,3.6,2,1.6];


categories = ['Under 25','25–29','30–34','35–39','40–44','45–49','50–54','55–59','60–64','65 and over'];

var interval = 1;

$(document).ready(function(){

  //populateCategories();

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



