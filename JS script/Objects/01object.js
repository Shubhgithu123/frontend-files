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

const obj = {
    name : "shubham"
}

// obj.role = "mern dev"
const {name : newuser,role:newrole="Developer"} = obj

// console.log(newuser)
// console.log(role)



console.log(obj)
console.log(newrole)

