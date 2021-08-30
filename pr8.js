let str = "Hellow World";
//[ 'wolleH', 'dlroW' ]

let str1 = str.split(" ").map((val) => val.split("").reverse().join(""));
console.log(str1); //[ 'wolleH', 'dlroW' ]
