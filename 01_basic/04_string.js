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


const checkString = (input) => {
    return typeof input === "string" ? "string" : "not string"
}

console.log(checkString("1234"))

const emptyString = (input) => {
    if(typeof input !== "string"){
       return "input type is not string"
    } else {
        return input.length > 0 ? "stirng is not empty" : "empty string"
    }
}

console.log(emptyString(1));


let covertString = (input) =>{
    return input.split(" ");
}

console.log(covertString("now a days govind is in full action"))

let shortForm = (input) =>{
    return input.substr(0, 4);
}

console.log(shortForm("Govind yadav"))


const abbreviateString = (input) => {
    let obj = input.trim().split(" ")
    if(obj.length > 1){
        return obj[0] + " " +obj[1].charAt(0);
    }
    return obj[0];
}

console.log(abbreviateString("Dhirendra Singh"));

const protect_email = (email) => {
    let split_mail = email.split("@");
    let part1 = split_mail[0]
    let part2 = split_mail[1];
    let avg = Math.floor(part1.length/2);
    part1 = part1.substr(0, (part1.length-avg));
    return part1 + "...@" + part2;
}

console.log(protect_email("manishsingh@hotmail.com"));

const parameterized_sting = (input) => {
    let input_string = input.toLowerCase()
    let newString = input_string.replaceAll(" ", "-")
    return newString;
}

console.log(parameterized_sting("MY NAME IS DHIREDRA SINGH"));


const strNew = "allinOneCase"

console.log(strNew.replace("all", "new all"));

console.log(strNew.slice(0,6))

console.log(strNew.substring(2, 6))


console.log(strNew.substr(5, 2));


const  words = "Happy, power, leader, somthing, power"

console.log(words.replace("power", "shakti"))

console.log(words.replaceAll("power", "shakti"))


const firstString = "my name is ";
const secondSting = "Dhirendra"

console.log(firstString.concat(secondSting)); // my name is dhirendra singh


console.log("this is a new page    ".trim() + " of javascript")// this is a new page of javascript;

let newWord = "something"

// console.log(newWord.padStart(20, "click"));


console.log("hello world")


