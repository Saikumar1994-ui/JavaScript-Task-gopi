let num = 153;
let num3 =
  num
    .toString()
    .split("")
    .map((val) => Math.pow(val, 3))
    .reduce((num1, num2) => num1 + num2) == num
    ? "armstrong"
    : "not a armstrong";

console.log(num3);

let num4 =
  num
    .toString()
    .split("")
    .map((val) => Math.pow(val, 3))
    .reduce((num4, num5) => num4 + num5) == num
    ? "this is amstrong"
    : "this is not a amstrong";

console.log(num4);
