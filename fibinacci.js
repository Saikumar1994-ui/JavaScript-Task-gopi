let a = 0;
let b = 1;
let result = b;

for (i = 1; i <= 5; i++) {
  result = a + b;
  a = b;
  b = result;
  console.log(result); // 2,3,5,8
}
