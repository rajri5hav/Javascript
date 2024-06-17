const user = {
    username: "rishav",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

// user.welcomeMessage()
//  user.username = "sam"
//  user.welcomeMessage()

 //console.log(this);

//  function chai(){
//     let username = "rishav"
//     console.log(this.username);
//  }

//  chai()

// const chai = function () {
//     let username = "rishav"
//     console.log(this.username);
// }

const chai =  () => {
    let username = "rishav"
    console.log(this);
}


//chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) => num1 + num2

// const addTwo = (num1, num2) => (num1 + num2)     // curly braces ka use hua to return keyword likhna hoga
// paranthesis ka use hua to returnnhi likhna hoga 

const addTwo = (num1, num2) => ({username: "rishav"})
console.log(addTwo(3, 4))



