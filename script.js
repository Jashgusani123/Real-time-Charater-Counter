let textarea = document.getElementById("RTCC");
let textcount = document.getElementById("text-count") ;
let remaining = document.getElementById("Remaining");

textarea.addEventListener("keyup" , function (){
    let length = textarea.value.length;
    // console.log(length);
    textcount.innerText = length;
    remaining.innerText = 50-textcount.innerText;
    
})