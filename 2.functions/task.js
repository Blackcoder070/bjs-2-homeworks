// Задание 1
function getArrayParams(arr) {
  let min, max, sum, avg;
  
  // Ваш код
  min = Infinity;
  max = -Infinity;
  sum = 0;
  avg = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }

    if (arr[i] < min) {
      min = arr[i];
    }    
    sum += arr[i];
  }

  avg = +(sum / arr.length).toFixed(2);

  return { min, max, avg };
}

console.log(getArrayParams([32, 43, 353, -492]));

// Задание 2
function worker(arr) {
  let sum;

  // Ваш код
  sum = 0;
  for(let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return sum;
}

 function makeWork(arrOfArr, func) {
   let max;

  //  Ваш кода
   max = func(arrOfArr[0]);
  // for ...
  for(let i = 0; i < arrOfArr.length; i++) {
   if(func(arrOfArr[i]) > max) {
    max = func(arrOfArr[i]);
   }
  }
  return max;
}
console.log(makeWork([[10,10,20],[20,19,10]],worker));

// Задание 3
function worker2(arr) {
  // Ваш код
  let min = arr[0];
  let max = arr[0];
  let difference = 0;
  for (let i = 0; i < arr.length; i++){
    if(arr[i] > max){
      max = arr[i]; 
    }
    if(arr[i] < min){
      min = arr[i];
    }
    difference = (Math.abs(max - min));
  }
  return difference;
}