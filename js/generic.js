
//var type = "column";
//var type = "bar";
var type = "line";

var notes = [];
// keep track of lines and bands separately in order to 
// output the var as text
var bands = [];
var lines = [];

var title
, subtitle
, units
, yAxisTitle
, interval = 1
, stacked = false
, pc = false;

function setType(type) {

  $('#title').text("Select chart type: " + type);
  switch (type) {

    // COLUMN
    case "column":
      $('#annotation').hide();
      title = "Figure 6: Tenure (People)";
      subtitle = "";
      units = "";
      yAxisTitle = "%";
      interval = 1;
    break;

    // BAR
    case "bar":
      $('#annotation').hide();
      title = "Figure 2: Ethnic group (excluding White)";
      subtitle = "";
      units = "";
      yAxisTitle = "";
      interval = 1;
      stacked = true;
    break;

    // LINE
    case "line":
      $('#annotation').show();
      title = "Figure 4: Mix-adjusted House Price Index by UK countries from January 2004 to May 2014";
      subtitle = "Index level (Feb 2002=100)";
      units = "";
      yAxisTitle = "Index Value";
      //interval to skip in the xAxis category
      interval = 12;
    break;

    // MAP
    case "map":
      title = 'Map 1: Net flows of internal migrants by local authority, year ending June 2013, per 1,000 mid-2012 population, local authorities in England and Wales';
      subtitle = "England and Wales, 2011";
      units = "";
      yAxisTitle = "";
    break;

  }
  initFields();
}


    /*
    expected format of csv:
    categories on first line then data
    each data row starts with the series name
    */
    function loadData(newURL) {
      console.log("load data here");

      $.ajax({
        dataType: "text",
        url: newURL,
        data: "String",
        success: function (inputData) {

            if(type==='map'){
                processMapData(inputData)
        
            }else{
                processData(inputData)
              
            }

          },
          error: function (data) {
            console.log("error");
            console.log(data);
          }
        });

    }



    function processMapData(inputData) {

          data = [];

            //load in new   
            results = $.csv.toArrays(inputData);

            //set data to parsefloat
            $.each(results, function (count, row)
            {
              if(count>0){
                var obj = {};
                //{ 'code':'E06000001', 'value':1.0},
                obj.code = row[0];
                obj.value = row[1];

                data.push(obj);
              }
            });

            initChart();
    }


    function processData(inputData) {

          stacked = $('#stacked').is(':checked');
          pc = $('#pc').is(':checked');

          seriesNames = [];
          data = [];

            //load in new   
            results = $.csv.toArrays(inputData);

            //set data to Float
            $.each(results, function (count, row)
            {
              var seriesName = row.shift();
              if (count > 0) {
                seriesNames.push(seriesName);

                //loop thru each value
                $.each(row, function(num, col) {
                  row[num] = parseFloat(col);
                });
                data.push(row);
              }
            });

            categories = results[0];
            initChart();

            if(type==='line'){
              populateToFrom();

              //todo only add this once
              $("#from").click(function(e){
                e.preventDefault();
                setStart(e);
              });

              $("#to").click(function(e){
                e.preventDefault();
                setEnd(e);
              });

            }


    }


    function setStart(e) {
      //reset end
      end = -1;

      start = e.target.id.substring(4);
      start = parseInt(start);
    }


    function setEnd(e) {
      end = e.target.id.substring(4);
      var copy = $("#note").val()
      end = parseInt(end);
    }


    function addNote() {
      var copy = $("#note").val()
      notes[start] = {text:copy, start: start, end:end};

      drawNotes();

      // TODO only set these listeners once
      $('a[id^="note"]').click(function(e){
          e.preventDefault();
          //edit item...
      });


      $('a.closeBtn').on('click', function(e){
        e.preventDefault();
        var id = this.id.substring(3);
        id = parseInt(id);

        //remove any plotlines
        if(chart.xAxis[0].plotLinesAndBands){
          var len = notes.length;
          for ( var i = 0;i <len; i++){

            if( notes[i] ){
              var indx = notes[i].start;
                if( notes[i].end >-1 ){
                  chart.xAxis[0].removePlotBand("band" + indx);
                  
                }
                chart.xAxis[0].removePlotLine("line" + indx);
                                  
            }

          }

        }

        notes[id] = null;
        
        drawNotes();
      });

    }




    function drawNotes() {

      //reset array used to store lineas nad bands for JS
      lines = [];
      bands = [];
      var count =1;
      for ( var item in notes){

        if(notes[item]){

          if(notes[item].end>-1){
            bands.push(notes[item]);
            chart.xAxis[0].addPlotBand( {

                        color: plotBandColor,
                        from:notes[item].start,
                        to:notes[item].end,
                        id: "band" + item
            } );
            chart.xAxis[0].addPlotLine({
                                    id: "line" + item,
                                    value: notes[item].end,
                                    width: 2,
                                    zIndex:4,
                                    color: plotLineColor,
                                    label:{text:count,rotation:0}
            });

          }else{
            lines.push(notes[item]);
            chart.xAxis[0].addPlotLine({
                                    id: "line" + item,
                                    value: notes[item].start,
                                    width: 2,
                                    zIndex:4,
                                    color: plotLineColor,
                                    label:{text:count,rotation:0}
            });

          }
        count++;
        }
  
      }

      // show current list
      $("#list").empty();

      //loop thru notes and populate li
      var html = "";
      var count =1;
      for ( item in notes){

         if(notes[item]){
          //console.log(item , categories[item]);
          // use teh item number as a reference for eddintg or delteing
          html+= "<li><a href='#' id='note_" + count + "'>" + count + ": " + notes[item].text + "</a></li><a class='closeBtn' href='' id='btn" + item  + "'' >x</a>";
          count++;
        }
      }
      $("#list").append(html);

    }



    function populateToFrom() {
      //clear UL
      $("#from").empty();
      $("#to").empty();

      //loop thru categories and populate li
      var html = "";
      for ( item in categories){
        //console.log(item , categories[item]);
        html+= "<li><a href='#' id='idx_" + item + "'>" + categories[item] + "</a></li>";
      }
      $("#from").append(html);
      $("#to").append(html);
     
    }

    function initFields() {
      $("#chart_title").val(title);
      $("#creditLine").val(subtitle);
      $("#chart_x").val(units);
      $("#chart_y").val(yAxisTitle);
      $("#dataurl").val('http://local/alpha/data/sample.' + type + '.csv');
    }




    function initListeners(){

      $('#chart_title').keyup(function () {
        var txt = $("#chart_title").val();
        chart.setTitle({text: txt});
      });

      $('#creditLine').keyup(function () {
        var subtxt = $("#creditLine").val();

        chart.setTitle(null, { text: subtxt });
      });
      $('#chart_x').keyup(function () {
        var lbl = $("#chart_x").val();

        console.log(lbl);
        chart.xAxis[0].setTitle({
          text: lbl
        });
      });

      $('#chart_y').keyup(function () {
        var lbl = $("#chart_y").val();
        console.log(lbl);

        chart.yAxis[0].setTitle({
          text: lbl
        });
      });

      $('#dataBtn').click(function (){
        console.log("snap! " + $("#dataurl").val() );

        loadData($("#dataurl").val());
      }); 

      $('#addBtn').click(function (){
        console.log("add! " + $("#dataurl").val() );

        addNote();
      }); 

      $('#saveBtn').click(function (){
        console.log("SAVE! ");

        var str = '<br/>';
        str += 'var title = "' + title + '";<br/>';
        str += 'var subtitle = "' + subtitle + '";<br/>';
        str += 'var units = "' + units + '";<br/>';
        str += 'var yAxisTitle = "' + yAxisTitle + '";<br/>';


        str += 'var categories = ["' + categories.join('","') + '"];<br/>';
        str += 'var seriesNames = ["' + seriesNames.join('","') + '"];<br/>';
        str += 'var data = [];<br/>';

        $.each(data, function(d){
          str += 'data[' + d + '] = [' + data[d] + '];<br/>';
        });



        //add notes for plot band and lines
        str += 'var notes = [];<br/>';

        $.each(notes, function(d,i){
          if(notes[d]!==undefined && notes[d]!== null){
            str += 'notes[' + d + '] = [' +  notes[d].text + ", " + notes[d].start + ", " + notes[d].end+ '];<br/>';
          }
        });



        $('#output').html(str);

      }); 

        $('button[id^="action"]').click(function(e){
          console.log( e);
          console.log( e.currentTarget.innerHTML);
          e.preventDefault();
          var id = e.currentTarget.id.substr(6);
          id  = parseFloat(id);
          console.log(id+"::" +e.currentTarget.innerHTML);

          type = e.currentTarget.innerHTML.toLowerCase();
          setType(type);

          });




        $('a[id^="note"]').click(function(e){
          console.log( e);
          console.log( e.currentTarget.innerHTML);
e.preventDefault();

          });

    }


function handleFiles(files) {
  // Check for the various File API support.
  if (window.FileReader) {
    // FileReader are supported.
    getAsText(files[0]);
  } else {
    alert('FileReader are not supported in this browser.');
  }
}

function getAsText(fileToRead) {
  var reader = new FileReader();
  // Handle errors load
  reader.onload = loadHandler;
  reader.onerror = errorHandler;
  // Read file into memory as UTF-8      
  reader.readAsText(fileToRead);
}

function loadHandler(event) {
  var csv = event.target.result;
  processData(csv);             
}

function errorHandler(evt) {
  if(evt.target.error.name == "NotReadableError") {
    alert("Canno't read file !");
  }
}




    $(document).ready( function () {


      setType(type);
      initListeners();
      initFields();

    });
