var neighbourhood = (function () {



/*
http://neighbourhood.statistics.gov.uk/NDE2/Disco/GetDatasetFamilies?SubjectId=5&AreaId=6094211
http://neighbourhood.statistics.gov.uk/NDE2/Disco/GetVariables?DateRange=2001-01-01:2014-09-01&DSFamilyId=2514
http://neighbourhood.statistics.gov.uk/NDE2/Deli/getTables?Areas=276734&Variables=10137,10138,10139&GroupByDataset=Yes


http://neighbourhood.statistics.gov.uk/NDE2/Disco/GetSubjects?
//use subject id to get datasets
http://neighbourhood.statistics.gov.uk/NDE2/Disco/GetDatasets?SubjectId=14&AreaId=276980
// pick a dataset and get varId's
http://neighbourhood.statistics.gov.uk/NDE2/Disco/GetVariables?DateRange=2001-01-01:2010-12-31&DSFamilyId=215

*/

var POSTCODE = "NP198FP";

var URL = "http://neighbourhood.statistics.gov.uk/NDE2/Disco/FindAreas?Postcode=";// + "&LevelType=13&HierarchyId=17";
var SUBJECTS_URL = "http://neighbourhood.statistics.gov.uk/NDE2/Disco/GetCompatibleSubjects?AreaId=";
var DATA_URL = "http://neighbourhood.statistics.gov.uk/NDE2/Deli/getTables?Areas=";

var mainTitle;
var countryId;
var country;


var subjects =  [
            { id: 58, name: 'Census', short: 'Census', vars:[] }
          , { id: 3, name: 'Crime and Safety', short: 'Crime', vars:[] }
          , { id: 4, name: 'Economic Deprivation', short: 'Deprivation', vars:[] }
          , { id: 5, name: 'Education, Skills and Training', short: 'Education', vars:[9993,9994,9995,9996] }
          , { id: 6, name: 'Health and Care', short: 'Health', vars:[] }
          , { id: 7, name: 'Housing', short: 'Housing', vars:[5214,5207,5226,5221,5209,5593] }
        //  , { id: 7, name: 'Housing', short: 'Housing', vars:[5214,5207,5226,5221,5209,5593,5204,5199,5205,5211,5213,5206,5215,5200,5222,5202,5224,5216,5592,5208,5203,5201,5595,5225,5210,5198,5212,5594] }
          , { id: 46, name: 'Indicators', short: 'Indicators', vars:[] }
          , { id: 10, name: 'Indices of Deprivation and Classification', short: 'Indices of Deprivation', vars:[] }
          , { id: 14, name: 'People and Society: Income and Lifestyles', short: 'Income and Lifestyles', vars:[4931,4932,4933,4934,4935,4936,4937,4938,4939,4940,4941,4942,1159,786,790,791,795,787,798,788,797,792,796,794,793] }
          , { id: 13, name: 'People and Society: Population and Migration', short: 'Population', vars:[] }
          , { id: 8, name: 'Physical Environment', short: 'Environment', vars:[] }
          , { id: 9, name: 'Work Deprivation', short: 'Work Deprivation', vars:[] }
        ];


var postcodes = [ "B15 2TT", "BS8 1TH", "CB2 3PP", "CF10 3BB", "DH1 3EE", "EH8 9YL", "EX4 4SB",
 "G12 8QQ", "SW7 2AZ", "LS2 9JT", "L69 3BX", "M13 9PL", "NE1 7RU", "NG7 2NR",
  "OX1 2JD",  "BT7 1NN", "S10 2TN", "SO23 8DL", "CV4 7AL", "YO10 5DD",
  "E1 4NS", "WC2A 2AE", "WC2R 2LS" , "PO6 3NH"];

  var subjectId = 8;

$(document).ready(function(){

      clearPanel();
      setSubject();

/*

    $("#search").click( function(evt){
      evt.preventDefault();
      clearPanel();
      setSubject();

      testPostCode();
    })
*/
/*
    $("#go").click( function(evt){
      evt.preventDefault();
      clearPanel();
      setSubject();

      var ran = Math.floor(Math.random()*postcodes.length);
      var pcode = postcodes[ran];
      $("#postcode").val( pcode );
      testPostCode();
    })
*/


/*


*/

});



function setSubject(){
  var len = 3;//subjects.length;
  var random = Math.round( Math.random()*len ) -1;

  switch(random){
    case 0:
    subjectId = 3;
    break;
    case 1:
    subjectId = 5;
    break;
    case 2:
    subjectId = 8;
    break;


  }

console.log (random + " subjectId " + subjectId);
}


/*
function testPostCode () {
  var newPostCode = checkPostCode( $("#postcode").val() );
  if (newPostCode) {
    postcode = newPostCode;
    $("#postcode").val( newPostCode );
    console.log ("Postcode has a valid format")

    getStats(newPostCode);

  }
  else {
    console.log ("Postcode has invalid format");
  }
}
*/

function getStats(postcode){
  //randomise subject...
  setSubject()

  console.log ("getStats " + postcode);
  var id;
  mainTitle = "";

  $.ajax({
    type: "GET",
    url: URL + postcode,
    dataType: "xml",
    success: function(xml){
     // console.log(xml);
     // $("#content").append("<ul></ul>");
      $(xml).find('Area').each(function(){
       // console.log($(this) );
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


    },
    error: function() {
      console.warn("An error occurred while processing XML file.\nProbably outside England and Wales");
      var extract = "The Neighbourhood Statistics website is part of the ONS. It has over 550 datasets across ten different subjects.";
      $('#extract').html( extract );
    }
  });

}




function getSummary(areaID){
  //console.log ("getStats " + areaID);
  var count = [];
  var subjectCount = 0;

  $.ajax({
    type: "GET",
    url: SUBJECTS_URL + areaID,
    dataType: "xml",

    success: function(xml){
     /// console.log(xml);

      var subjects = $(this).find('SubjectsWithCount').children('SubjectWithCount').length;
      //console.log( "n o subs " + subjects);
      $(xml).find('Count').each(function(){
       /// console.log( $(this) );
        count.push( parseInt( $(this).text() ) );
        subjectCount++;


      });
      var total = count.reduce(function(a, b) {
            return a + b;
          });

    //console.log( count );
    //console.log( subjectCount +":"+ total);

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

function clearPanel(){

 // console.log("clear");
  $( "#panel" ).animate({
    top: 110
    }, 100, function() {
    // Animation complete.
  //console.log("clear complete");
    $('#extract').html( "" );
  });

}

function getData(areaID){
  console.log ("getData " + areaID);
  var titles = [];
  var values = [];
  var subjectCount = 0;

  if (countryId){
    countryId = "," + countryId;
  }else{
    countryId = "";
  }

  console.log ("getData " + DATA_URL + areaID  + countryId + "&Variables=" + subjects[subjectId].vars.toString());

  $.ajax({
    type: "GET",
   // url: DATA_URL + areaID  + countryId + "&Variables=9993,9994,9995,9996&GroupByDataset=Yes",
   // url: DATA_URL + areaID  + countryId + "&Variables=5214,5207,5226,5221,5209,5593,5204,5199,5205,5211,5213,5206,5215,5200,5222,5202,5224,5216,5592,5208,5203,5201,5595,5225,5210,5198,5212,5594&GroupByDataset=Yes",
    url: DATA_URL + areaID  + countryId + "&Variables=" + subjects[subjectId].vars.toString() + "&GroupByDataset=Yes",
    dataType: "xml",

    success: function(xml){
      //console.log("DATA");
      //console.log(xml);
      //console.log($(xml).find('ns3\\:Period').text());
      //console.log($(xml).find('Period').text());

      // Need to work out how to handle namespaced prefixes on some
      // elements.
      var prefix = "ns3\\:"; // Most prefer this...
      date= $(xml).find( prefix + "Period" ).find( prefix + 'Date').text();;
      if( date.length === 0 )
      {
          prefix = ""; // ...but some don't!
          date = $(xml).find( prefix + "Period" ).find( prefix + 'Date').text();;
      }

      //date = $(xml).find('[nodeName=ns3:Period]').find('ns3\\:Date').text();
      year = date.split("-")[0];

      $(xml).find(prefix + 'Topic').each(function(){
        //console.log( "item" );
        //console.log( $(this).find('ns3\\:Title').text() );
        titles.push( $(this).find(prefix + 'Title').text() );
      });

      $(xml).find(prefix + 'DatasetItem').each(function(){
        //console.log( $(this) );
        //console.log( $(this).find('ns3\\:Value').text() );
        values.push( $(this).find(prefix + 'Value').text() );
      });


    var rand = Math.floor(Math.random()*titles.length);
    var rand = Math.floor(rand/2)*2;

    //console.log( rand +" " + date +":::"+ titles +":"+ values);
    var description = titles[rand];
    var count = values[rand];

    var countryCount = values[rand+1];

    var extract = "In " + year +", " + mainTitle + " had " + count + " <i>" + description + "</i> (compared with " + countryCount + " for " + country +")."
    $('#extract').html( extract );

      $( "#panel" ).animate({
        top: 0
        }, 50, function() {
      });

    },

    error: function() {
      console.warn("An error occurred while processing XML file.");
      var extract = "The Neighbourhood Statistics website is part of the ONS. It has over 550 datasets across ten different subjects.";
      $('#extract').html( extract );
    }
  });

}





    return{
      getStats:getStats
    }


})();
