// Higher-order Function
// A function that receives a function as an argument or returns a function as a result is called 

const welcomemsg = () => console.log("Hello");

const great = (welcomemsg , num ) => {
    for(let i = 0; i <= num; i++)
    {
        welcomemsg();
    }
}
great(welcomemsg , 5);


const fullname = (fname , lname) => {
    let FullName = (`${fname} ${lname}`) 
    return FullName
}
console.log("🚀 ~ fullname:", fullname("Vishal","Jatti"))
