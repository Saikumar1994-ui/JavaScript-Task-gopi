let users = [
  {
    name: "sai",
    skills: ["c", "java", "js", "react"],
  },
  {
    name: "gopi",
    skills: ["c", "java", "js"],
  },
  {
    name: "praveen",
    skills: ["c", "java", "react"],
  },
];
let arr = [];
users.forEach((val, index) => {
  val.skills.includes("react") && arr.push(val.name);
});

console.log(arr);

let res = users.reduce((val, { skills, name }) => {
  if (skills.includes("react")) {
    val.push(name);
    return val;
  } else {
    return val;
  }
}, []);
console.log(res);
