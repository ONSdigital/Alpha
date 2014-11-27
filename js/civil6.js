var title = "Figure 6 Percentage of civil partnership dissolutions by age group and sex, 2012";
var subtitle = "England and Wales";
var units = "";
var yAxisTitle = "%";

var data = [];
data[0] = [2.4,16.8,22.3,16.4,17.3,11.1,5.2,2.8,2.1,2.1];
data[1] = [2.6,18.4,20.9,14.7,16.9,12.6,6.4,2.9,0.9,0.4];


categories = ['Under 25','25–29','30–34','35–39','40–44','45–49','50–54','55–59','60–64','65 and over'];






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



