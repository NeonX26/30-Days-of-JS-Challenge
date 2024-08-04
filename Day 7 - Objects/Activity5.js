// Object Iteration
// use a for in loop to iterate over the propertie of the book object and log each property and its value.  
const book = {
    title : "javascript",
    author : "John Doe",
    year : 2010
}

for(let b1 in book){
    console.log(b1 + " - "+ book[b1]);    
}

// use object.key and object.values methods to log all the keys and values of the book object
console.log("Keys : " + Object.keys(book));
console.log("Values : " + Object.values(book));
