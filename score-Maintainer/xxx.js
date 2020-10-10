let p1= document.getElementById("firstplayer");
let p2=document.getElementById("secondplayer");
let p1counter=0;
let p2counter=0;
let va1= document.getElementById("fst");
let va2 = document.getElementById("scnd");
let reset= document.querySelector("#reset");
let check = false;
let mxpl = 5;
let display = document.querySelector("#winner");
let inp =document.querySelector("#inp");
let p= document.querySelector("p span");
let h1 = document.querySelector("#h1");
let toggle = document.getElementById("111");
let bodyx = document.querySelector("body");

h1.style.color = "#32CD32";
va1.addEventListener("click",function(){
    if(mxpl>0){
    if(!check){
        p1counter++;
        if(p1counter === mxpl){
            check=!check;
            p1.classList.add("win");
            display.textContent=" Player 1 is winner!!";
        }
        p1.textContent=p1counter;
    }
}
})

toggle.addEventListener("click", function(){
    if(toggle.innerHTML=="OFF"){
        toggle.textContent="ON";
        bodyx.classList.remove("day");
        bodyx.classList.add("night");
        toggle.style.borderColor= "white";
    }
    else if(toggle.innerHTML=="ON"){
        toggle.textContent="OFF";
        bodyx.classList.remove("night");
        bodyx.classList.add("day");
        toggle.style.borderColor= "black";
    }
})
va2.addEventListener("click",function(){
    if(mxpl>0){
    if(!check){
        p2counter++;
        if(p2counter === mxpl){
            check= !check;
            p2.classList.add("win");
            display.textContent=" Player 2 is winner!!";
    }
        p2.textContent=p2counter;
    }
}
})

function resetx(){
    p1counter=0;
    p2counter=0;
    check= false;
    p1.textContent="0";
    p2.textContent= "0";
    if(p1.classList.contains("win"))
    p1.classList.remove("win");
    if(p2.classList.contains("win"))
    p2.classList.remove("win");
    display.textContent="";
}

reset.addEventListener("click",function(){
    resetx()
});

inp.addEventListener("change", function(){
    p.textContent= inp.value;
    mxpl= Number(inp.value);
    if(mxpl>0){
        resetx();
    }
})