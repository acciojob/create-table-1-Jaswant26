function insert_Row() {
  // Get a reference to the table element by its ID
  var table = document.getElementById("sampleTable");

  // Create a new row element
  var newRow = table.insertRow(0); // 0 means the new row will be inserted at the top

  // Create two cells for the new row
  var cell1 = newRow.insertCell(0);
  var cell2 = newRow.insertCell(1);

  // Set the content of the new cells
  cell1.innerHTML = "New Cell1";
  cell2.innerHTML = "New Cell2";
}
