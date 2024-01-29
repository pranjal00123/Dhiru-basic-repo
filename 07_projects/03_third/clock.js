document.querySelector(".time").innerHTML = `<h3>Local time<h3/>`
let time = document.querySelector(".clock")
setInterval(()=>{
    let date = new Date();
    let currentTime = date.toLocaleTimeString();
    time.innerHTML = `<h3>${currentTime}</h3>`
},1000)