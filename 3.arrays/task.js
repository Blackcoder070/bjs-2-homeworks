function compareArrays(arr1, arr2) {
  let result;

  // Ваш код
  result = arr1.length === arr2.length && arr1.every((value, index) => value === arr2[index]);

  return result; // boolean
}

function advancedFilter(arr) {
  let resultArr;

  // Ваш код
  resultArr = arr.filter(value => value > 0).filter(value => value % 3 === 0).map(value => value * 10)

  return resultArr; // array
}
