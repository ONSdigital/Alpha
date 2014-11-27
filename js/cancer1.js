var title = "Figure A: All malignant neoplasms: incidence rates by sex and age group, England, 2012";
var units = "";
var yAxisTitle = "Rate per 100,000";

var data = [];
data[0] = [19.10,16.00,9.70,11.20,18.20,30.20,45.50,59.90,81.80,115.40,201.00,356.90,670.70,1146.80,1706.30,2310.90,2835.20,3161.90,3566.30,3589.30];
data[1] = [13.20,16.30,8.60,10.40,17.60,33.40,72.00,102.40,159.40,246.10,408.20,551.20,703.40,963.50,1241.20,1477.30,1759.40,1993.80,2146.60,2021.30];


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



