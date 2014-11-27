var title = "Figure 5: Method of travel to work";
var subtitle = "England and Wales, 2011";
var units = "";
var yAxisTitle = "%";

var data = [];
data[0] = [0.5,0.6,0.8,2.9,3.9,5.1,5.2,5.4,7.3,10.7,57.5];


categories = ['Taxi','Other method of travel to work',"Motorcycle, scooter or moped",'Bicycle',"Underground, metro, light rail, tram",'Passenger in a car or van','Train','Work mainly at or from home',"Bus, minibus or coach",'On foot','Driving a car or van'];

var interval = 1;




$(document).ready(function(){

  options.series = [
      {
        name: '',
        data: data[0]
      }
  ];

  
  initBarChart();

});



