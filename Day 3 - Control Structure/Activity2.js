// Nested If-Else Statements
// largest number among three numbers 
let num1 = 16
let num2 = 17
let num3 = 18

if (num1 > num2) {
    if (num1 > num3) {
        console.log(`${num1} is greater`);    
    }
}
else if (num2 > num3)
{
    console.log(`${num2} is greater`);
}
else
{
    console.log(`${num3} is greater`);
}