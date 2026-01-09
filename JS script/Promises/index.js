// let nums = [1,2,2,3,3,3]

// const { use } = require("react");

// let res = nums.reduce((a,c)=>{
//     if(a[c]===undefined){
//         a[c]=1
//     }
//     else{
//          a[c]= a[c]+1
//     }
//     return a
// },{})

// console.log(res)

// let users = [
//   { name: "Amit", age: 21, isActive: true },
//   { name: "Sneha", age: 17, isActive: false },
//   { name: "Rahul", age: 25, isActive: true },
//   { name: "Neha", age: 16, isActive: true }
// ];

// let data = users.map((names)=> names.name)

// console.log(data)


// let data = users.filter((user)=>user.isActive===true&&user.age>18).map((user)=>user.name)
// let data = users.reduce((a,c)=>{
//     a += c.age
//     return a
// },0)/users.length

// console.log(data/users.length)
// console.log(users.length)
let users = [
  { name: "Amit", age: 21, isActive: true },
  { name: "Sneha", age: 17, isActive: false },
  { name: "Rahul", age: 25, isActive: true },
  { name: "Neha", age: 16, isActive: true }
];

// let data = users.reduce((a,c)=>{

//     c.isActive ? a.active++ : a.inactive++

//     return a

// },{active:0,inactive:0})

// console.log(data)

let data = users.reduce((a,c)=>{
    c.age>18 ? a.above18.push(c.name): a.below18.push(c.name);
    return a;
},{below18:[],above18:[]})

console.log(data)