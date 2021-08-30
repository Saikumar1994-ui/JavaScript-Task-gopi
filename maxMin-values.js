let arr = [1, 2, 0, 44, 777];
let maxVal = 0;
let minVal = 0;
for (i = 0; i <= arr.length; i++) {
  if (arr[i] >= maxVal) {
    maxVal = arr[i];
  }
  if (arr[i] <= minVal) {
    minVal = arr[i];
  }
}
console.log(maxVal);
console.log(minVal);
