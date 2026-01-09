// // // let p1 ={
// // //     fname : "shubham",
// // //     lname : "wangekar",
// // //     arr : ['amol',29,'sneha',26],
// // //     obj:{
// // //         address:"lakshmi chowk"
// // //     },
// // //     fun: function(){
// // //         console.log(this.fname)
// // //     },
    
    
// // // } 

// // // let p2 ={
// // //     ...p1
// // // }

// // // p1["is-student"] = true
// // //accesing object values
// // // console.log(p1)
// // // console.log(p1["is-student"])


// // // p2.obj.address = "hinjewadi"
// // // p2.fname = "akanksha"
// // // console.log(p2)
// // // p2.fun()
// // // p1.fun()
// // // console.log(p1)
// // // p2.arr[0] = "shub"
// // // console.log(p2)
// // // console.log(p1)



// // // let p1 ={
// // //     fname : "shubham",
// // //     lname : "wangekar",
// // //     arr : ['amol',29,'sneha',26],
// // //     obj:{
// // //         address:"lakshmi chowk"
// // //     },
// // //     fun: function(){
// // //         console.log(this.fname)
// // //     },
    
    
// // // } 

// // // let arr = Object.keys(p1)
// // // // console.log(arr)

// // // for(let keys of arr){
// // //     console.log(keys)
// // // }

// // //creating function in objects

// // // const user = {
// // //     name:"shubham",
// // //     age:22,
// // //     emailId:"shubhamwangekar2002@gmail.com",
// // //     amount:35000,
// // //     greeting:function(){
// // //         console.log(`hello shubham ${this.name}`)
// // //     }

// // // }

// // // const user2 = {
// // //     ...user
// // // }

// // // console.log(user2)
// // // user2.name = "amol"
// // // user.greeting ()
// // // user2.greeting()

// // // const obj = {
// // //     name : "shubham"
// // // }

// // // // obj.role = "mern dev"
// // // const {name : newuser,role:newrole="Developer"} = obj

// // // console.log(newuser)
// // // console.log(role)



// // // console.log(obj)
// // // console.log(newrole)


// // let users = [
// //   { name: "Amit", age: 21, isActive: true },
// //   { name: "Sneha", age: 17, isActive: false },
// //   { name: "Rahul", age: 25, isActive: true },
// //   { name: "Neha", age: 16, isActive: true }
// // ];

// // // let result = users.filter((user)=> user.age>=18&& user.isActive=== true)

// // // let result = users.map((user)=> user.name)

// // let result = users.filter((user)=> user.isActive).map((user)=>user.name)




// // console.log(result)

// // function get(arr, index) {
// //   if (index < 0) {
// //     console.log(arr.length,index)
// //     console.log(arr.length + index)
// //     return arr[arr.length + index];
// //   }
// //   return arr[index];
// // }

// // let arr = [10, 20, 30];
// // console.log(get(arr, -1)); 
// // console.log(get(arr, -3));

// // let a = new Number(undefined);
// // console.log(a.toPrecision(2))

// // let a = [10,20,30,40,5]

// // let b = a.slice();

// // console.log(b)

// // b[0] = b[0]*2

// // console.log(b)

// // console.log(a)

// // let a = [{x:1}, {x:2}];
// // // let b = a.slice();
// // // let b = a.concat(a)
// // let  b = [...a]

// // console.log(b)

// // let c = {
// //   ...a,
// //   instuction:"Hello shubam"
// // }

// // console.log(c)
 
// // let {"0":first,"1":second} = c

// // console.log(first,second)

// // console.log(first.x)

// // b[0].x = 99;
// // console.log(b)
// // console.log(a); // ❗ change ho jaayega

 
// // function Billing(amount){
// //   let bill = 0
// //   this.amount = Number(amount)
// //   if(this.amount>1000){
// //     bill = Math.floor(this.amount*(10/100))
// //     console.log(`Your bill is : ${this.amount-bill} \n Got 10% disount ${bill}`)
// //   }
// //   else{
// //     console.log(`You'll need to pay full bill Sir`)
// //   }
// // }

// // Billing(2080)

// // function checktruthy (value){
// //   if(value){
// //     console.log(`thruthy : ${value}`)
// //   }
// //   else{
// //     console.log(`falsy : ${value}`)
// //   }
// // }
// // checktruthy("")
// // checktruthy([])
// // checktruthy({})
// // checktruthy(2)
// // checktruthy(-1)
// // checktruthy(+1)
// // checktruthy('+a')
// // checktruthy(0/10)
// // checktruthy(0)
// // checktruthy([false,false,false])
// // checktruthy([1,2,3])
// // checktruthy({shubham:[false,false,false]})
// // checktruthy(false)
// // checktruthy(true)


// let userActivity = [
//   {user : "Alice" , activityCount : 45},
//   {user : "Bob" , activityCount : 73},
//   {user : "Charlie" , activityCount : 33},
// ] 

// let result = userActivity.reduce((acc , curr)=>{
//   if(curr.activityCount> acc.activityCount){
//     console.log("1")
//     return curr
//   }
//   else{
//     console.log("")
//     return acc
//   }
// })

// console.log(result)


// let nums = [1, 2, 3, 4, 5];
// // let nums = [2, 3, 4];
// // let result = nums.reduce((a,c)=> a+c ,0)
// // let result = nums.reduce((a,c)=> a*c ,1)


// console.log(result)

// let nums = [7, 2, 9, 4];

// let result = nums.reduce((a,c)=> a>c? a : c)

// console.log(result)

// let fruits = ["apple", "banana", "apple", "orange", "banana"];

// let result = fruits.reduce((a,c)=>{
//  if(a===undefined){
//   a = 1
//  }
//  else{
//   a= a+1
//  }
//  return a
// },{})

// console.log(result)

// // let res = [10, 20, 30].reduce((acc, curr) => ,[])
// console.log(res)

// let nums = [10, 5, 20, 8];

// let result = nums.reduce((a,c)=> c>a?a=c : a,0)
// console.log(result)

let nums = [1, 2, 3, 4, 5, 6];

let result = nums.reduce((sum , curr)=>{
    if((curr%2)===0){
     sum = sum+curr
    }
    return sum
},0)
console.log(result)