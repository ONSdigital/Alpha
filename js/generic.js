
//var type = "column";
//var type = "bar";
var type = "line";

var notes = [];
var bands = [];

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

    case "column":
    $('#annotation').hide();
    // COLUMN
    title = "Figure 6: Tenure (People)";
    subtitle = "";
    units = "";
    yAxisTitle = "%";
    interval = 1;
  /*
      var data = [];
      data[0] = [26,25,30,24,29];
      data[1] = [40, 39, 39,41, 43];
      data[2] = [9,9,9,12,10];
      data[3] = [15,16,13,11,13];

      var seriesNames = ['Owned outright','Owned with a mortgage or loan','Rented from council (Local Authority) or equivalent','Private landlord or letting agency'];
      var categories = ['UK','England','Wales','Scotland','Northern Ireland'];
      */

      break;

      case "bar":
      $('#annotation').hide();
    // BAR
    title = "Figure 2: Ethnic group (excluding White)";
    subtitle = "";
    units = "";
    yAxisTitle = "";
    interval = 1;
  /*
      var data = [];
      data[0] = [2,1,1.6,2,2,2,1.9,5,1.9,1,1,0.4,0.3];
      data[1] = [6.9,2.9,6.2,7.3,6.5,10.8,4.8,18.5,5.2,2,2.3,2.7,1.1];
      data[2] = [3,0.5,1.4,1.5,1.8,3.3,2,13.3,1.6,0.9,0.6,0.7,0.2];
      data[3] = [0.1,0.1,0.1,0.1,0.1,0.1,0.1,0.1,0.2,0.1,0.1,0.1,0.1];
      data[3] = [0.9,0.4,0.6,0.8,0.6,0.9,0.5,3.4,0.6,0.3,0.5,0.3,0.1];

      var seriesNames = [ 'Mixed/Multiple', 'Asian/Asian British', 'Black/African/Carribean/Black British', 'Gypsy/Irish Traveller', 'Other'];
      categories = ['United Kingdom','North East','North West','Yorkshire and The Humber','East Midlands','West Midlands','East','London','South East','South West','Wales','Scotland','Northern Ireland'];
      */
      stacked = true;

      break;

      case "line":
      $('#annotation').show();
    // LINE
    title = "Figure 4: Mix-adjusted House Price Index by UK countries from January 2004 to May 2014";
    subtitle = "Index level (Feb 2002=100)";
    units = "";
    yAxisTitle = "Index Value";
  /*
      var data = [];
      data[0] = [134.9,133.8,134.0,140.0,141.3,144.1,147.0,148.6,148.3,149.3,149.1,148.0,147.5,146.9,150.0,148.4,148.8,150.0,151.6,151.5,151.8,150.4,151.2,151.1,152.8,150.8,153.8,155.1,156.6,157.0,159.6,161.5,162.8,162.0,163.0,164.4,167.7,166.9,168.8,170.2,171.6,174.3,177.7,178.5,179.2,179.2,178.4,177.8,180.8,177.4,177.5,178.1,176.9,175.2,175.3,170.4,170.2,166.1,163.0,159.4,159.5,155.3,153.0,153.8,153.9,156.5,160.4,160.4,163.3,162.5,163.8,164.2,170.0,167.5,168.5,170.2,171.3,173.0,174.6,175.0,174.0,171.3,171.0,169.9,171.0,167.7,169.7,169.3,167.6,169.4,171.7,172.3,171.8,170.8,170.4,169.9,172.4,169.6,169.2,172.1,172.0,173.9,175.8,176.0,175.0,173.7,174.6,175.7,176.4,173.1,174.3,176.9,177.3,179.6,182.3,183.0,182.2,183.6,184.4,185.8,188.8,189.8,189.1,195.3,196.9];
      data[1] = [147.0,150.8,148.0,156.6,163.3,165.3,172.9,177.0,173.6,175.0,176.5,178.5,178.4,178.2,180.7,181.4,185.9,183.3,186.0,188.7,186.2,188.9,186.6,187.7,188.7,189.0,190.2,192.6,194.8,198.7,199.5,202.0,205.3,201.7,205.6,204.7,207.2,209.2,208.7,209.3,211.4,213.8,214.8,217.8,218.0,221.6,218.0,216.8,222.1,216.1,217.3,214.1,213.1,211.7,210.3,205.8,206.8,204.7,197.2,194.5,198.8,190.3,189.0,184.1,190.2,185.9,193.7,195.2,192.9,192.7,198.1,196.4,201.3,203.0,204.4,200.3,205.4,210.9,205.9,205.9,209.8,200.7,204.4,203.2,197.5,196.8,198.0,197.3,192.6,198.7,205.8,204.9,202.3,199.7,200.8,199.4,197.3,196.8,198.8,195.3,199.4,199.4,206.3,208.0,205.5,205.2,202.4,204.2,199.3,204.8,201.3,207.4,200.8,207.9,205.1,211.8,209.8,209.5,213.4,214.1,213.3,215.8,211.0,214.4,213.9];
      data[2] = [142.7,136.1,139.6,145.9,151.7,152.1,155.7,157.4,159.0,160.0,160.1,156.9,159.9,157.1,162.1,166.8,169.6,173.4,174.4,175.0,175.1,173.6,173.4,174.0,176.3,174.9,179.5,179.7,186.1,188.8,190.8,197.3,197.7,197.1,196.6,200.5,204.2,203.9,206.1,211.4,215.2,218.2,222.0,223.1,222.3,225.2,224.6,222.8,224.0,222.9,225.2,229.1,227.9,230.6,226.8,222.6,220.6,215.8,216.2,209.5,210.0,203.4,203.1,209.5,211.9,214.2,217.2,221.1,218.7,217.5,221.9,217.4,224.9,211.2,217.8,214.6,220.9,222.1,225.4,222.3,221.7,218.0,216.5,218.0,216.1,209.5,215.0,213.0,213.9,217.5,221.8,218.8,214.8,215.4,214.9,207.9,214.1,212.3,214.3,212.3,211.4,216.2,219.9,220.2,216.7,210.5,212.6,214.4,213.2,209.9,210.6,209.7,213.0,214.2,215.8,220.1,215.0,217.6,218.1,215.5,216.0,214.9,212.3,219.8,220.7];
      data[3] = [124.4,123.9,123.9,128.6,132.4,128.1,133.4,136.6,135.4,139.5,134.5,140.3,144.1,138.1,143.5,142.4,144.7,146.3,154.6,152.9,158.0,154.8,158.1,158.4,161.2,160.1,163.7,167.3,170.7,174.1,186.5,193.6,195.3,205.6,216.9,221.6,232.0,237.8,245.8,258.1,261.2,271.4,275.6,281.5,278.8,276.7,255.1,249.4,252.4,249.0,242.8,252.0,241.6,245.9,247.0,231.2,234.6,222.0,215.7,204.9,216.9,202.4,203.6,195.0,185.4,189.4,194.0,201.9,191.7,190.0,193.1,192.6,187.2,182.8,189.5,178.8,185.3,174.8,164.0,167.5,177.1,172.8,170.6,161.8,160.2,162.4,161.9,151.6,158.7,160.3,157.1,159.8,156.3,151.8,150.3,148.1,148.2,147.6,144.5,139.5,142.7,141.7,141.0,139.5,140.6,134.2,137.9,139.6,139.5,136.4,141.6,138.5,145.4,141.1,143.4,141.0,139.3,140.9,142.6,146.4,143.4,140.3,142.1,142.0,144.4];

      var seriesNames = [ 'England', 'Wales', 'Scotland', 'Northern Ireland'];
      //set mon to -1 to ignore
      var startMon = 1; // keep this as base 1 to match years eg Sept is month 9
      var year = 2004;
      */
    //interval to skip in the xAxis category
    interval = 12;

    break;

    case "map":
    // MAP
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


      console.log("process");

          stacked = $('#stacked').is(':checked');
          pc = $('#pc').is(':checked');

          console.log("stacked: " + stacked + " : " + pc);
          seriesNames = [];
          data = [];

            //load in new   
            results = $.csv.toArrays(inputData);

            //set data to parsefloat
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
            //console.log(categories);
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
      console.log(end, copy)
      

    }


    function addNote() {
      var copy = $("#note").val()
      console.log("add note");



      notes[start] = {text:copy, start: start, end:end};
      var count =1;
      for ( var item in notes){
        console.log(notes[item]);

        if(notes[item].end>-1){
          chart.xAxis[0].addPlotBand( {

                      color: plotBandColor,
                      from:start,
                      to:end,
                      id: 'plotband1'
          } );
          chart.xAxis[0].addPlotLine({
                                  id: item,
                                  value: notes[item].end,
                                  width: 2,
                                  zIndex:4,
                                  color: plotLineColor,
                                  label:{text:count,rotation:0}
          });

        }else{
          console.log("add plot lien " +item)
          chart.xAxis[0].addPlotLine({
                                  id: item,
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

        $.each(data, function(d,i){
          str += 'data[' + d + '] = [' + data[d] + '];<br/>';
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
/*
          chartType = e.currentTarget.text;
          setChartType( e.currentTarget.text );

            //console.log(e.currentTarget.text);
            //$('a[id^="action"]').removeClass("active");
            $('li a[id^="action"]').parent().removeClass('active');
            $(e.currentTarget).parent().addClass('active');

            setChartType(chartType);
            redrawChart();
            */
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
