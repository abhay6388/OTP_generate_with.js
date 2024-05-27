let ref=document.getElementById("ref");
let box=document.getElementById("box");

function genCap(){
    var str="";
    for(var i=0;i<5;i++){
        str+=Math.floor(Math.random()*10);

    }
    box.innerText=str;
   
}
ref.addEventListener("click",genCap);




