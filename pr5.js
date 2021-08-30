let userList = [
  {
    name: "sai",
    city: "hyd",
  },
  {
    name: "gopi",
    city: "khammam",
  },
  {
    name: "praveen",
    city: "hyd",
  },
];
// {hyd:[sai,pravven],khammam:[gopi]}

let res = userList.reduce((obj, { name, city }) => {
  if (!obj[city]) {
    obj[city] = [name];
    return obj;
  } else {
    obj[city].push(name);
    return obj;
  }
}, {});
console.log(res);

let res1 = userList.reduce((obj, { name, city }) => {
  if (!obj[city]) {
    obj[city] = [name];
    return obj;
  } else {
    obj[city].push(name);
    return obj;
  }
}, {});
console.log(res1);
