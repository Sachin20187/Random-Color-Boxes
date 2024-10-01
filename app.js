const container = document.querySelector(".container");

for(let index=0;index<30;index++){
    const box = document.createElement("div");
    box.classList.add("box");
    container.appendChild(box);
}

const boxes = document.querySelectorAll(".box");
console.log(boxes);
generateColor();

//generate random colors for boxes
function generateColor(){
    boxes.forEach((box)=>{
        let newColorCode = randomCode();
        box.style.backgroundColor = "#" + newColorCode;
        box.innerText = "#"+ newColorCode;
        console.log(box.innerText);
    })
}

//Generate random code for colors
function randomCode(){
    const chars = "0123456789abcdef";
    const charCodeLength = 6;
    
    let code="";

    for(let i=0;i<charCodeLength;i++){
        let randomNum = Math.floor(Math.random()*chars.length);
        code += chars.substring(randomNum, randomNum+1);
    }
    return code;
}

//Refresh button
const btn = document.querySelector("#btnRefresh");
btn.addEventListener("click", ()=>{
    window.location.reload();
});
