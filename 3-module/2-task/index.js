function filterRange(arr, a, b) {
  // ваш код...
  let arrOutput = [];
  arr.forEach(selectItem);
  function selectItem(item) {

    if ((a <= item) && (item <= b)) {
    arrOutput = arrOutput.concat(item);
    }
       
  }
  return arrOutput;
}

//let arr = [5, 3, 8, 1];
//let resultM = filterRange(arr, 1, 4);
//alert('and now...');
//alert(resultM);
