let arr = [2, 3, 4, 2, 3, 4, 4, 3, 5, 6, 7, 8, 6, 9];
// { '2': 2, '3': 3, '4': 3, '5': 1, '6': 2, '7': 1, '8': 1, '9': 1 }

let countNum = arr.reduce((obj, num) => {
  if (!obj[num]) {
    obj[num] = 1;
    return obj;
  } else {
    obj[num]++;
    return obj;
  }
}, {});
console.log(countNum); //{ '2': 2, '3': 3, '4': 3, '5': 1, '6': 2, '7': 1, '8': 1, '9': 1 }
let arr1 = ["a", "b", "c", "d", "a", "b", "c", "d", "a", "b", "c", "d", "r"];

let counter = arr1.reduce((obj, arr) => {
  if (!obj[arr]) {
    obj[arr] = 1;
    return obj;
  } else {
    obj[arr]++;
    return obj;
  }
}, {});
console.log(counter);
