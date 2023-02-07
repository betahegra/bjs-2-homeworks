function getArrayParams(...arr) {
  let min = Infinity;
  let max = -Infinity;
  let sum = 0;
  let avg = 0;
  for (let i = 0; i < arr.length; i++) {
      if (max < arr[i]) {
        max = arr[i];
      };
      if (min > arr[i]) {
        min = arr[i];
      };
      sum += arr[i];
  };
  avg = sum / arr.length;
  return { min: min, max: max, avg: Number(avg.toFixed(2)) };
}

function summElementsWorker(...arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    };
    return sum;
}

function differenceMaxMinWorker(...arr) {
  let min = Infinity;
  let max = -Infinity;
  let difference = 0;
  if (arr.length === 0) {
    return 0;
  }
  for (let i = 0; i < arr.length; i++) {
    if (max < arr[i]) {
      max = arr[i];
    };
    if (min > arr[i]) {
      min = arr[i];
    };
  };
  return difference = max - min;
}

function differenceEvenOddWorker(...arr) {
  let sumEvenElement = 0;
  let sumOddElement = 0;
  let difference = 0;
  for (i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sumEvenElement += arr[i];
    }
    if (arr[i] % 2 != 0) {
      sumOddElement += arr[i];
    };
  };
  return difference = sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...arr) {
  sumEvenElement = 0;
  countEvenElement = 0;
  result = 0;
  if (arr.length === 0) {
    return 0;
    }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      countEvenElement++;
      sumEvenElement += arr[i];
    };
  };
  return result = sumEvenElement / countEvenElement;
}

function makeWork (arrOfArr, func) {
  maxWorkerResult = -Infinity;
  for (let i = 0; i < arrOfArr.length; i++) {
    const result = func(...arrOfArr[i])
    if (result > maxWorkerResult) {
      maxWorkerResult = result;
   }
  }
  return maxWorkerResult;
}
