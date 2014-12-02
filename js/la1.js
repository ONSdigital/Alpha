var title = "Figure 1: Ethnic group";
var subtitle = "";
var units = "";
var yAxisTitle = "";

var data = [];
data[0] = [0.1,2,2.3,1.9,0.7,0.7,1.4,3,0.9];
//data[0] = [87.1,0.1,2,2.3,1.9,0.7,0.7,1.4,3,0.9];


//categories = ['White','Gypsy/Traveller/Irish Traveller','Mixed / Multiple Ethnic Groups','Asian/ Asian British: Indian','Asian/ Asian British: Pakistani','Asian/ Asian British: Bangladeshi','Asian/ Asian British: Chinese','Asian/ Asian British: Other Asian','Black/African/Caribbean/Black British','Other Ethnic Group'];
categories = ['Gypsy/Traveller/Irish Traveller','Mixed / Multiple Ethnic Groups','Asian/ Asian British: Indian','Asian/ Asian British: Pakistani','Asian/ Asian British: Bangladeshi','Asian/ Asian British: Chinese','Asian/ Asian British: Other Asian','Black/African/Caribbean/Black British','Other Ethnic Group'];
var interval = 1;




$(document).ready(function(){

   options.legend.enabled = true;
   options.plotOptions = {

    }

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

  
  initBarChart();

});



