
var rowLimit=30;
var cellLimit=60;

var table = document.getElementById("editor-table");
var header = table.createTHead();
	
for (var rowCounter = 0; rowCounter < rowLimit; rowCounter++) {
	var row = header.insertRow(0);
	for (var cellCounter = 0; cellCounter < cellLimit; cellCounter++) {
		row.insertCell(0);
		console.log('row', rowCounter, 'col',  cellCounter);
}}