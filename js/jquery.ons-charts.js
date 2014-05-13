/*
*
* jQuery Plugin Prototype for ONS Lightweight Charting by Stefan Goodchild
* Triple Geek Ltd
*
*/
;(function ( $, window, document, undefined ) {

    var pluginName = "onsc",
        defaults = {
        breakpoint: 640, // Screen width at which the change to narrow view happens
        overBreakpoint: true // Needs a default, may as well be this.
    };

    function Plugin ( element, options ) {
        this.element = element; // Reference to chart html element
        this.$el = $(element); // jQuery object of the above element
        this.settings = $.extend( {}, defaults, options ); // Standard jQuery plugin settings extend
        this.instance = {}; // So each instance is a seperate entity
        this._defaults = defaults;
        this._name = pluginName;
        
        // Define Colour Cycle Options
        this.settings.colours=[];
        this.settings.colours[0] = ["#0084D1"]
        this.settings.colours[1] = ["#0084D1", "#FF950E", "#A9BE3A", "#FFD320"]
        
        this.init(); // Kick off!
    }

    Plugin.prototype = {
        init: function () {
          this.settings.overBreakpoint = this.overBreakpoint(); // Check if over breakpoint
          this.instance.table = this.$el.find('table'); // Find the data table TODO throw polite error if no table
          var that = this; // Crockford! http://javascript.crockford.com/private.html
          $(window).resize(function(){
            that.checkBreakpoint();
          });
          if (this.supported) {
            $('body').addClass('svg');
          } else {
            $('body').addClass('no-svg');
          }
          this.create(); // Start the creation process
        },
        supported: function() { 
          // Simple check to see if the browser can render SVG
          return !! document.createElementNS &&
                 !! document.createElementNS('http://www.w3.org/2000/svg','svg').createSVGRect
        },
        overBreakpoint: function() {
          // Checks against setting and current viewport, returns true or false
          return $( window ).width() > this.settings.breakpoint;
        },
        checkBreakpoint: function() {
          // Only does anything if the overBreakpoint changes value. Should only trigger once as it passes in either direction
          if (this.settings.overBreakpoint != this.overBreakpoint()) {
            this.settings.overBreakpoint = this.overBreakpoint();
            this.destroy();
            this.create();
          }
        },
        createSVG: function($table) {
          // Creates the SVG element and gives it Snap capabilites.
          this.instance.rid = "ons-rid-"+(Math.random().toString(36)+'00000000000000000').slice(2, 5+2);
          this.instance.chartWrap = $('<div class="ons-chart-wrap"><svg viewBox="0 0 '+this.settings.base_size.x+' '+this.settings.base_size.y+'" preserveAspectRatio="xMinYMin meet" id="'+this.instance.rid+'"></svg></div>');
          $table.after(this.instance.chartWrap);
          this.instance.svg = Snap("#"+this.instance.rid);
          
        },
        addWrapperPadding: function() {
          // Works out what padding to give the wrapper Div to enable responsive SVGs. http://demosthenes.info/blog/744/Make-SVG-Responsive
          var padding = (this.settings.base_size.y / this.settings.base_size.x) * 100;
          this.instance.chartWrap.css({
            'padding-bottom': padding+"%"
          });
        },
        sanitizeNumber: function(value) {
          return Number( parseFloat(value.replace(/[^-0-9\.]+/g,"")));
        },
        defineColours: function($table) {
          if ($table.hasClass('ons-colour')) {
            this.instance.colours = this.settings.colours[1];
          } else {
            this.instance.colours = this.settings.colours[0];
          }
          this.instance.colourIndex = -1;
        },
        cycleColours: function() {
          // Set Fill Colour
          this.instance.colourIndex++
          if (this.instance.colourIndex >= this.instance.colours.length) this.instance.colourIndex = 0;
          return this.instance.colours[this.instance.colourIndex];
        },
        destroy: function() {
          // Removes the chart element from the DOM
          this.$el.find('.ons-chart-wrap').remove();
        },
        create: function() {
          that = this;
          $.each(this.instance.table, function(i,e){
            $e = $(e);
            // Simple wrapper to check class and trigger the correct chart builder. Should this be a switch? Maybe, maybe not. Depends on who you listen to
            if (that.supported()) {
              if ($e.hasClass('ons-bar')) {
                $e.hide(); // Don't DRY this! You only want to hide the table if SVG is supported *AND* it has a chart class.
                that.barChart($e);
              }
              if ($e.hasClass('ons-bar-alt')) {
                $e.hide();
                that.barChartAlt($e);
              }
              if ($e.hasClass('ons-line-single')) {
                $e.hide();
                that.lineChartSingle($e);
              }
            }
          });
        },
        barChart: function($table) {
          // Trigger the right chart creation for the current breakpoint status
          if ($table.hasClass('ons-horizontal-only')) {
            this.barChartN($table);
          } else {
            if ( this.settings.overBreakpoint ) {
              this.barChartW($table);
            } else {
              this.barChartN($table);
            }
          }
        },
        barChartAlt: function($table) {
          // Trigger the right chart creation for the current breakpoint status
          if ( this.settings.overBreakpoint ) {
            this.barChartAltW($table);
          } else {
            this.barChartAltN($table);
          }
        },
        barChartW: function($table) {
          // Chart for low value count (10 or less), vertical bars in a large screen configuration. Labels underneath
          // Sizes are relative as the resulting SVG is responsive
          this.settings.base_size = {
            'x': 1280,
            'y': 720,
          };

          this.settings.chart_size = {
            'x': 1280,
            'y': 620,
          };
          this.createSVG($table);
          this.addWrapperPadding();
          var count = $table.find('th').length; // Find how many headers there are, assumes a single layer of data
          var spacer = this.settings.chart_size.x/100; // Gap between the bars
          var jump = (this.settings.chart_size.x+spacer)/count; // Distance between each bar's start coordinate
          
          // Draw the value lines
          this.instance.svg.line(
            0, 
            0, 
            this.settings.chart_size.x, 
            0).attr({
              stroke: "#999999",
              'stroke-dasharray': "3,3"
          });
          this.instance.svg.line(
              0, 
              this.settings.chart_size.y/2, 
              this.settings.chart_size.x, 
              this.settings.chart_size.y/2).attr({
                stroke: "#999999",
                'stroke-dasharray': "3,3"
          });
          // This line sits under the bars rather than exactly on the x-axis
          this.instance.svg.line(
              0, 
              this.settings.chart_size.y+2, 
              this.settings.chart_size.x, 
              this.settings.chart_size.y+2).attr({
                stroke: "#999999",
                'stroke-width': "4"
          });
          
          // Draw the bars
          var x = 0;
          var that = this;
          
          this.defineColours($table);
          
          // Loop through each found TD element
          $.each($table.find('td'), function(i, e){
            
            var colour = that.cycleColours();
            
            var height = that.sanitizeNumber($(e).html()) / 100; // Take the percentage value and convert to a decimal
            // Draw the bar, and store a ref to all for styling later
            var r = that.instance.svg.rect(
              x, 
              that.settings.chart_size.y - (that.settings.chart_size.y * height), 
              jump-spacer, 
              that.settings.chart_size.y * height, 
              5 // This is the border radius of the rounded rectangle
            );
            // Style the bar
            r.attr({ 
              fill: colour
            });
            x+=jump; // increment the base x position by the amount defined above
          });
          
          // Draw the labels under the x-axis
          x = 0;
          $.each($table.find('th'), function(i, e){
            // Draw the label centered under the bar, and store a ref to all for styling later
            var t = that.instance.svg.text(
              x + (jump/2) - spacer, 
              that.settings.base_size.y - ((that.settings.base_size.y - that.settings.chart_size.y) / 1.7),
              $(e).text()
            );
            t.attr({
              'font-size': '25px',
              'text-anchor': 'middle',
              'fill': '#666'
            });
            x+=jump;
          });
          
          // Get values and draw bars
          x = 0;
          $.each($table.find('td'), function(i, e){
            var t = that.instance.svg.text(
              x + (jump/2) - spacer, 
              that.settings.base_size.y - ((that.settings.base_size.y - that.settings.chart_size.y) / 5),
              $(e).text()
            );
            t.attr({
              'font-size': '35px',
              'font-weight': 'bold',
              'text-anchor': 'middle',
              'fill': '#444'
            });
            x+=jump;
          });
        },
        barChartN: function($table) {
          // Chart for low value count (10 or less), vertical bars in a narrow screen configuration. Bars horizontal, labels underneath.
          // Sizes are relative as the resulting SVG is responsive
          
          var count = $table.find('th').length;
          var jump = 90;

          this.settings.base_size = {
            'x': 640,
            'y': jump * count,
          };

          this.settings.chart_size = {
            'x': 640,
            'y': jump * count,
          };
          
          this.createSVG($table);
          this.addWrapperPadding();
          
          var maxwidth = 0;
          
          var that = this;
          
          $.each(this.instance.table.find('td'), function(i, e){
            var newWidth = that.sanitizeNumber($(e).html()) / 100;
            if ( newWidth > maxwidth) {
              maxwidth = newWidth;
            }
          });
          
          var widthMult = (100 / maxwidth) / 100;

          var y = 0;  
          var that = this;
          
          var colours = this.defineColours($table);
          var colourIndex = 0;
          
          this.defineColours($table);
          
          $.each($table.find('td'), function(i, e){

            var colour = that.cycleColours();

            var width = that.sanitizeNumber($(e).html());
            width *= 0.01;
            // Bars
            var b = that.instance.svg.rect(0, y, (that.settings.chart_size.x * width) * widthMult, 30, 5).attr({ 
              fill: colour
            });
            // Labels
            var l = that.instance.svg.text(
              0,
              y+60,
              $($table.find('th')[i]).text()
            ).attr({
                'font-size': '25px',
                'text-anchor': 'left',
                'fill': '#666'
            });
            
            // Move value labels to align right with the bar length, unless that means they overlap the title labels.
            
            var labelWidth = l.getBBox().width; // Get description text label width
            var barWidth = (that.settings.chart_size.x * width) * widthMult; // Get bar width
            
            if (barWidth - labelWidth > 50) { // 50px is the breathing space between description and value
              that.instance.svg.text(
                barWidth, 
                y+60,
                $(e).text()
              ).attr({
                'font-size': '25px',
                'font-weight': 'bold',
                'text-anchor': 'end',
                'fill': '#444'
              });
            } else {
              that.instance.svg.text(
                labelWidth + 15, 
                y+60,
                $(e).text()
              ).attr({
                'font-size': '25px',
                'font-weight': 'bold',
                'text-anchor': 'start',
                'fill': '#444'
              });
            }
            y+=jump;
          });
        },
        barChartAltW: function($table) {
          var count = $table.find('th').length;
          var jump = 30;
          
          this.settings.base_size = {
            'x': 640,
            'y': jump * count + (jump * 2.5),
          };
          
          this.createSVG($table);
          this.addWrapperPadding();
          
          var maxValue = 0;
          var labelSpace = 0;
          
          var y = 0;
          
          // Find highest number
          
          var that = this;

          $.each($table.find('td'), function(i, e){
            var newMax = that.sanitizeNumber($(e).html()) / 100;
            if ( newMax > maxValue) {
              maxValue = newMax;
            }
            
            var l = that.instance.svg.text(
              -100,
              -100,
              $($table.find('th')[i]).text()
            );
            
            if ( l.getBBox().width > labelSpace) labelSpace = l.getBBox().width
            
            l.remove();
            
          });
          
          labelSpace += 40;
          
          this.settings.chart_size = {
            'x': 640 - labelSpace,
            'y': jump * count + jump,
          };
          
          
          var maxScale = (Math.round(maxValue*10)/10);

          // Draw Lines and Legend
          
          for (x = 0; x <= 1; x+=0.25) {
            this.instance.svg.line(
              labelSpace+this.settings.chart_size.x*x, 
              30, 
              labelSpace+this.settings.chart_size.x*x, 
              this.settings.chart_size.y).attr({
                stroke: "#999999",
                'stroke-dasharray': "3,3"
            });
            
            var labelx = this.settings.chart_size.x*x;
            var textAnchor = "middle";
            
            if (x == 0) {
              textAnchor = 'start';
            }

            if (x == 1) {
              textAnchor = 'end';
            }

            var l = that.instance.svg.text(
              labelSpace+labelx,
              23,
              Math.round(x * maxScale * 100) + "%"
            ).attr({
                'font-size': '20px',
                'font-weight': "bold",
                'text-anchor': textAnchor,
                'fill': '#939598'
            });

            var l = that.instance.svg.text(
              labelSpace+labelx,
              this.settings.base_size.y - 5,
              Math.round(x * maxScale * 100) + "%"
            ).attr({
                'font-size': '20px',
                'font-weight': "bold",
                'text-anchor': textAnchor,
                'fill': '#939598'
            });
          }
          $.each($table.find('td'), function(i, e){
            var width = that.sanitizeNumber($(e).html()) / maxScale;
            
            // Bars
            var fillColour = "#90B0C9";
            if ($(e).hasClass('highlight')) {
             fillColour = "#FF950E";
            }
            
            var b = that.instance.svg.rect(labelSpace, y+50, (that.settings.chart_size.x * width) / 100, 20, 5).attr({ 
              fill: fillColour,
              cursor: 'pointer'
            });
            
            // Labels
            
            var textColour = '#222'
            
            if (i%2 == 1) {
              textColour = '#666'
            }
            
            var l = that.instance.svg.text(
              0,
              y+67,
              $($table.find('th')[i]).text()
            ).attr({
                'font-size': '20px',
                'text-anchor': 'left',
                'fill': textColour
            });
            
            // Hovers
            that.hoverLabel(b, that, width, y-17, i, e, labelSpace, $table);
            y+=jump;
          });
        },
        barChartAltN: function($table) {
          var count = $table.find('th').length;
          var jump = 52;
          
          this.settings.base_size = {
            'x': 640,
            'y': jump * count + (jump * 1.5),
          };
          
          this.settings.chart_size = {
            'x': 640,
            'y': jump * count + jump,
          };
                    
          this.createSVG($table);
          this.addWrapperPadding();
          
          var maxValue = 0;
          var labelSpace = 0;
          
          var y = 0;
          
          // Find highest number
          
          var that = this;

          $.each($table.find('td'), function(i, e){
            var newMax = that.sanitizeNumber($(e).html()) / 100;
            if ( newMax > maxValue) {
              maxValue = newMax;
            }
          });
          
          var maxScale = (Math.round(maxValue*10)/10);

          // Draw Lines and Legend
          
          for (x = 0; x <= 1; x+=0.25) {
            this.instance.svg.line(
              this.settings.base_size.x*x, 
              30, 
              this.settings.base_size.x*x, 
              this.settings.chart_size.y).attr({
                stroke: "#999999",
                'stroke-dasharray': "3,3"
            });
            
            var labelx = this.settings.base_size.x*x;
            var textAnchor = "middle";
            
            if (x == 0) {
              textAnchor = 'start';
            }

            if (x == 1) {
              textAnchor = 'end';
            }

            var l = that.instance.svg.text(
              labelx,
              23,
              Math.round(x * maxScale * 100) + "%"
            ).attr({
                'font-size': '20px',
                'font-weight': "bold",
                'text-anchor': textAnchor,
                'fill': '#939598'
            });

            var l = that.instance.svg.text(
              labelx,
              this.settings.base_size.y - 5,
              Math.round(x * maxScale * 100) + "%"
            ).attr({
                'font-size': '20px',
                'font-weight': "bold",
                'text-anchor': textAnchor,
                'fill': '#939598'
            });

          }

          $.each($table.find('td'), function(i, e){
            var width = that.sanitizeNumber($(e).html()) / maxScale;
            
            // Bars
            var fillColour = "#90B0C9";
            if ($(e).hasClass('highlight')) {
             fillColour = "#FF950E";
            }
            
            var b = that.instance.svg.rect(0, y+67, (that.settings.chart_size.x * width) / 100, 20, 5).attr({ 
              fill: fillColour
            });
            
            // Labels
            
            var textColour = '#222'
            
            if (i%2 == 1) {
              textColour = '#666'
            }
            
            var l = that.instance.svg.text(
              0,
              y+60,
              $($table.find('th')[i]).text()
            ).attr({
                'font-size': '20px',
                'text-anchor': 'left',
                'fill': textColour
            });
            
            // Hovers
            
            that.hoverLabel(b, that, width, y, i, e, 0, $table);
                      
            y+=jump;
          });
        },
        lineChartSingle: function($table) {
          // Trigger the right chart creation for the current breakpoint status
          if ( this.settings.overBreakpoint ) {
            this.lineChartSingleW($table);
          } else {
            this.lineChartSingleN($table);
          }
        },
        lineChartSingleN: function($table) {
          var count = $table.find('th').length;
          var jump = 20;
          
          this.settings.base_size = {
            'x': 640,
            'y': jump * count + (jump * 1.5),
          };
          
          this.createSVG($table);
          this.addWrapperPadding();
          
          var that = this;
          
          labelSpace = 0;

          $.each($table.find('th'), function(i, e){
            var l = that.instance.svg.text(
              -100,
              -100,
              $(this).text()
            );
            
            if ( l.getBBox().width > labelSpace) labelSpace = l.getBBox().width
            
            l.remove();
            
          });
          
          labelSpace += 40;
          
          this.settings.chart_size = {
            'x': 640 - labelSpace,
            'y': jump * count + jump,
          };
          
          this.settings.min = $table.data('min');
          this.settings.max = $table.data('max');
          this.settings.labelSkip = $table.data('label-skip');

          if( $table.data('colour') ){
            this.settings.colour = $table.data('colour');
          }else{
            this.settings.colour = this.settings.colours[0];
          }
                    
          // Draw Lines and Legend
          
          for (x = 0; x <= 1; x+=0.25) {
            this.instance.svg.line(
              labelSpace+this.settings.chart_size.x*x, 
              30, 
              labelSpace+this.settings.chart_size.x*x, 
              this.settings.chart_size.y).attr({
                stroke: "#999999",
                'stroke-dasharray': "3,3"
            });
            
            if (x > 0 && x < 1) {
              var l = that.instance.svg.text(
                labelSpace+this.settings.chart_size.x*x,
                23,
                this.settings.max * x
              ).attr({
                  'font-size': '20px',
                  'font-weight': "bold",
                  'text-anchor': "middle",
                  'fill': '#939598'
              });
            }

          }
          
          var x = labelSpace;
          var y = 50;
          var polyline = new Array();
          //polyline.push(x);
         // polyline.push(y);

          // calculate the ratio for 1 unit in pixels
          // eg 1 unit is chart WIDTH(NB!) / range (MIN TO MAX)
          var ratio = that.settings.chart_size.x / (that.settings.max - that.settings.min) ;

          $.each($table.find('td'), function(i, e){
            // take the actual <td> table value and adjust for the minimum
            var unit = ( that.sanitizeNumber( $(e).html() ) - that.settings.min )
            // convert units to pixels
            var pixel = unit * ratio;
            // finally set yposition in chart
            x =   labelSpace +  pixel ;
            //x = labelSpace + (that.sanitizeNumber($(e).html()) / that.settings.max) * that.settings.chart_size.x;
            polyline.push(x);
            polyline.push(y);
            y+=jump;
          });   
          
          polyline.push(labelSpace);
          //polyline.push(y);

          var pl = that.instance.svg.polyline(polyline);
          
          pl.attr({
            'stroke': this.settings.colour ,
            'strokeWidth': 6,
            'fill': this.settings.colour ,
            'fill-opacity' :0
          })
          
          y=70;    

          $.each($table.find('th'), function(i, e){
            // Labels
            if ((i+1) % that.settings.labelSkip == 1) {
              var l = that.instance.svg.text(
                0,
                y,
                $(this).text()
              ).attr({
                  'font-size': '20px',
                  'text-anchor': 'left',
                  'fill': '#333'
              });
            }
            y+=jump;
          });          

          y=50;    

          $.each($table.find('td'), function(i, e){
            if ($(this).data('callout')) {
              // take the actual <td> table value and adjust for the minimum
              var unit = ( that.sanitizeNumber( $(e).html() ) - that.settings.min )
              // convert units to pixels
              var pixel = unit * ratio;
              // finally set yposition in chart
              x =   labelSpace +  pixel ;
             // x = labelSpace + (that.sanitizeNumber($(e).html()) / that.settings.max) * that.settings.chart_size.x;
              that.calloutLabel($(this).data('callout'), x, y, 'auto', that, labelSpace, $table);
            }
            y+=jump;
          });          

        },














        lineChartSingleW: function($table) {
          
          this.settings.base_size = {
            'x': 1280,
            'y': 720,
          };
          
          this.settings.chart_size = {
            'x': 1280,
            'y': 650,
          };

          this.createSVG($table);
          this.addWrapperPadding();
          
          var count = $table.find('th').length;
          var jump = this.settings.chart_size.x / count+1;
          
          var that = this;
          
          this.settings.min = $table.data('min');
          this.settings.max = $table.data('max');
          this.settings.labelSkip = $table.data('label-skip');

          if( $table.data('colour') ){
            this.settings.colour = $table.data('colour');
          }else{
            this.settings.colour = this.settings.colours[0];
          }

                    
          // Draw Lines and Legend
          
          for (y = 0; y <= 1; y+=0.25) {
            this.instance.svg.line(
              0, 
              y * this.settings.chart_size.y, 
              this.settings.chart_size.x, 
              y * this.settings.chart_size.y).attr({
                stroke: "#999999",
                'stroke-dasharray': "3,3"
            });
            
            if (y > 0 && y < 1) {
              //console.log("y pos " + ( (this.settings.max - this.settings.min)- (this.settings.max - this.settings.min) * y) );
              var xPos = 0;
              var yPos = y * this.settings.chart_size.y - 10;
              var copy = (this.settings.max - this.settings.min)- (this.settings.max - this.settings.min) * y +  this.settings.min; // actual text to display
              var l = that.instance.svg.text(xPos, yPos, copy)
                .attr({
                  'font-size': '20px',
                  'font-weight': "bold",
                  'text-anchor': "left",
                  'fill': '#939598'
              });
            }
          }

          //calculate the position of the chart's origin
          var origin = 0;

          // only alter origin if negative
          if(this.settings.min<0 && this.settings.max>=0){
            origin = this.settings.max  * this.settings.chart_size.y /  (this.settings.max - this.settings.min);
          }

          // for all negative results set origin at top of chart
          if( this.settings.min<0 && this.settings.max<=0){
            origin = this.settings.chart_size.y;

          }
          
          var x = 0;
          var y = this.settings.chart_size.y - origin;
          var polyline = new Array();
          // original has a filled polyline : NB also need to set the fill attribut below...
         // polyline.push(x);
         // polyline.push(y);

          $.each($table.find('td'), function(i, e){
            // calculate the ratio for 1 unit in pixels
            // eg 1 unit is chart ht / range (MIN TO MAX)
            var ratio = that.settings.chart_size.y / (that.settings.max - that.settings.min) ;
            // take the actual <td> table value and adjust for the minimum
            var unit = ( that.sanitizeNumber( $(e).html() ) - that.settings.min )
            // convert units to pixels
            var pixel = unit * ratio;
            // finally set yposition in chart
            y =   that.settings.chart_size.y - pixel ;
            
            polyline.push(x);
            polyline.push(y);
            x+=jump;
          });   
          
          // close the polyline for a filled chart
         // polyline.push(x-jump);
         // polyline.push(this.settings.chart_size.y - origin);

          var pl = that.instance.svg.polyline(polyline);
          
          pl.attr({
            'stroke': this.settings.colour ,
            'strokeWidth': 6,
            'fill': this.settings.colour ,
            'fill-opacity' :0
          })
          
          x=0;    

          $.each($table.find('th'), function(i, e){
            // Labels
            if ((i+1) % that.settings.labelSkip == 1) {
              var l = that.instance.svg.text(
                x,
                that.settings.chart_size.y + 25,
                $(this).text()
              ).attr({
                  'font-size': '20px',
                  'text-anchor': 'left',
                  'fill': '#333'
              });
            }
            x+=jump;
          });           

          x=0;    

          $.each($table.find('td'), function(i, e){
            if ($(this).data('callout')) {
              // calculate the ratio for 1 unit in pixels
              // eg 1 unit is chart ht / range (MIN TO MAX)
              var ratio = that.settings.chart_size.y / (that.settings.max - that.settings.min) ;
              // take the actual <td> table value and adjust for the minimum
              var unit = ( that.sanitizeNumber( $(e).html() ) - that.settings.min )
              // convert units to pixels
              var pixel = unit * ratio;
              // finally set yposition in chart
              y =   that.settings.chart_size.y - pixel ;

              that.calloutLabel($(this).data('callout'), x, y, 550, that, 0, $table);
            }
            x+=jump;
          });          



        },



 












        calloutLabel: function(copy, x, y, width, that, labelSpace, $table) {
          var hoverSpot = that.instance.svg.circle(
            x, 
            y, 
            12);

            var hoverLine = that.instance.svg.line(
              x, 
              y, 
              x, 
              y-50).attr({
                stroke: "#000",
                strokeWidth: 3,
                'stroke-dasharray': "0,0"
            });
            
            if (width == "auto") {
              var hoverRect = that.instance.svg.rect(
                labelSpace + (that.settings.chart_size.x * 0.05), 
                y - 105, 
                (that.settings.chart_size.x - labelSpace) * 1, 80, 5)
              .attr({ 
                fill: "white",
                stroke: "black",
                strokeWidth: 3
              });

              var hoverLabelA = that.instance.svg.text(
                labelSpace + (that.settings.chart_size.x * 0.5),
                y-57,
                copy
              ).attr({
                'font-size': '20px',
                'font-weight': 'normal',
                'text-anchor': 'middle',
                'fill': "#333"
              });
            } else {
              var hoverRect = that.instance.svg.rect(
                x - width/2, 
                y - 105, 
                width, 80, 5)
              .attr({ 
                fill: "white",
                stroke: "black",
                strokeWidth: 3
              });

              var hoverLabelA = that.instance.svg.text(
                x,
                y-57,
                copy
              ).attr({
                'font-size': '20px',
                'font-weight': 'normal',
                'text-anchor': 'middle',
                'fill': "#333"
              });
            }


        },
        hoverLabel: function(b, that, width, y, i, e, labelSpace, $table) {
          var hoverSpot = that.instance.svg.circle(
            labelSpace + ((that.settings.chart_size.x * width) / 100) * 0.5, 
            y+77, 
            12);
          
          var yrect = y-27
          
          var hoverLine = that.instance.svg.line(
            labelSpace + ((that.settings.chart_size.x * width) / 100) * 0.5, 
            y+77, 
            labelSpace + ((that.settings.chart_size.x * width) / 100) * 0.5, 
            yrect).attr({
              stroke: "#000",
              strokeWidth: 3,
              'stroke-dasharray': "0,0"
          });
            
          var hoverRect = that.instance.svg.rect(
              labelSpace + that.settings.chart_size.x * 0.05, 
              yrect, 
              that.settings.chart_size.x * 0.9, 87, 5)
            .attr({ 
              fill: "white",
              stroke: "black",
              strokeWidth: 3
            });
            
          var hoverLabelA = that.instance.svg.text(
              labelSpace+45,
              yrect + 33,
              $($table.find('th')[i]).text()
            ).attr({
                'font-size': '25px',
                'font-weight': 'bold',
                'text-anchor': 'left',
                'fill': "#333"
            });
            
          var hoverLabelB = that.instance.svg.text(
                labelSpace + 45,
                yrect + 70,
                $(e).html()
              ).attr({
                  'font-size': '40px',
                  'font-weight': 'bold',
                  'text-anchor': 'left',
                  'fill': "#333"
              });
          
          
          var g = that.instance.svg.group(
            hoverSpot,
            hoverLine,
            hoverRect,
            hoverLabelA,
            hoverLabelB
          ).attr({
            visibility: 'hidden'
          });
          
          g.hover(function(){
            g.attr({
              visibility: 'visible'
            });
          },function(){
            g.attr({
              visibility: 'hidden'
            });
          });

          b.hover(function(){
            g.attr({
              visibility: 'visible'
            });
          },function(){
            g.attr({
              visibility: 'hidden'
            });
          });
          
          return g;
        } 
    };

    $.fn[ pluginName ] = function ( options ) {
        return this.each(function() {
            if ( !$.data( this, "plugin_" + pluginName ) ) {
                $.data( this, "plugin_" + pluginName, new Plugin( this, options ) );
            }
        });
    };

})( jQuery, window, document );
