// There are two types of data types
// Primitive datatypes

// string, number, boolean, null, undefined, bigInt, symbol

//string

let name = "Dhirendra Singh";

// Number 

let score = 33;

//boolean

let isloggedIn = true;

// null

let pressure = null;

// undefined

let logic;

//big int 

let bigNumber = 89345778435658329n;

// symbol

const str1 = Symbol("hello");
const str2 = Symbol("hello");
console.log(str1 === str2) // false




// reference (non-primitive) data types

// Array, object, funcitons

//Array 

let lords = ["lordRama", "lord Hanuman", "lord Shiva"];

// Objects

let myObject = {
    name: "Ram",
    age: 28
}

// functions

let myFunction = function something() {
    console.log("hello world")
}


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//Memory
// stack and Heap memory-----------

//stack memory gives us copy not acutal value;


let myVillageName = "Ram Basera";

let myNewVillageName = myVillageName;

myNewVillageName = "Shyam Basera"

console.log(myVillageName); // => Ram Basera;
console.log(myNewVillageName)// => Shyam Basera;



//Heap memory gives us actual value---


let myDocument = {
    email: "google@example.com",
    password: "googleKnows"
}

let myDocument1 = myDocument;

myDocument1.email = "hotmail.com"

console.log(myDocument.email); // => hotmail.com
console.log(myDocument1.email) // => hotmail.com