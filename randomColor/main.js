const container = document.querySelector(".container");
for (let index = 0; index < 30; index++) {
    const colorEl = document.createElement("div");
    colorEl.classList.add("color-div");
    container.appendChild(colorEl)
    const colorSpan = document.createElement("span");
    colorSpan.classList.add("text");
    colorEl.appendChild(colorSpan);
}

const colorEl = document.querySelectorAll(".color-div");

generateColor()
function generateColor(){
    colorEl.forEach((col)=>{
        const newColor = randomColor();
        col.style.backgroundColor = "#" + newColor;
        col.innerText = "#" + newColor
    })
}
function randomColor(){
    const chars = "0123456789abcdef";
    const colorCodeLength = 6;
    let color = "" ; 
    for(let i = 0; i<colorCodeLength; i++){
        const randomNum = Math.floor(Math.random()*chars.length);
        color += chars.substring(randomNum,randomNum+1);   
    }
    console.log(color)
    return color;
}