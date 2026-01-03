// slice 

// const arr = [10,20,30,40,50]

// const arr1 = arr.slice(2,4)

// console.log(arr1)

// console.log(arr)

//sorting 
//1> ascending order
// this sort method mutates original array
// const arr = [71,10,49,5,11]

// const  br = arr.sort((a,b)=>a-b)
// arr.sort((a,b)=>a-b)
// console.log(br)
// console.log(arr)
// arr.reverse()
// console.log(arr)

//descending order
// arr.sort((a,b)=>b-a)
// console.log(arr)

// arr.sort()


// // console.log(arr)
// const arr = [10,30,50,[34,[69],34],57,99]
// const ar = arr.flat(3)
// const ar = arr.flat(Infinity)
// console.log(ar.sort((a,b)=>a-b))
// console.log(ar)

// forEach, filter, reducer,map,set

// const arr = [10,20,30,90]
// arr.forEach((number,i,arr)=>{
//     console.log(number,i,arr)
//     // console.log(number*10)
//     // return number*10
// })
// arr.forEach((,,arr)=>{
// })
// console.log(ar)
// const arr = [10,20,30,90,5,87]

// const arr1 = arr.filter((n)=> n>25)

// console.log(arr1)
// console.log(arr)
// arr.filtering = function (compare){
//     // return compare(n)
//     let arr1 =[]
//     for (const num of this) {
//         if(compare(num)){ 
//             arr1.push(num)
//         }
//     }
//     return arr1
// }

// let newArr = arr.filtering((num)=>num>25)
// console.log(newArr)
// // function compare(n){
// //     let empty =[]
// //     for(let i =0;i<this.length;i++){
// //         if(arr[i]>n){
// //             empty.push(arr[i])
// //         }
// //     }
// //     return empty
// // }
// // arr.compare(9)


// const arr = [10,20,30,40,50,80]

// const newarr = arr.map((n)=> n*2)

// console.log(newarr)

const products = [
  // Electronics
  { id: 1, name: "Laptop", category: "Electronics", price: 1200, inStock: true },
  { id: 2, name: "Headphones", category: "Electronics", price: 200, inStock: true },
  { id: 3, name: "Smartphone", category: "Electronics", price: 800, inStock: false },
  { id: 4, name: "Monitor", category: "Electronics", price: 300, inStock: true },
  { id: 5, name: "Keyboard", category: "Electronics", price: 75, inStock: true },

  // Books
  { id: 6, name: "The Hobbit", category: "Books", price: 25, inStock: true },
  { id: 7, name: "A Brief History of Time", category: "Books", price: 30, inStock: true },
  { id: 8, name: "Dune", category: "Books", price: 28, inStock: false },

  // Appliances
  { id: 9, name: "Coffee Maker", category: "Appliances", price: 150, inStock: false },
  { id: 10, name: "Blender", category: "Appliances", price: 80, inStock: true },
  { id: 11, name: "Toaster", category: "Appliances", price: 45, inStock: true },
  { id: 12, name: "Microwave Oven", category: "Appliances", price: 220, inStock: true },

  // Clothing
  { id: 13, name: "T-Shirt", category: "Clothing", price: 20, inStock: true },
  { id: 14, name: "Jeans", category: "Clothing", price: 60, inStock: false },
  { id: 15, name: "Jacket", category: "Clothing", price: 110, inStock: true },

  // Home Goods
  { id: 16, name: "Desk Lamp", category: "Home Goods", price: 35, inStock: true },
  { id: 17, name: "Scented Candle", category: "Home Goods", price: 15, inStock: true },
  { id: 18, name: "Picture Frame", category: "Home Goods", price: 22, inStock: false },

  // Groceries
  { id: 19, name: "Organic Apples", category: "Groceries", price: 5, inStock: true },
  { id: 20, name: "Artisan Bread", category: "Groceries", price: 8, inStock: true }
];

// const arr = products.filter((n)=> n.category==="Electronics"&&n.price>200).sort((a,b)=>a.price-b.price)

// const arr = products.reduce((accumulator,currenValue,index)=>{
//         console.log(`current index:${index} and accumulator value:${accumulator}`)
//         return accumulator+currenValue.price
// },0)

// console.log(`total : ${arr}`)


//set

const arr = ["shub@gm","aka@gam","ggg@gm","shubh@gm","shub@gm"]
console.log(arr)
// const emailUnique = [...new Set(arr)]

// console.log(emailUnique)

//u can you for of to iterate 


//map data structure
//unlike object this allowss to store any type of data
//it also stores the values in key value pair 






