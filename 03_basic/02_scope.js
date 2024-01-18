
if(true){
    let a = 10;
    const b = 20;
    // var c = 50;
    // console.log(a); 
    // console.log(b);
    // console.log(c);
}

// console.log(a); // not define
// console.log(b); // not define
// console.log(c); // result 50   c is define in block scope but we can access it out of the block scope that is not good for code

function one(){
    
    function two(){
        let name = "dhirendra";
        // console.log("Have a good day")
        // console.log(name);
    }
    // console.log(name)// throwing a error because name variable is in function two scope

    two();
}

one();


if (true){
    let username = "sachin";
    if(username === "sachin"){
        let email = "example.com"
    //     console.log(username);
    //     console.log(email)
    }
    // console.log(email); throwing error
}


// =======================================hoisting=======================================


console.log(num(5))
function num(value) {
    return value + 1;
}


// console.log(result(5));// throwing error
let result = function addtwo(num){
    return num + 2;
}

console.log(result(5))

