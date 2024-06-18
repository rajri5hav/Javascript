const userEmail = []

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("don't have user email");
}

// falsy values 

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// truethy values
// "0", 'false', " ", [], {}, function(){} 


// checking of an empty array
// if (userEmail.length === 0) {
//     console.log("Array is empty");
// }


// checking of an empty object
const emptyobj = {}
if (Object.keys(emptyobj).length === 0) {
    console.log("Object is empty");
}


// Nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
//val1 = undefined ?? 15
val1 = null ?? 10 ?? 20



console.log(val1);

// Terniary Operator

//condition ? trur : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")