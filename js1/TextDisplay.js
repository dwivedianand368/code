// let Remove=()=>{
//     let text = document.querySelector("#move")
//     text.innerHTML = "<h1> Anand </h2>"
// }



const Remove=()=>{
    let visibility = document.querySelector("#text");

    if(visibility.style.display == "none"){
        visibility.style.display == "block"
    }else{
        visibility.style.display = "none"
    }
}