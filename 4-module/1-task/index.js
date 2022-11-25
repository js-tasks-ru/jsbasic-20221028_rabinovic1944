
function makeFriendsList(friends) {

  let friendList = document.createElement('ul');
  let oneFriend = [];

  for (let key in friends) {
    oneFriend[key] = document.createElement('li');
    oneFriend[key].innerHTML=  friends[key].firstName + ' ' + friends[key].lastName ;
    friendList.append(oneFriend[key]);
  }

  return friendList;

}

