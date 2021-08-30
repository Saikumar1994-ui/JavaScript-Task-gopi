let arr = [2, 4, 5, 6, 2, 4, 6, 7, 6, 3, 5, 2, 7];
let arr2 = [];

let arr3 = Array.from(new Set(arr));
console.log(arr3); //[ 2, 4, 5, 6, 7, 3 ]

for (i = 0; i < arr3.length; i++) {
  let arr4 = [];
  for (j = 0; j < arr.length; j++) {
    if (arr3[i] === arr[j]) {
      arr4.push(arr3[i]);
    }
  }
  arr2.push(arr4);
}
console.log(arr2);
// [ [ 2, 2, 2 ], [ 4, 4 ], [ 5, 5 ], [ 6, 6, 6 ], [ 7, 7 ], [ 3 ] ]
