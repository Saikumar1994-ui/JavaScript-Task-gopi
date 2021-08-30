/*var a, b;
for (a = 2; a <= 10; a++) {
  var c = true;
  for (b = 2; b < a; b++) {
    if (a % b == 0) {
      c = false;
      break;
    }
  }
  if (c) {
    console.log(a);
  }
}*/

function isPrime(n) {
  if (n < 2) {
    return `${n} it is not a prime number `;
  }
  for (let i = 2; i < n; i++) {
    if (n % i == 0) {
      return `${n} is not a prime number `;
    } else {
      return `${n} is a prime number`;
    }
  }
}
console.log(isPrime(5));
