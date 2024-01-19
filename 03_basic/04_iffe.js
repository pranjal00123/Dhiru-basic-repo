// IIFI - Imideatly Invoke Function Expression

function code(){
    console.log("DB Connection")
}

code();

(function code1() {
    // named IFFI
    console.log("DB Connection 1")
})();

((name) => {
    //un named IFFI
    console.log(`hello ${name}, have a great day`)
})("Dhirendra singh")


