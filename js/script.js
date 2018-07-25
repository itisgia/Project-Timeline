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
      [ 'January', new Date(2018, 1, 21), new Date(2018, 1, 31) ],
      [ 'Febrary', new Date(2018, 2, 4),  new Date(2018, 2, 13) ],
      [ 'March',  new Date(2018, 3, 1),  new Date(2018, 3, 30) ],
      [ 'April',  new Date(2018, 4, 4),  new Date(2018, 4, 28) ],
      [ 'May',  new Date(2018, 5, 1),  new Date(2018, 5, 19) ],
      [ 'June',  new Date(2018, 6, 4),  new Date(2018, 6, 24) ],
      [ 'July',  new Date(2018, 7, 1),  new Date(2018, 7, 21) ],
    ]);

    var options = {
      colors: ['#83a1d1', '#ba86a5', '#82b588'],
    };

    chart.draw(dataTable, options);
}
