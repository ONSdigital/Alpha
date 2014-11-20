var title = "Figure B: All malignant neoplasms: frequency distribution by sex and age group, England 2012";
var units = "%";
var yAxisTitle = "%";

var data = [];
data[0] = [0.00,0.20,0.10,0.10,0.20,0.40,0.60,0.80,1.00,1.50,2.70,4.40,7.10,11.80,16.20,15.70,15.40,11.90,7.10,3.00];
data[1] = [0.00,0.20,0.10,0.10,0.20,0.40,1.00,1.30,2.00,3.50,5.90,7.10,7.90,10.80,12.90,11.60,11.80,10.80,7.70,4.70];


categories = ['Under 1','1-4','5-9','10-14','15-19','20-24','25-29','30-34','35-39','40-44','45-49','50-54','55-59','60-64','65-69','70-74','75-79','80-84','85-89','90 and over'];

var interval = 2;




$(document).ready(function(){

  options.yAxis.min = 0;
  options.legend.enabled = true;

  options.series = [
    {
      name: 'Males',
      data: data[0],
      marker:{
        symbol:"circle",
        states: {
          hover: {
            fillColor: '#007dc3',
            radiusPlus: 0,
            lineWidthPlus: 0
          }
        }
      },
      dashStyle: 'Solid',
    },
      {
        name: 'Females',
        data: data[1],
        marker:{
          symbol:"square",
          states: {
            hover: {
              fillColor: '#409ed2',
              radiusPlus: 0,
              lineWidthPlus: 0
            }
          }
        },
        dashStyle: 'shortdash'
      }
  ];

  
  initLineChart();

});



