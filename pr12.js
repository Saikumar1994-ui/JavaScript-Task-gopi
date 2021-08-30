let arr = [[3, 2], [1], [4, 12]];
let sum = 0;

for (i = 0; i < arr.length; i++) {
  for (j = 0; j < arr[i].length; j++) {
    sum = sum + arr[i][j];
  }
}
console.log(sum); //
