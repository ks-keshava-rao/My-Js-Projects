let count = 0 ;
const val = document.querySelector("#value");
const btn = document.querySelectorAll(".btn");
 btn.forEach(function(item){
    item.addEventListener("click",function(e){
        console.log(e.currentTarget.classList);
        const getclass  = e.currentTarget.classList;
        if(getclass.contains('decrease')){
            count--;
        }
    })
 })
