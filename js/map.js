var title = "Figure 6: Method of travel to work, by region";
var subtitle = "England and Wales, 2011";
var units = "%";
var yAxisTitle = "%";

var data = [];



var myChart;
$(document).ready(function(){
  



    // Prepare demo data
     data = [
{ 'code':'E06000001', 'value':1.0},
{ 'code':'E06000002', 'value':-7.8},
{ 'code':'E06000003', 'value':-1.6},
{ 'code':'E06000004', 'value':-1.0},
{ 'code':'E06000005', 'value':-0.2},
{ 'code':'E06000006', 'value':-0.8},
{ 'code':'E06000007', 'value':3.2},
{ 'code':'E06000008', 'value':-8.6},
{ 'code':'E06000009', 'value':-2.9},
{ 'code':'E06000010', 'value':-7.0},
{ 'code':'E06000011', 'value':2.1},
{ 'code':'E06000012', 'value':-0.8},
{ 'code':'E06000013', 'value':-1.1},
{ 'code':'E06000014', 'value':5.3},
{ 'code':'E06000015', 'value':-4.5},
{ 'code':'E06000016', 'value':-8.7},
{ 'code':'E06000017', 'value':5.6},
{ 'code':'E06000018', 'value':-8.4},
{ 'code':'E06000019', 'value':0.9},
{ 'code':'E06000020', 'value':-0.4},
{ 'code':'E06000021', 'value':-5.5},
{ 'code':'E06000022', 'value':4.2},
{ 'code':'E06000023', 'value':0.3},
{ 'code':'E06000024', 'value':7.5},
{ 'code':'E06000025', 'value':4.8},
{ 'code':'E06000026', 'value':-1.7},
{ 'code':'E06000027', 'value':6.1},
{ 'code':'E06000028', 'value':0.3},
{ 'code':'E06000029', 'value':0.8},
{ 'code':'E06000030', 'value':0.7},
{ 'code':'E06000031', 'value':-7.3},
{ 'code':'E06000032', 'value':-9.4},
{ 'code':'E06000033', 'value':3.2},
{ 'code':'E06000034', 'value':-0.2},
{ 'code':'E06000035', 'value':3.6},
{ 'code':'E06000036', 'value':3.1},
{ 'code':'E06000037', 'value':3.2},
{ 'code':'E06000038', 'value':-3.2},
{ 'code':'E06000039', 'value':-9.6},
{ 'code':'E06000040', 'value':-1.2},
{ 'code':'E06000041', 'value':3.2},
{ 'code':'E06000042', 'value':5.4},
{ 'code':'E06000043', 'value':-4.8},
{ 'code':'E06000044', 'value':-8.2},
{ 'code':'E06000045', 'value':-8.5},
{ 'code':'E06000046', 'value':4.6},
{ 'code':'E06000047', 'value':1.2},
{ 'code':'E06000049', 'value':1.1},
{ 'code':'E06000050', 'value':1.6},
{ 'code':'E06000051', 'value':4.3},
{ 'code':'E06000052', 'value':5.7},
{ 'code':'E06000053', 'value':-2.2},
{ 'code':'E06000054', 'value':3.8},
{ 'code':'E06000055', 'value':6.7},
{ 'code':'E06000056', 'value':8.6},
{ 'code':'E06000057', 'value':1.0},
{ 'code':'E07000004', 'value':9.3},
{ 'code':'E07000005', 'value':3.4},
{ 'code':'E07000006', 'value':8.3},
{ 'code':'E07000007', 'value':-1.8},
{ 'code':'E07000008', 'value':-5.4},
{ 'code':'E07000009', 'value':2.6},
{ 'code':'E07000010', 'value':-1.7},
{ 'code':'E07000011', 'value':2.7},
{ 'code':'E07000012', 'value':3.2},
{ 'code':'E07000026', 'value':1.7},
{ 'code':'E07000027', 'value':-7.1},
{ 'code':'E07000028', 'value':-0.0},
{ 'code':'E07000029', 'value':-3.3},
{ 'code':'E07000030', 'value':0.8},
{ 'code':'E07000031', 'value':3.5},
{ 'code':'E07000032', 'value':5.0},
{ 'code':'E07000033', 'value':-0.6},
{ 'code':'E07000034', 'value':2.1},
{ 'code':'E07000035', 'value':2.3},
{ 'code':'E07000036', 'value':2.0},
{ 'code':'E07000037', 'value':-0.9},
{ 'code':'E07000038', 'value':0.8},
{ 'code':'E07000039', 'value':9.4},
{ 'code':'E07000040', 'value':9.3},
{ 'code':'E07000041', 'value':2.0},
{ 'code':'E07000042', 'value':1.0},
{ 'code':'E07000043', 'value':0.1},
{ 'code':'E07000044', 'value':5.4},
{ 'code':'E07000045', 'value':9.3},
{ 'code':'E07000046', 'value':6.3},
{ 'code':'E07000047', 'value':3.4},
{ 'code':'E07000048', 'value':13.9},
{ 'code':'E07000049', 'value':6.6},
{ 'code':'E07000050', 'value':4.1},
{ 'code':'E07000051', 'value':2.8},
{ 'code':'E07000052', 'value':9.8},
{ 'code':'E07000053', 'value':2.1},
{ 'code':'E07000061', 'value':5.4},
{ 'code':'E07000062', 'value':2.1},
{ 'code':'E07000063', 'value':11.3},
{ 'code':'E07000064', 'value':8.0},
{ 'code':'E07000065', 'value':12.3},
{ 'code':'E07000066', 'value':5.2},
{ 'code':'E07000067', 'value':1.9},
{ 'code':'E07000068', 'value':4.5},
{ 'code':'E07000069', 'value':5.6},
{ 'code':'E07000070', 'value':1.7},
{ 'code':'E07000071', 'value':0.8},
{ 'code':'E07000072', 'value':3.6},
{ 'code':'E07000073', 'value':-3.8},
{ 'code':'E07000074', 'value':3.9},
{ 'code':'E07000075', 'value':3.1},
{ 'code':'E07000076', 'value':9.7},
{ 'code':'E07000077', 'value':13.2},
{ 'code':'E07000078', 'value':-4.6},
{ 'code':'E07000079', 'value':8.0},
{ 'code':'E07000080', 'value':3.2},
{ 'code':'E07000081', 'value':0.8},
{ 'code':'E07000082', 'value':6.6},
{ 'code':'E07000083', 'value':12.5},
{ 'code':'E07000084', 'value':1.2},
{ 'code':'E07000085', 'value':7.4},
{ 'code':'E07000086', 'value':3.4},
{ 'code':'E07000087', 'value':8.1},
{ 'code':'E07000088', 'value':0.9},
{ 'code':'E07000089', 'value':3.6},
{ 'code':'E07000090', 'value':3.1},
{ 'code':'E07000091', 'value':5.3},
{ 'code':'E07000092', 'value':-7.4},
{ 'code':'E07000093', 'value':8.8},
{ 'code':'E07000094', 'value':4.8},
{ 'code':'E07000095', 'value':-1.1},
{ 'code':'E07000096', 'value':4.5},
{ 'code':'E07000098', 'value':2.6},
{ 'code':'E07000099', 'value':5.3},
{ 'code':'E07000102', 'value':6.2},
{ 'code':'E07000103', 'value':11.6},
{ 'code':'E07000105', 'value':7.9},
{ 'code':'E07000106', 'value':9.8},
{ 'code':'E07000107', 'value':8.1},
{ 'code':'E07000108', 'value':3.6},
{ 'code':'E07000109', 'value':0.9},
{ 'code':'E07000110', 'value':6.5},
{ 'code':'E07000111', 'value':2.6},
{ 'code':'E07000112', 'value':1.6},
{ 'code':'E07000113', 'value':3.6},
{ 'code':'E07000114', 'value':5.8},
{ 'code':'E07000115', 'value':5.0},
{ 'code':'E07000116', 'value':-0.8},
{ 'code':'E07000117', 'value':-5.9},
{ 'code':'E07000118', 'value':10.2},
{ 'code':'E07000119', 'value':10.7},
{ 'code':'E07000120', 'value':-6.6},
{ 'code':'E07000121', 'value':-4.3},
{ 'code':'E07000122', 'value':-3.0},
{ 'code':'E07000123', 'value':-8.3},
{ 'code':'E07000124', 'value':6.4},
{ 'code':'E07000125', 'value':2.6},
{ 'code':'E07000126', 'value':-2.6},
{ 'code':'E07000127', 'value':1.1},
{ 'code':'E07000128', 'value':6.7},
{ 'code':'E07000129', 'value':2.4},
{ 'code':'E07000130', 'value':3.2},
{ 'code':'E07000131', 'value':11.8},
{ 'code':'E07000132', 'value':3.2},
{ 'code':'E07000133', 'value':0.1},
{ 'code':'E07000134', 'value':5.8},
{ 'code':'E07000135', 'value':0.7},
{ 'code':'E07000136', 'value':-4.9},
{ 'code':'E07000137', 'value':4.2},
{ 'code':'E07000138', 'value':-0.7},
{ 'code':'E07000139', 'value':5.8},
{ 'code':'E07000140', 'value':2.0},
{ 'code':'E07000141', 'value':8.3},
{ 'code':'E07000142', 'value':7.4},
{ 'code':'E07000143', 'value':5.3},
{ 'code':'E07000144', 'value':4.1},
{ 'code':'E07000145', 'value':-0.6},
{ 'code':'E07000146', 'value':3.9},
{ 'code':'E07000147', 'value':5.8},
{ 'code':'E07000148', 'value':-5.7},
{ 'code':'E07000149', 'value':12.2},
{ 'code':'E07000150', 'value':5.3},
{ 'code':'E07000151', 'value':0.3},
{ 'code':'E07000152', 'value':6.0},
{ 'code':'E07000153', 'value':3.5},
{ 'code':'E07000154', 'value':-4.3},
{ 'code':'E07000155', 'value':7.0},
{ 'code':'E07000156', 'value':-2.8},
{ 'code':'E07000163', 'value':4.2},
{ 'code':'E07000164', 'value':2.6},
{ 'code':'E07000165', 'value':2.4},
{ 'code':'E07000166', 'value':-1.7},
{ 'code':'E07000167', 'value':7.5},
{ 'code':'E07000168', 'value':-0.2},
{ 'code':'E07000169', 'value':4.5},
{ 'code':'E07000170', 'value':7.7},
{ 'code':'E07000171', 'value':2.9},
{ 'code':'E07000172', 'value':0.2},
{ 'code':'E07000173', 'value':6.4},
{ 'code':'E07000174', 'value':-1.0},
{ 'code':'E07000175', 'value':6.0},
{ 'code':'E07000176', 'value':10.9},
{ 'code':'E07000177', 'value':-1.0},
{ 'code':'E07000178', 'value':-10.1},
{ 'code':'E07000179', 'value':2.9},
{ 'code':'E07000180', 'value':4.3},
{ 'code':'E07000181', 'value':4.2},
{ 'code':'E07000187', 'value':3.4},
{ 'code':'E07000188', 'value':9.2},
{ 'code':'E07000189', 'value':5.1},
{ 'code':'E07000190', 'value':6.1},
{ 'code':'E07000191', 'value':-1.2},
{ 'code':'E07000192', 'value':-2.3},
{ 'code':'E07000193', 'value':-0.6},
{ 'code':'E07000194', 'value':5.2},
{ 'code':'E07000195', 'value':6.0},
{ 'code':'E07000196', 'value':6.2},
{ 'code':'E07000197', 'value':2.2},
{ 'code':'E07000198', 'value':4.4},
{ 'code':'E07000199', 'value':-5.4},
{ 'code':'E07000200', 'value':7.1},
{ 'code':'E07000201', 'value':13.9},
{ 'code':'E07000202', 'value':-3.8},
{ 'code':'E07000203', 'value':6.4},
{ 'code':'E07000204', 'value':2.3},
{ 'code':'E07000205', 'value':6.9},
{ 'code':'E07000206', 'value':5.2},
{ 'code':'E07000207', 'value':5.4},
{ 'code':'E07000208', 'value':8.6},
{ 'code':'E07000209', 'value':-5.2},
{ 'code':'E07000210', 'value':9.1},
{ 'code':'E07000211', 'value':4.2},
{ 'code':'E07000212', 'value':3.8},
{ 'code':'E07000213', 'value':1.9},
{ 'code':'E07000214', 'value':2.9},
{ 'code':'E07000215', 'value':9.8},
{ 'code':'E07000216', 'value':3.4},
{ 'code':'E07000217', 'value':-0.5},
{ 'code':'E07000218', 'value':-2.8},
{ 'code':'E07000219', 'value':-1.4},
{ 'code':'E07000220', 'value':1.4},
{ 'code':'E07000221', 'value':2.6},
{ 'code':'E07000222', 'value':-4.3},
{ 'code':'E07000223', 'value':8.4},
{ 'code':'E07000224', 'value':9.9},
{ 'code':'E07000225', 'value':7.5},
{ 'code':'E07000226', 'value':-5.5},
{ 'code':'E07000227', 'value':6.2},
{ 'code':'E07000228', 'value':9.8},
{ 'code':'E07000229', 'value':6.9},
{ 'code':'E07000234', 'value':8.3},
{ 'code':'E07000235', 'value':9.8},
{ 'code':'E07000236', 'value':-6.0},
{ 'code':'E07000237', 'value':-0.5},
{ 'code':'E07000238', 'value':5.9},
{ 'code':'E07000239', 'value':3.3},
{ 'code':'E07000100', 'value':3.8},
{ 'code':'E07000104', 'value':1.7},
{ 'code':'E07000097', 'value':5.9},
{ 'code':'E07000101', 'value':1.1},
{ 'code':'E08000001', 'value':-2.1},
{ 'code':'E08000002', 'value':-2.2},
{ 'code':'E08000003', 'value':-7.2},
{ 'code':'E08000004', 'value':-2.8},
{ 'code':'E08000005', 'value':-5.4},
{ 'code':'E08000006', 'value':-2.6},
{ 'code':'E08000007', 'value':1.4},
{ 'code':'E08000008', 'value':-2.0},
{ 'code':'E08000009', 'value':4.5},
{ 'code':'E08000010', 'value':0.5},
{ 'code':'E08000011', 'value':-1.5},
{ 'code':'E08000012', 'value':-4.8},
{ 'code':'E08000013', 'value':-0.6},
{ 'code':'E08000014', 'value':-0.0},
{ 'code':'E08000015', 'value':1.1},
{ 'code':'E08000016', 'value':5.0},
{ 'code':'E08000017', 'value':-1.1},
{ 'code':'E08000018', 'value':-1.9},
{ 'code':'E08000019', 'value':-5.2},
{ 'code':'E08000021', 'value':-0.2},
{ 'code':'E08000022', 'value':2.1},
{ 'code':'E08000023', 'value':0.2},
{ 'code':'E08000024', 'value':-3.2},
{ 'code':'E08000025', 'value':-5.2},
{ 'code':'E08000026', 'value':-1.8},
{ 'code':'E08000027', 'value':-0.2},
{ 'code':'E08000028', 'value':-1.2},
{ 'code':'E08000029', 'value':6.4},
{ 'code':'E08000030', 'value':-1.3},
{ 'code':'E08000031', 'value':-3.2},
{ 'code':'E08000032', 'value':-6.8},
{ 'code':'E08000033', 'value':0.0},
{ 'code':'E08000034', 'value':-1.6},
{ 'code':'E08000035', 'value':-2.0},
{ 'code':'E08000036', 'value':1.0},
{ 'code':'E08000037', 'value':-2.2},
{ 'code':'E09000001', 'value':-25.4},
{ 'code':'E09000002', 'value':-1.4},
{ 'code':'E09000003', 'value':-4.8},
{ 'code':'E09000004', 'value':3.6},
{ 'code':'E09000005', 'value':-15.6},
{ 'code':'E09000006', 'value':6.5},
{ 'code':'E09000007', 'value':-7.7},
{ 'code':'E09000008', 'value':-1.7},
{ 'code':'E09000009', 'value':-12.9},
{ 'code':'E09000010', 'value':-5.3},
{ 'code':'E09000011', 'value':-3.3},
{ 'code':'E09000012', 'value':-0.9},
{ 'code':'E09000013', 'value':-16.4},
{ 'code':'E09000014', 'value':-13.5},
{ 'code':'E09000015', 'value':-9.7},
{ 'code':'E09000016', 'value':6.1},
{ 'code':'E09000017', 'value':-1.1},
{ 'code':'E09000018', 'value':-10.6},
{ 'code':'E09000019', 'value':-5.3},
{ 'code':'E09000020', 'value':-8.2},
{ 'code':'E09000021', 'value':-0.3},
{ 'code':'E09000022', 'value':-8.8},
{ 'code':'E09000023', 'value':-4.2},
{ 'code':'E09000024', 'value':-7.2},
{ 'code':'E09000025', 'value':-25.5},
{ 'code':'E09000026', 'value':-4.6},
{ 'code':'E09000027', 'value':2.6},
{ 'code':'E09000028', 'value':-7.7},
{ 'code':'E09000029', 'value':3.9},
{ 'code':'E09000030', 'value':-3.5},
{ 'code':'E09000031', 'value':-14.6},
{ 'code':'E09000032', 'value':-5.3},
{ 'code':'E09000033', 'value':-28.3},
{ 'code':'W06000001', 'value':0.7},
{ 'code':'W06000002', 'value':-6.8},
{ 'code':'W06000003', 'value':5.3},
{ 'code':'W06000004', 'value':5.3},
{ 'code':'W06000005', 'value':0.5},
{ 'code':'W06000006', 'value':-2.7},
{ 'code':'W06000008', 'value':-4.8},
{ 'code':'W06000009', 'value':2.4},
{ 'code':'W06000010', 'value':1.8},
{ 'code':'W06000011', 'value':-2.2},
{ 'code':'W06000012', 'value':-1.0},
{ 'code':'W06000013', 'value':4.7},
{ 'code':'W06000014', 'value':2.3},
{ 'code':'W06000015', 'value':-2.2},
{ 'code':'W06000016', 'value':-1.3},
{ 'code':'W06000018', 'value':-0.5},
{ 'code':'W06000019', 'value':-1.5},
{ 'code':'W06000020', 'value':-0.5},
{ 'code':'W06000021', 'value':6.4},
{ 'code':'W06000022', 'value':-2.4},
{ 'code':'W06000023', 'value':-0.5},
{ 'code':'W06000024', 'value':-2.0}
    ];

    $.getJSON('../data/LAD_DEC_2011_GB_BGC_5PC_1DP.json', function (geojson) {
    //$.getJSON('../data/gb-all.js', function (geojson) {

        // Initiate the chart
        $('#chart').highcharts('Map', {
          chart: {
                backgroundColor: ''
            },

            title : {
                text : 'Map 1: Net flows of internal migrants by local authority, year ending June 2013, per 1,000 mid-2012 population, local authorities in England and Wales'
            },

            mapNavigation: {
                enabled: true,
                buttonOptions: {
                    verticalAlign: 'bottom'
                }
            },

          colorAxis: {
              dataClasses: [{
                  from: -40,
                  to: -5,
                  color: "#375D93"
              }, {
                  from: -5,
                  to: 0,
                  color: "#6A91C6"
              }, {
                  from: 0,
                  to: 5,
                  color: "#8facd4"
              }, {
                  from: 5,
                  color: "#e5ecf5"
              }]
          },

            tooltip: {
                backgroundColor: '#e6e6e6',
                borderWidth: 0,
                shadow: false,
                useHTML: false,
                padding: 0,
                pointFormat: '{point.properties.LAD11NM}' + ' ::{point.code}: <b>{point.value}%</b>'
            },

            series : [{
                data : data,
                mapData: geojson,
                joinBy: ['LAD11CD', 'code'],
                name: 'Net Migration',
                borderColor: '#375D93',
                borderWidth: 0.2,
                states: {
                    hover: {
                        color: 'gold'
                    }
                },
                dataLabels: {
                    enabled: false,
                    format: '{point.properties.LAD11NM}'
                }
            }],
            credits:{
              enabled:false
            },
        });
var myChart = $('#chart').highcharts();

  myChart.mapZoom(0.5, 420074, 314976);
    });


});



