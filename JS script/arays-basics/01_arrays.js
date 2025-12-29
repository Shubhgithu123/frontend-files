// let arr = [1,2,3,4,5];

// // console.log(arr[0])
// // console.log(arr[arr.length-1])

// for(let i = 0; i<arr.length; i++){
//     console.log(arr[i])
// }

// let arr = [10,20,30];

// arr.push(40)

// console.log(arr)

// arr.pop()

// console.log(arr)

//unshift() → add at the start

// let arr = [20,30,40]

// arr.unshift(10)

// console.log(arr)

// // shift() → remove from the start
// arr.shift()

// console.log(arr)

// let arr = [10,20,30,40]

// function sumArray( arr) {
//     let sum = 0; 
//     for(let i = 0 ; i < arr.length ; i++){
//         sum = sum + arr[i]
//     }
//     // console.log(sum)
//     return sum;
// }
// sumArray(arr)

//find maximum element from array
// function findMax(arr){
//     let max = arr[0];
//     for(let i =1 ; i<arr.length ; i++){
//         if(arr[i]>max){
//             max = arr[i];
//         }
//     }
//     // return max;
//     console.log(max)
// }

// findMax([723,36,12,54]);


//finding minmum from array
// function findMin(arr){
//     let min = arr[0];
//     for(let i = 1; i<arr.length;i++){
//         if(arr[i]<min){
//             min = arr[i];
//         }
//     }
//     // console.log(min)
//     return min
// }
// findMin([10 , 4, 67,3297]); 


// seperate even and odd from array

// function separateEvenOdd(arr){
//     let even =[]
//     let odd = []

//     for(let i =0 ; i< arr.length;i++){
//         if((arr[i]%2)===0){
//             even.push(arr[i]);
//         }
//         else{
//             odd.push(arr[i]);
//         }
//     }
//     return [even,odd];
// }

// // separateEvenOdd([1, 2, 3, 4, 5, 6])
// console.log(separateEvenOdd([1, 2, 3, 4, 5, 6]))

// function arrayAverage(arr){
//     let sum = 0;
//     for(let i =0;i<arr.length;i++){
//         sum = sum + arr[i];
//     }
//     let average = sum / arr.length;
//     return average
// }
// arrayAverage([1,2,3,4,5])

//reverse an array without build in funtions 

// function reverse(arr){
//     let rev = [];
  
//     for(let i =arr.length-1 ; i>-1;i--){
//         rev.push(arr[i])
//     }
//    return rev
// }
// // console.log(reverse([1,2,3]))
// reverse([1,2,3])


// function reverse(arr){
//     let rev = [];
//     let j =0;
//     for(let i =arr.length-1 ; i>-1;i--){
//         // for(let j = 0; j<=arr.length;j++){
//         //     rev[j] = arr[i]
//         // }
//         if(j<=arr.length){
//             rev[j]=arr[i];
//             j++;
//         }
//     }

//     console.log(rev)
//     // return rev
// }
// // console.log(reverse([1,2,3]))
// reverse([1,2,3])

//no extra space 

// function reverse(arr){
//     let start =0;
//     let end = arr.length-1
//     while(start<end){
//         let temp = arr[start]
//         arr[start]= arr[end]
//         arr[end] = temp;

//         start++;
//         end--;
//     }
//     return arr;
//     // console.log(arr)
// }
// reverse([1,2,3])


// Problem 1: Check if Array is Sorted (Ascending)

// function isSorted(arr){
//     for(let i = 0; i < arr.length - 1; i++){
//         if(arr[i] > arr[i + 1]){
//             return false;
//         }
//     }
//     return true;
// }

// let sol = isSorted([4,5,6,7]);
// console.log(sol); // true


//second largest element

// let largest = -Infinity;
// let secondLargest = -Infinity;

// foreaach (element){
//     if(element > largest){
//         secondLargest = largest;
//         largest = element;
//     }
//     else if(element > secondLargest && element < largest){
//         secondLargest = element;
//     }
// }


// let sol = secondLargest([10,20,30,40])
// console.log(sol)

//left rotated array by 1

// function rotate(arr){

//     let temp = arr[0];
//     for(let i = 0;i<arr.length;i++){
//         arr[i]= arr[i+1];
//     }
//     arr[arr.length-1]= temp;
//     return arr;
// }
// rotate([1,2,3,4])
// // console.log(rotate([1,2,3,4]))

//moves zeros to end

// function moveZeros(arr){
//   let temp = 0;
//   for(let i =0;i<arr.length ; i++){
//         if(arr[i]!==0){
//             arr[temp]=arr[i];
//             temp++;
//         }
//   }
//   for(let i = temp ;i<arr.length;i++){
//     arr[i]=0
//   }
//    console.log(arr)
// }
// moveZeros([0,1,0,3,12])


// Remove duplicate elements from an array while keeping order.

// function removeDuplicate(arr){
//     let unique = []
//     for(let i =0;i<arr.length;i++){
//         let isduplicate = false;
//         for(let j = 0 ; j<unique.length;j++){
//             if(unique[j]===arr[i]){
//                 isduplicate=true
//                 break;
//             }
            
//         }
//          if(!isduplicate){
//                 unique.push(arr[i])
//             }
//     }
//     console.log(unique)
// }

// removeDuplicate([1,2,2,3,1])