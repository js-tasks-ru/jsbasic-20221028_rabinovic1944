////let vasya = { name: 'Вася', age: 25 };
////let petya = { name: 'Петя', age: 30 };
////let masha = { name: 'Маша', age: 28 };

////let users = [vasya, petya, masha];

////alert('lets start');



//for (let key in petya)
//  {
//    alert(petya[key]);
//  }


function namify(users) {

  let usersNames = users.map(item => item.name);
  return usersNames;
  
}



//namify(users);
