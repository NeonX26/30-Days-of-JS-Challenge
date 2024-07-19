// Arrow Function
// calculate sum of 2 numbers and return the result'

const sum = (x,y) => x + y;
console.log(sum(2,3));



// check if the string contains specific char
const findChar = (str, char) =>{
    for(let i = 0; i < str.length; i++){
        if (str[i] === char) {
            return (`${char} fount at index ${i}`)
        }
        else
        {
        return (`${char} is not found in ${str}`)
        }
    }
}
console.log(findChar('hello', 'a'));