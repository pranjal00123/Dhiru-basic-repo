// function name(params) {
    
// }

function aphabets_list() {
    console.log("d")
    console.log("h")
    console.log("i")
    console.log("r")
    console.log("e")
    console.log("n")
    console.log("d")
    console.log("r")
    console.log("a")
}

// aphabets_list();

function Two_number_sum(num1, num2){
    if(typeof num1 === "number" && typeof num2 === "number"){
        console.log(`sum of two numbers is ${num1 + num2}`)
    } else {
        console.log("only accepts integers")
    }
}

Two_number_sum(5, 3); // result 8 
Two_number_sum(5,"3") // only accepts intergers

// Arrow function ================================================


const greeting = (name) => {
    console.log(`hello ${name} how are you!`)
}

greeting(); // undefined
greeting("Raj"); // hello Raj how are you!


 function squareNum(num){
    let result = num * num
    return result;
}

console.log(squareNum(5));

