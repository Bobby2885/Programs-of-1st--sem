let btn =document.querySelector("button");
let div =document.querySelector("div");

btn.addEventListener(
    "click",generateColor
);

function generateColor(){
    let h4 = document.querySelector("h4");
    let newColor =getRendom();   
    h4.innerText = newColor;
    div.style.backgroundColor = newColor;

    // console.log(
    //     alert("color was update"))
};
function getRendom(){
    let red = Math.floor(Math.random()*225);
    let green= Math.floor(Math.random()*225);
    let blue = Math.floor(Math.random()*225);

    let color=`rgb(${red},${green},${blue})`;
    return color;
};