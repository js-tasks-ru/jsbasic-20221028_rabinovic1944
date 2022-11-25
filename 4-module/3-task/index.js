function highlight(table) {

  let tableBodyRows = table.children[1].children;
  let counter = table.rows.length - 2;
  
  while (counter > -1) {

    if (tableBodyRows[counter].children[3].dataset.available == 'true') {

      tableBodyRows[counter].classList.add('available');

    }

    else if (tableBodyRows[counter].children[3].dataset.available == undefined) {

      tableBodyRows[counter].hidden = true;

    }

    else {

      tableBodyRows[counter].classList.add('unavailable')

    }

    if (tableBodyRows[counter].children[2].innerText == 'm') {

      tableBodyRows[counter].classList.add('male');

    }

    else {

      tableBodyRows[counter].classList.add('female')

    }

    if (Number(tableBodyRows[counter].children[1].innerText) < 18) {

      tableBodyRows[counter].style = "text-decoration: line-through";

    }

    counter--;
  }

}
