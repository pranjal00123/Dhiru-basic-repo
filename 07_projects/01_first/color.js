let colorbutton  = document.querySelectorAll(".button");
let body = document.querySelector("body")
console.log(colorbutton);

colorbutton.forEach((button)=>{
    button.addEventListener("click", function(e){
        let value = e.target.id;
        if(value === "red"){
            body.style.backgroundColor = "red"
        } else if(value === "green"){
            body.style.backgroundColor = "green"
        } else if(value === "grey"){
            body.style.backgroundColor = "grey"
        } else {
            body.style.backgroundColor = "white"
        }
    }) 
})

