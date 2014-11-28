var title = "Figure D: Number of registrations by major sites, England, 2012";
var subtitle = "";
var units = "";
var yAxisTitle = "";

var data = [];
data[0] = [4335,4884,3718,19286,2449,3704,1521,19547,5535,1881,284, null, null, null,37136,1874,4625,6621,2336,689,869,5934,2361,4334,9483];
data[1] = [2274,2359,1919,15036,1418,3667,355,16356,5746,466,42489,2482,7192,5984, null, null,2741,2503,1623,1906,686,4923,1829,3020,10738];


categories = ["Lip, oral cavity and pharynx",'Oesophagus','Stomach','Colon and rectum','Liver and intrahepatic bile ducts','Pancreas','Larynx',"Trachea, bronchus and lung",'Melanoma of skin','Mesothelioma','Breast','Cervix uteri','Uterus','Ovary','Prostate','Testis',"Kidney, except renal pelvis",'Bladder','Brain','Thyroid gland','Hodgkins disease','Non-Hodgkins lymphoma','Multiple myeloma','Leukaemia','Other malignancies'];

var interval = 1;




$(document).ready(function(){

  options.legend.enabled = true;

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



