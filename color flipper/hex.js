function hexcolor(){
    let hexCode = "#"
    for(let i = 0 ;i<6;i++){
    hexCode = hexCode + hex[getrandom()];
    }
    colorc.textContent = hexCode;
    document.body.style.backgroundColor = hexCode;
}
function getrandom(){
    return Math.floor(Math.random()*hex.length)
}
const hex = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
const btn = document.getElementById('btn');
const btns = document.getElementById('btns');
const colorc = document.querySelector('.color');
btn.addEventListener('click',hexcolor);
btns.addEventListener('click',()=>{
    document.body.style.backgroundColor = "white";
    colorc.textContent = "Click to Change";
})
