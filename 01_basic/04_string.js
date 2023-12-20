let myGameName = "Mishima";

console.log(`my game name is ${myGameName} and game level is ${myGameName.indexOf("a") + 1}`)

// string.charAt() ---------------

console.log(myGameName.charAt(4)); // => index no 4 = i 

//string.concat(); -------------------

let str1 = "Hello";
let str2 = "World";

console.log(str1.concat(" ", str2))
console.log(str2.concat(" ",str1));


let greetList  = ["hello", " ", "Your Name", " "]
console.log("".concat(...greetList)) // hello Your Name

//string.fontcolor()------------

let hero = "shaktiman"
console.log(hero.fontcolor("red"))


//string.inculdes()----------

const sentence = 'The quick brown fox jumps over the lazy dog.';

let word = "fox";
let secondWord = "grapes";

console.log(`the word ${word} ${sentence.includes(word) ? "is" : "is not"} present and second word ${secondWord} ${sentence.includes(secondWord) ? "is" : "is not"} present in the sentence`)



//