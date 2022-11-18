function showSalary(users, age) {
  let finalStroke = ('');
  let finalArray = [];
  let i = 0;
  while (i < users.length) {

    if (users[i].age <= age) {

      finalArray[i] = '\n' + users[i].name + ', ' + users[i].balance;

    }

    i++;
    
  }
  finalStroke = finalArray.join('');
  return finalStroke = finalStroke.slice(1);
}

