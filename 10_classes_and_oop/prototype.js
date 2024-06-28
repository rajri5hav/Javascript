// let myName = "hitesh     "
// let mychannel = "chai    "

// console.log(myName.truelength);


let myheros = ["thor", "spiderman"]


let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`spidy power is ${this.spiderman}`);
    }
}

Object.prototype.rishav = function(){
    console.log(`rishav is present in all objects`);
}

Array.prototype.heyrishav = function(){
    console.log(`rishav says hello`);
}

//heroPower.rishav()
// myheros.rishav()
// myheros.heyrishav()
//heroPower.heyrishav()

// inheritance

const User = {
    name: "chai",
    emial: "chai@google.com"
}


const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__= User


// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "ChaiAurCode      "
String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"rishav".trueLength()
"iceTea".trueLength()
