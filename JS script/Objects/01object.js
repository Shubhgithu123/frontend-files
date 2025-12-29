let p1 ={
    fname : "shubham",
    lname : "wangekar",
    arr : ['amol',29,'sneha',26],
    obj:{
        address:"lakshmi chowk"
    },
    fun: function(){
        console.log(this.fname)
    }
} 

let p2 ={
    ...p1
}

//accesing object values
console.log(p1["fname"])

// p2.obj.address = "hinjewadi"
// p2.fname = "akanksha"
// console.log(p2)
// p2.fun()
// p1.fun()
// console.log(p1)
// p2.arr[0] = "shub"
// console.log(p2)
// console.log(p1)
