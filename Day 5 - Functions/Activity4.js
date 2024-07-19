// Function Parameters and Default Values

const product = (x , y = 5) => x * y;
console.log(product(2)); // 10


const personDetail = (name , age = 23) =>{ return console.log(`${name} is ${age} years old`) }
personDetail("Vishal")
