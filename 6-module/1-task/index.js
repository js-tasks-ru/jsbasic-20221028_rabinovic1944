/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      }
 * <thead>
        <tr> <th>Имя</th> <th>Возраст</th> <th>Зарплата</th> <th>Город</th> <th></th> </tr>
      </thead>
 *
 */
export default class UserTable {
  constructor(rows) {

    
    let counter = rows.length-1;
    let tableStroke = [];
    let table = document.createElement('table');
    let tableBody = document.createElement('tbody');
    let tableHeader = document.createElement('thead');
    tableHeader.innerHTML = '<tr> <th>Имя</th> <th>Возраст</th> <th>Зарплата</th> <th>Город</th> <th></th> </tr>';
    table.append(tableHeader);

      while (counter > -1 ){

          tableStroke[counter] = document.createElement('tr');
          tableStroke[counter].id = 'table'+ counter;
          tableStroke[counter].innerHTML = '<td>' + rows[counter].name + '</td> <td>' + rows[counter].age + '</td> <td>' + rows[counter].salary + '</td>  <td>' + rows[counter].city + '</td>  <td>' + '<button onclick = document.querySelector("#table'+counter + '").remove()' + '>X</button> </td> ';
          tableBody.append(tableStroke[counter]);
          table.append(tableBody);

        counter --;
        }

    return table.elem = table;


  }
}
