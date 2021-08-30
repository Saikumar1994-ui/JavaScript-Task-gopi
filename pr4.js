let arr = [2, 2, 4, 3, 4, 2, 3, 3];

// [[2,2,2],[4,4],[3,3,3]]

//let arr1 = [];
// for (i = 0; i < arr.length; i++) {
//   let arr3 = [];
//   for (j = 0; j < arr.length; j++) {
//     if (arr[i] === arr[j]) {
//       arr3.push(arr[i]);
//     }
//   }
//   arr1.push(arr3);
// }
// console.log(arr1);
let res = arr.sort((val1, val2) => val1 - val2);
console.log(res); // [2,2,2,3,3,3,4,4]

let arr2 = Array.from(new Set(arr));
console.log(arr2); // 2,3,4

let result2 = arr2.map((val) => {
  let startIndex = res.indexOf(val);
  let lastIndex = res.lastIndexOf(val);
  return res.slice(startIndex, lastIndex + 1);
});
console.log(result2); //[[2,2,2],[3,3,3],[4,4]]
