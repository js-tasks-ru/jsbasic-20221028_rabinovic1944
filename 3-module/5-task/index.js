
//  const inputData = '1 и -5.8 или 10 хотя 34 + -5.3 и 73';

function getMinMax(str) {

  let finalObject = {
    min: 0,
    max: 0,
  }

  let workArray = str.split(' ');

  // Seek for first workArray_element === Number and assign it to both min and max :

  for (j = 0; j < workArray.length; j++) {

    if (Number(workArray[j]) != NaN) {

      finalObject.min = finalObject.max = Number(workArray[j]);

      break;
    }
    
  }

  // Seek for real min and max :

  let i = 0;
  while (i < workArray.length) {

    if (Number(workArray[i]) != NaN) {
      if (finalObject.min > Number(workArray[i])) {
        finalObject.min = Number(workArray[i]);
      }

      if (finalObject.max < Number(workArray[i])) {
        finalObject.max = Number(workArray[i]);
      }
            
    }

    i++;

  }
   
  return finalObject;
}


//alert('lets start again');
//let resultObject = getMinMax(inputData);
//alert(resultObject.maxResult);
