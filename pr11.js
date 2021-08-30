let arr = [2, 2, 3, 4, 5, 5, 6, 6, 7];
let arr1 = [];

for (i = 0; i < arr.length; i++) {
  for (j = i + 1; j < arr.length; j++) {
    if (arr[i] === arr[j] && !arr1.includes(arr[i])) {
      arr1.push(arr[i]);
    }
  }
}
console.log(arr1); //[ 2, 5, 6 ]

let arr2 = arr.filter((val) => !arr1.includes(val));
console.log(arr2); //[ 3, 4, 7 ]
