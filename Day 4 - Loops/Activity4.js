// Nested Loop
// Star pattern

let num = 5
for(let i = 1; i<=num; i++)
{
    let stars = ""
    for(let j = 1; j<=i; j++)
    {
        stars += "* "
    }
    console.log(stars);
}