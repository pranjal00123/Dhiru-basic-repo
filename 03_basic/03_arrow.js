let user = {
    username: "newUser",
    price: "999",
    welcomeGreetingMessage: function(){
        console.log(`welcome ${this.username}`);
        console.log(this)
    }
}

user.welcomeGreetingMessage();
user.username = "Sam";
user.welcomeGreetingMessage();

console.log(this)// empty object


// ============================== Arrow function ===============================


// let validateUser = (codeNum, secretNum) => {
//     return codeNum + secretNum
// }

let validateUser = (codeNum, secretNum) => codeNum + secretNum;

console.log(validateUser(1123, 568))

let validateUser2 = (codeNum, secretNum) => ({username: "dhirendra"})

console.log(validateUser2());

