let array1 = ["name", 1, 0.1, true, undefined, NaN];

console.log(array1);

// let array2 = new Array();

// array2[0] = "city";
// array2[2] = undefined;
// array2[5] = 12;

// console.log(typeof array2)

// let array3 = new Array("name", undefined, Symbol, 1234, NaN, {"name":"dhirendra"});

// console.log("array3", array3);
// console.log("typeof array3[5]", typeof array3[5])
// console.log("array3[5]", array3[5]);

// let array4 = new Array(4);

// console.log("array4", array4);
// console.log(typeof array4);

// console.log('arrya to string', )

// change value of an element in Array============================================

// let hero = ["Shaktimaan", "Arymaan", "Junior G"]
// console.log(hero)

// hero[1] = "Hanuman"

// console.log(hero);

// Array change into string =======================================================

// let newArray = array1.toString();

// console.log("newArray", newArray);
// console.log("typeof newArray", typeof newArray); // string

// Increase and decrease length of Array =======================================================

// array1.length = 10;

// console.log(array1.length);

// loop through array =====================================================

// for (let i = 0; i < array1.length; i++) {
//   console.log(array1[i]);
// }

// array1.forEach(myFunc);

// function myFunc(element){
//     console.log("elements",element)
// }


// Adding new elements in Array ===============================================================

// const csLang = ["java", "javaScript", "python", "c++"];
// console.log("orignal cslang array", csLang)
// csLang.push("HTML");

// let newArray = csLang;

// console.log("array after adding an element", newArray);s


// Arrays are Objects====================================================================

const csLang = ["java", "javaScript", "python", "c++"];
console.log("type of csLang",typeof csLang);

// Recognizing an Array==============================================================

console.log("csLang is an array method using Array.isArray() :", Array.isArray(csLang));
console.log("csLang is an array method using instanceof :", csLang instanceof Array);



