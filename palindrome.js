// cheking the given number is palindrome or not
/*let num = 121;
let originalNum = num;
let reverse = 0;

while (num != 0) {
  reverse = reverse * 10 + (num % 10);
  num = Math.floor(num / 10);
}

if (originalNum == reverse) {
  console.log("this is a palindrome", reverse);
} else {
  console.log("this is not a palindrome", reverse);
}*/

// checking given string is palendrome or not

function palindrome(val) {
  reversed = val.split("").reverse().join("");
  if (reversed === val) {
    return true;
  } else {
    return false;
  }
}
console.log(palindrome("level")); // eye, redivider, rotor, level
