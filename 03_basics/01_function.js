function sayMyName(){
    console.log("R");
    console.log("I");
    console.log("S");
    console.log("H");
    console.log("A");
    console.log("V");

}

//sayMyName()

// function addTwoNumbers(number1, number2){      // here in the paranthesis are parameters
//     console.log(number1 + number2);     
// }


function addTwoNumbers(number1, number2){      
    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3, 5) 

//console.log("Result:", result);


function loginUserMessage(username = "sam"){
    if(!username){
        console.log("Please enter a username"); 
        return
    }
    return `${username} just logged in` 
}

//console.log(loginUserMessage("rishav"))
//console.log(loginUserMessage())


function calculateCartPrice(val1, val2, ...num1){
    return num1
}

//console.log(calculateCartPrice(200, 400, 500, 2000));

const user = {
    username: "rishav",
    prices: 199
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}

//handleObject(user)
handleObject({
    username: "sam",
    price: 399
})


const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

//console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));

