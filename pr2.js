let arr = [2, 2, 3, 3, 4, 3, 2, 6, 8, 9, 0, 4, 4];
let arr1 = [];

// using for loop for displaying duplicates only
for (i = 0; i < arr.length; i++) {
  for (j = i + 1; j < arr.length; j++) {
    if (arr[i] === arr[j] && !arr1.includes(arr[i])) {
      arr1.push(arr[i]);
    }
  }
}
console.log(arr1); // 2,3,4

// sort way
let res = Array.from(new Set(arr));
console.log(res); // 2,3,4,6,8,9,0

//

let val = Array.from(
  new Set(arr.filter((val, index) => arr.indexOf(val) !== index))
);
console.log(val); // 2,3,4
