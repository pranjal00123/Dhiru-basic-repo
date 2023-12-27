// // length of an Array==================================================
// const famuousCities = ["Delhi", "Pune", "Kanput", "Bangluru", "Noida"];
// console.log("arraylength", famuousCities.length);

// //covert array into string==================================

// let arrayToStr = famuousCities.toString();
// console.log("arry to string", arrayToStr);

// // join method in Array==========================================
// let numbers = [1, 2, 3, 4, 5, 6, 7];

// let arrayJoinMethod = numbers.join("|");
// console.log("array join method", arrayJoinMethod); // 1|2|3|4|5|6|7

// // Delete element in array

// console.log(delete numbers[4]); // true
// console.log(numbers); // [ 1, 2, 3, 4, <1 empty item>, 6, 7 ]
// console.log(numbers.length);

// // Concat method in array
// let num1 = [1, 2, 3, 4, 5, 6];
// let num2 = [11, 12, 13, 14, 15];
// let num3 = [21, 22, 23, 24, 25];

// let finalnum = num1.concat(num2, num3);
// console.log(finalnum); // [1,  2,  3,  4,  5,  6, 11, 12, 13, 14, 15, 21, 22, 23, 24, 25 ]

// // flat method in array

// const nestedArray = ["a", "b", "c", [1, 2, 3, 4, ["city", undefined, NaN]]];

// let flatArray = nestedArray.flat(Infinity);
// console.log("flatArray", flatArray); // flatArray [ 'a', 'b', 'c', 1, 2, 3, 4, 'city', undefined, NaN ]

// const objectiveArray = [
//   "name",
//   "class",
//   {
//     number: "1224",
//     road: "HSR road",
//     heigh: [21, 23, 25, 28],
//   },
//   ["the ganga", "the yamuna", [1234, 67, "history"]],
// ];

// console.log("objectiveArray", objectiveArray.flat(Infinity)); // objectiveArray [ 'name', 'class', { number: '1224', road: 'HSR road', heigh: [ 21, 23, 25, 28 ] },
// //     'the ganga',
// //     'the yamuna',
// //     1234,
// //     67,
// //     'history'
// //   ]

// // Array Push method

// const books = [
//   "revolution 2020",
//   "two states",
//   "Harry Potter and the prisionor of Askban",
// ];

// books.push("the spritual world", "the lost island");

// console.log("books", books); //books [ 'revolution 2020',  'two states', 'Harry Potter and the prisionor of Askban', 'the spritual world', 'the lost island']

// let count = [1, 2, 3, 4];

// let count2 = [
//   11,
//   [
//     22,
//     33,
//     {
//       name: "ram",
//       news: { news: "aajtak", channel: "news channel" },
//       age: "23",
//     },
//     44,
//     55,
//   ],
//   66,
//   77,
// ];
// count.push(count2);
// console.log("newcount", count);

// let finalCount = count2.flat(Infinity);
// console.log("count2", count2); //count2 [ 11, [ 22, 33, { name: 'ram', news: [Object], age: '23' }, 44, 55 ],66,77]

// console.log("Final count", finalCount);

// // unshift method is used to add elements in beginning of an array array =================================

let name = ["ram", "shyam", "george", "raman"];
name.unshift("hanuman");
console.log("add name", name); // [ 'hanuman', 'ram', 'shyam', 'george', 'raman' ]
// Pop method pop element from the end of an array; ===============================

name.pop();
console.log("name array after pop", name); // [ 'hanuman', 'ram', 'shyam', 'george' ]

// shift method is used to remove elemets form the beginning of an array;=================================
name.shift();
console.log("name array after shift ", name); //  [ 'ram', 'shyam', 'george' ]

//================= Splice Method ==================
//this method used for the insertion and removal of elements in between Array======
// Array.splice(start, delecteCount, item1, item2 , ....)

const country = [
  "Nigeria",
  "Burundi",
  "Afganistan",
  "Vatican City",
  "Srilanka",
];

country.splice(0, 2);
console.log("country after removeing splice method", country); // country [ 'Afganistan', 'Vatican City', 'Srilanka' ]

country.splice(2, 0, "India", "Butan", "China");

console.log("country after inserting splice method", country); // [ 'Afganistan', 'Vatican City', 'India', 'Butan', 'China', 'Srilanka' ]

//=================== slice method ==================
//this method returns a new array containing a protion of the original array.
// Array.slice(startIndex, endIndex)
//startIndex and endIndex are optional

const orignalNumArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let newArray = orignalNumArray.slice(4, 7);
console.log("orignalNumArray after slice", newArray); // [5, 6, 7] return a new array

let newArray1 = orignalNumArray.slice(-3);
console.log("starting index value is", newArray1); //[ 8, 9, 10 ] when we give starting index negative index start from the end of the array

let newArray2 = orignalNumArray.slice(-3, 4);
console.log("startindex negative and endIndex is positive", newArray2); // []

let newArray3 = orignalNumArray.slice(4, -3);
console.log("staring index positive and endindex is negative", newArray3); // [5, 6, 7]

let newArray4 = orignalNumArray.slice(7);
console.log("only starting index is given: ", newArray4); // [8, 9, 10]

// ================= array some method ===========================
// this method checks at least one element of the array satisfies the condition check by the agrument of the fuction;

// function isGreater (element) {
//     return element > 5
// }

// function myfuction () {
//     let myArray = [ 1, 3, 4.5, 5.1 ];
//     let myArray2 = [0, 3, 4, 4.9];
//     let valueSatisfy = myArray2.some(isGreater)
//     let satisfies = myArray.some(isGreater);
//     console.log("satisfy", satisfies); // true
//     console.log("valueSatisfy", valueSatisfy); //false
// }

// myfuction(); // true


// ============== reduce method =================================

function reduceArray(num1, num2){
    return num1 + num2
}

let num = [40, 50, 10, 38];

let result = num.reduce(reduceArray);
console.log("result", result); // result 138

const reduceMethod = (arg1, arg2) =>{
    return arg2 - arg1;
}

let result2 = num.reduce(reduceMethod);
console.log("result2", result2) // result 38

// =============== map method====================

let squareNum = [ 121, 576, 4096, 100, 625];

console.log(squareNum.map((data)=>Math.sqrt(data)));

