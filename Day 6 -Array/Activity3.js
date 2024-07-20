// Array Methods
// 1. map - double ech number of the array
let num = [1,2,3,4,5]
let newnum = num.map(doublenum)

function doublenum(num) {
    return num * 2 ;
}
console.log("🚀 ~ newnum:", newnum)



// 2. filter - new array with even number
let arr = [1,2,3,4,5,6,7,8,9,10]
let newarr = arr.filter(evennum)

function evennum(num) {
    return num % 2 === 0
} 
console.log("🚀 ~ newarr:", newarr)

// 3. reduce 
let arr1 = [1,2,3,4,5]
let sum = arr1.reduce(sumall)

function sumall (a , b){
    return a + b;
}
console.log("🚀 ~ sum:", sum)