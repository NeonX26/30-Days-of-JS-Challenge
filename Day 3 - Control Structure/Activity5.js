// Combining Condition
// leap year 

let year = 2003

if ((year % 4 == 0) && (year % 100 != 0) || (year % 400 == 0))
{
    console.log(`${year} is Leap year`);
}
else
{
    console.log(`${year} is not a Leap year`)
}