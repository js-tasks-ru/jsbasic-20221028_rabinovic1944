function camelize(str) {
  
  let arrayTemp = str.split('-');
  alert(arrayTemp);
  let i = 0;
  while (i++ < (arrayTemp.length - 1)) {

    let capFirstLetter = arrayTemp[i][0].toUpperCase();
    let restOfStroke = arrayTemp[i].slice(1);
    let newStroke = capFirstLetter + restOfStroke;
    arrayTemp[i] = newStroke;

      }
    
  let strOutput = arrayTemp.join('');
  return strOutput;
  
}

