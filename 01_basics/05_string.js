const name = "rishav"
const repoCount = 50

// console.log(name + repoCount + " value");     // this syntax is outdated

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);
// use backtics instead of outdates syntax. this is known as string manipulation.

const gameName = new String('rishav-raj')     // another way of declaring string.

console.log(gameName[0]);
console.log(gameName.__proto__);


console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(5));             // for finding kis index pe koun sa character hai
console.log(gameName.indexOf('s'));


const newString = gameName.substring(0, 4)
console.log(newString);                          // last digit does not count.

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newstringOne = "  rishav  "  
console.log(newstringOne);
console.log(newstringOne.trim());                 // remove spaces 

const url = "https://rishav.com/rishav%20raj"

console.log(url.replace('%20', '-'));

console.log(url.includes('rishav'))

console.log(gameName.split('-'));


