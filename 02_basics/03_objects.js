// singleton
//Object.create

// object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "Rishav",
    "full name": "Rishav Raj",
    [mySym]: "mykey1",
    age: 20,
    location: "Bengaluru",
    email: "rishav@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

JsUser.email = "rishav@chatgpt.com"
//Object.freeze(JsUser)
JsUser.email = "rishav@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello Js user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello Js user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());


