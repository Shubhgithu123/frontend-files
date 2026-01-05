// let p1 ={
//     fname : "shubham",
//     lname : "wangekar",
//     arr : ['amol',29,'sneha',26],
//     obj:{
//         address:"lakshmi chowk"
//     },
//     fun: function(){
//         console.log(this.fname)
//     },
    
    
// } 

// let p2 ={
//     ...p1
// }

// p1["is-student"] = true
//accesing object values
// console.log(p1)
// console.log(p1["is-student"])


// p2.obj.address = "hinjewadi"
// p2.fname = "akanksha"
// console.log(p2)
// p2.fun()
// p1.fun()
// console.log(p1)
// p2.arr[0] = "shub"
// console.log(p2)
// console.log(p1)



// let p1 ={
//     fname : "shubham",
//     lname : "wangekar",
//     arr : ['amol',29,'sneha',26],
//     obj:{
//         address:"lakshmi chowk"
//     },
//     fun: function(){
//         console.log(this.fname)
//     },
    
    
// } 

// let arr = Object.keys(p1)
// // console.log(arr)

// for(let keys of arr){
//     console.log(keys)
// }

//creating function in objects

// const user = {
//     name:"shubham",
//     age:22,
//     emailId:"shubhamwangekar2002@gmail.com",
//     amount:35000,
//     greeting:function(){
//         console.log(`hello shubham ${this.name}`)
//     }

// }

// const user2 = {
//     ...user
// }

// console.log(user2)
// user2.name = "amol"
// user.greeting ()
// user2.greeting()

// const obj = {
//     name : "shubham"
// }

// // obj.role = "mern dev"
// const {name : newuser,role:newrole="Developer"} = obj

// console.log(newuser)
// console.log(role)



// console.log(obj)
// console.log(newrole)


let users = [
  { name: "Amit", age: 21, isActive: true },
  { name: "Sneha", age: 17, isActive: false },
  { name: "Rahul", age: 25, isActive: true },
  { name: "Neha", age: 16, isActive: true }
];

// let result = users.filter((user)=> user.age>=18&& user.isActive=== true)

// let result = users.map((user)=> user.name)

let result = users.filter((user)=> user.isActive).map((user)=>user.name)




console.log(result)