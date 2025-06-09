let count = 0;
let incr=()=>{
    let display=document.querySelector("#show")
    count++;
    display.innerHTML=count;
}
let decr=()=>{
    let display=document.querySelector("#show")
    if(count>0){
        count--;
        display.innerHTML=count;
    }
}