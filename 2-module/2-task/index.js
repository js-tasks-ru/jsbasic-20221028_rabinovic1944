
function isEmpty(obj) {
  // ваш код...
  let counter = 0;
  for (let key in obj) { counter++; }
  if (counter > 0) { return false; }
  else {return true;}
    
}
