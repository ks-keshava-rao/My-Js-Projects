function hexcolor(){
    let hexCode = "#"
    for(let i = 0 ;i<6;i++){
    hexCode = hexCode + hex[0];
    }
    colorc.textContent = hexCode;
    document.body.style.backgroundColor = hexCode;
}
const hex = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
const btn = document.getElementById('btn');
const colorc = document.querySelector('.color');
btn.addEventListener('click',hexcolor)

