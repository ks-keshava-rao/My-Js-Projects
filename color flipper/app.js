function changecolor(){
    const randomNumber = getrandom();
    console.log(randomNumber);
     document.body.style.backgroundColor = colors[randomNumber];
     colorc.textContent = colors[randomNumber];
}
function getrandom(){
    return Math.floor(Math.random()*colors.length);
}
const colors = ["green","red","rgba(133,122,200)","#f15023","grey",'yellow','violet'];
const btn = document.getElementById('btn');
const colorc  =  document.querySelector('.color');
 btn.addEventListener('click',changecolor);
 