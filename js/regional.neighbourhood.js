var neighbourhood = (function () {



/*
http://neighbourhood.statistics.gov.uk/NDE2/Disco/GetDatasetFamilies?SubjectId=5&AreaId=6094211
http://neighbourhood.statistics.gov.uk/NDE2/Disco/GetVariables?DateRange=2001-01-01:2014-09-01&DSFamilyId=2514
http://neighbourhood.statistics.gov.uk/NDE2/Deli/getTables?Areas=276734&Variables=10137,10138,10139&GroupByDataset=Yes


http://neighbourhood.statistics.gov.uk/NDE2/Disco/GetSubjects?
//use subject id to get datasets
http://neighbourhood.statistics.gov.uk/NDE2/Disco/GetDatasets?SubjectId=14&AreaId=276980
// pick a dataset and get varId's
http://neighbourhood.statistics.gov.uk/NDE2/Disco/GetVariables?DateRange=2001-01-01:2010-12-31&DSFamilyId=2567

*/


/*
// for this NeSS page:
http://www.neighbourhood.statistics.gov.uk/dissemination/LeadTableView.do?a=7&b=6275035&c=bristol&d=13&e=7&g=6388788&i=1001x1003x1004&m=0&r=1&s=1412168129760&enc=1&dsFamilyId=2567&nsjs=true&nsck=false&nssvg=false&nswid=1359
//use subjectID=7
http://neighbourhood.statistics.gov.uk/NDE2/Disco/GetDatasetFamilies?SubjectId=7&AreaId=6094211
Method of Travel to Work, 2011 (QS701EW), DSFamilyId=2567
http://neighbourhood.statistics.gov.uk/NDE2/Disco/GetVariables?DateRange=2001-01-01:2014-09-01&DSFamilyId=2567
// get var family id
9754, 9755, 9756, 9757, 9758, 9759, 9760, 9761, 9762, 9763, 9764, 9765, 9766

*/

var POSTCODE = "NP198FP";

var URL = "http://neighbourhood.statistics.gov.uk/NDE2/Disco/FindAreas?Postcode=";// + "&LevelType=13&HierarchyId=17";
var NAME_URL = "http://neighbourhood.statistics.gov.uk/NDE2/Disco/FindAreas?AreaNamePart=";// + "&LevelType=13&HierarchyId=17";
var SUBJECTS_URL = "http://neighbourhood.statistics.gov.uk/NDE2/Disco/GetCompatibleSubjects?AreaId=";
var DATA_URL = "http://neighbourhood.statistics.gov.uk/NDE2/Deli/getTables?Areas=";

var mainTitle;
var countryId;
var country;


var subjects =  [
            { id: 5, name: 'Education, Skills and Training', ref:"", desc:" people who were", short: 'Education', vars:[9993,9994,9995,9996] }
          , { id: 7, name: 'Housing', ref:"", desc:" people who\'s method of travel was", short: 'Housing', vars:[9754, 9755, 9756, 9757, 9758, 9759, 9760, 9761, 9762, 9763, 9764, 9765] }
          , { id: 7, name: 'Housing', ref:"", desc:'% ', short: 'Housing', vars:[3924, 3938] }
          , { id: 7, name: 'Housing', ref:"", desc:' houses classifed as', short: 'Housing', vars:[9568, 9569, 9570] }
          , { id: 7, name: 'Housing', ref:"RENTAL", desc:'', short: 'Housing', vars:[6583, 6585, 6592, 6588, 6590] }
          , { id: 14, name: 'People and Society: Income and Lifestyles', ref:"", desc:"", short: 'Income and Lifestyles', vars:[786,790,795,787,798,788,797,796,794,793] }
        ];


  var postcodes = [ "B15 2TT", "BS8 1TH", "CB2 3PP", "CF10 3BB", "DH1 3EE", "EX4 4SB",
    "SW7 2AZ", "LS2 9JT", "L69 3BX", "M13 9PL", "NE1 7RU", "NG7 2NR",
    "OX1 2JD", "S10 2TN", "SO23 8DL", "CV4 7AL", "YO10 5DD",
    "E1 4NS", "WC2A 2AE", "WC2R 2LS"
    ];

  var subjectId = 8;

  $(document).ready(function(){
        setSubject();

  });



  function setSubject(){
    var len = subjects.length;
    subjectId = Math.floor( Math.random()*len );
  }


function getStats(postcode, isPostcode){
  //randomise subject...
  setSubject();
  var url;

  if(isPostcode){
    url = URL;
  }else{
    url = NAME_URL;
    postcode = postcode.split(",")[0];
  }

  console.log ("getStats " + postcode);
  var id;
  mainTitle = "";

  $.ajax({
    type: "GET",
    url: url + postcode,
    dataType: "xml",
    success: function(xml){
             console.log( xml );
      $(xml).find('Area').each(function(){

        var sLevel = $(this).find('LevelTypeId').text();
        var hierarch = $(this).find('HierarchyId').text();
        var areaID = $(this).find('AreaId').text();
        var sPublisher = $(this).find('HierarchyId').text();

        //$("<li></li>").html(areaID + ", level:" + sLevel+ ", HierarchyId:" + hierarch).appendTo("#content ul");
        if(sLevel==="13"){
          id =  areaID;
          mainTitle = $(this).find('Name').text();

        };

        if(sLevel==="10"){
          countryId = areaID;
          country = $(this).find('Name').text();
        };
      });
      getSummary(id);
      getData(id);


      $('#areaTitle').text( mainTitle +", " + postcode.toUpperCase() + ": " + subjects[subjectId].short);
      $('#extract').html( "Requesting Neighbourhood Statistics for " +  mainTitle + "&hellip;");


    },
    error: function() {
      //console.warn("An error occurred while processing XML file.\nProbably outside England and Wales");
      var extract = "The Neighbourhood Statistics website is part of the ONS. It has over 550 datasets across ten different subjects.";
      $('#extract').html( extract );
    }
  });

}




function getSummary(areaID){
  var count = [];
  var subjectCount = 0;

  $.ajax({
    type: "GET",
    url: SUBJECTS_URL + areaID,
    dataType: "xml",

    success: function(xml){
      var subjects = $(this).find('SubjectsWithCount').children('SubjectWithCount').length;
      
      $(xml).find('Count').each(function(){
        count.push( parseInt( $(this).text() ) );
        subjectCount++;

      });
      var total = count.reduce(function(a, b) {
            return a + b;
          });

    var summary = "This postcode is part of the " + mainTitle.toUpperCase() + " administrative area.";
    summary += " There are " + total + " datasets containing data on " + subjectCount + " different subjects for this neighbourhood.";
    $('#summary').text( summary );

    },

    error: function() {
      console.warn("An error occurred while processing XML file.\nProbably outside England and Wales");
      var extract = "The Neighbourhood Statistics website is part of the ONS. It has over 550 datasets across ten different subjects.";
      $('#extract').html( extract );
    }
  });

}



function getData(areaID){
  
  var titles = [];
  var values = [];
  var subjectCount = 0;

  if (countryId){
    countryId = "," + countryId;
  }else{
    countryId = "";
  }

  $.ajax({
    type: "GET",
    url: DATA_URL + areaID  + countryId + "&Variables=" + subjects[subjectId].vars.toString() + "&GroupByDataset=Yes",
    dataType: "xml",

    success: function(xml){

      //check for namespace prefix
      var prefix = "ns3\\:"; // Most prefer this...
      var periodID= $(xml).find( prefix + "Period" ).text();

      if( periodID.length === 0 ){
        prefix = ""; // ...but some don't!
      }

      date = $(xml).find( prefix + "Period" ).find( prefix + 'Date').text();
      if( subjects[subjectId].ref === "RENTAL" ){
        date = $(xml).find( prefix + "Period" ).find( prefix + 'End').text();
      }
      
      year = date.split("-")[0];

      $(xml).find(prefix + 'Topic').each(function(){
        titles.push( $(this).find(prefix + 'Title').text() );
      });

      $(xml).find(prefix + 'DatasetItem').each(function(){
        values.push( $(this).find(prefix + 'Value').text() );
      });

      console.log(values);
    //each values is followed by its country value
    // eg ["1.43", "24.84", "11.75", ".57"] - district, country, district, country
    //["6354", "1019257", "1315", "317566", "25134", "2167476", "32803", "3504299"]

    // get random number
    var random = Math.floor(Math.random()*titles.length);
    var description = titles[random];
    var count = values[random];



    var extract = "In " + year +", " + mainTitle + " had " + count  + subjects[subjectId].desc + " <i>" + description + "</i>";
    if( subjects[subjectId].ref === "RENTAL" ){
      if( count ){
          extract = "In " + year +", " + mainTitle + " had a rental price of £" + count  + " for " + subjects[subjectId].desc + " <i>" + description + "</i>."
      }else{
          extract = "No data is avaiable for " + mainTitle + ". Please try another area."
      }
    }

    $('#extract').html( "<b>" + extract + "</b>");

    },

    error: function() {
      var extract = "The Neighbourhood Statistics website is part of the ONS. It has over 550 datasets across ten different subjects.";
      $('#extract').html( extract );
    }
  });

}





    return{
      getStats:getStats
    }


})();
