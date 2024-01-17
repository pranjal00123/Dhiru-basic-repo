//singleton 
// Object.create

//Object literals
let mySymbol = Symbol("myKey1");

let myObject = {
    key: "value",
    name: "Dhirendra",
    age: 27,
    email: "dhiru@example.com",
    "full name": "Dhirendra Singh",
    [mySymbol]: "key2",
    attendence: ["monday", "tuesday", "friday", "saturday"]
}

// console.log(myObject.name);
// console.log(myObject["full name"]);
// console.log( typeof myObject.mySymbol); // string that is not correct because we declare it as a symbol so we declare it in square bracket in an object
// console.log(myObject[mySymbol]);
// console.log("myObject", myObject);

// myObject.email = "dhirendra@microsoft.com";
// console.log("myobject", myObject);
// // Object.freeze(myObject);
// myObject.email = "ram@gamil.com"
// console.log("myObject", myObject);// value is not changing because we freeze the object

myObject.greeting = function(){
    return "hello, how are you";
}

console.log(myObject.greeting);// function is not excuting but showing function
console.log(myObject.greeting());

myObject.greetingTwo = function(){
    return (`hello, how are you ${this.name}`)
}
console.log(myObject.greetingTwo());






