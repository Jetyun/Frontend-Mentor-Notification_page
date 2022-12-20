const num= document.querySelector("#num")
const notifiedS= document.querySelectorAll(".-unread_style_bg")
const redDotS= document.querySelectorAll(".-unread_symbol")
const option= document.querySelector("#option")

option.addEventListener("click", ()=>{
num.innerHTML="0";
redDotS.forEach(redDot => {
    redDot.classList.remove("-unread_symbol") 
});
notifiedS.forEach(notified => {
    notified.classList.remove("-unread_style_bg") 
});



})