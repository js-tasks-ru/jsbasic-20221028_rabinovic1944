function makeDiagonalRed(table) {

  let counter = table.rows.length-1;

  while (counter > -1) {
    
    table.rows[counter].cells[counter].style.backgroundColor = 'red';
    counter--;

  }

}
