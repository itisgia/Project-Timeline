google.charts.load("current", {packages:["timeline"]});
google.charts.setOnLoadCallback(drawChart);


function drawChart() {
    console.log('has loaded');
    var container = document.getElementById('chartContainer');
    var chart = new google.visualization.Timeline(container);
    var dataTable = new google.visualization.DataTable();
    dataTable.addColumn({ type: 'string', id: 'ProJect Activity' });
    dataTable.addColumn({ type: 'date', id: 'Start' });
    dataTable.addColumn({ type: 'date', id: 'End' });
    dataTable.addRows([
      [ 'Research', new Date(2018, 7, 26), new Date(2018, 8, 29) ],
      [ 'Proposal', new Date(2018, 7, 28),  new Date(2018, 7, 29) ],
      [ 'Survey',  new Date(2018, 8, 1),  new Date(2018, 8, 3) ],
      [ 'April',  new Date(2018, 4, 4),  new Date(2018, 4, 28) ],
      [ 'May',  new Date(2018, 5, 1),  new Date(2018, 5, 19) ],
      [ 'June',  new Date(2018, 6, 4),  new Date(2018, 6, 24) ],
      [ 'July',  new Date(2018, 7, 1),  new Date(2018, 7, 21) ]
    ]);

    var options = {
      colors: ['#83a1d1', '#ba86a5', '#82b588', '#ad7d79', '#797087', '#b2829c'],
    };

    chart.draw(dataTable, options);
}
