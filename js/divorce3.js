var title = "Figure 3: Number of divorces by age at divorce, 2012";
var subtitle = "";
var units = "";
var yAxisTitle = "Number";

var data = [];
data[0] = [2,835,6364,14835,18804,22568,21114,15022,8893,9703];
data[1] = [25,2207,10982,18041,19840,22506,19502,12546,6465,6026];

categories = ['Under 20','20–24','25–29','30–34','35–39','40–44','45–49','50–54','55–59','60 and over'];


//set mon to -1 to ignore
var startMon = -1; // keep this as base 1 to match years eg Sept is month 9
//interval to skip in the xAxis category
var interval = 5;
var year = 1920;




$(document).ready(function(){



  options.series = [
      {
        name: 'Husband',
        data: data[0]
      },
      {
        name: 'Wife',
        data: data[1]
      }
     
  ];

  
  initColumnChart();

});



