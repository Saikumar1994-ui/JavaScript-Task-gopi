let arr = [2, 3, 4, 9];
let arr1 = [2, 7, 0, 8, 9, 3];

// separete the common dupplicates from the both arraus
let arr2 = [];
for (i = 0; i < arr.length; i++) {
  for (j = i; j < arr1.length; j++) {
    if (arr[i] == arr1[j]) {
      arr2.push(arr[i]);
    }
  }
}
console.log(arr2);

// sortcut way
let res = arr.filter((val) => arr1.includes(val));
console.log(res);
