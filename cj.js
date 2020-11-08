//factorial = (n) => {
//    if (n==0) {
//        return 1;
//    } else {
//        return factorial(n -1) * n
//    }
//}

//factorial(6)

//let theNumber = Number(prompt("pick a number"));
//if (!Number.isNaN(theNumber))
// {
//    console.log("Fizz");
//    }else{
//    console.log("Buzz");
// }
let num = Number(("pick a number"));

if (num < 10) 
{
    console.log("Fizz");
} 
    else if (num < 100) 
    {
        console.log("Buzz");
    }
        else {
            console.log("FizzBuzz");
        }