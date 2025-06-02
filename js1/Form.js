let formValidate=()=>{
    let inpname = document.querySelector("#name").value
    let inpnum = document.querySelector("#name").value
    let inpemail = document.querySelector("#name").value
    let inppass = document.querySelector("#name").value
    let incpass = document.querySelector("#name").value


    let errname=document.querySelector("#errname")
    let errnum = document.querySelector("#errnum")
    let erremail=document.querySelector("#erremail")
    let errpass=document.querySelector("#errpass")
    let errcpass=document.querySelector("#errcpass")

    if(inpname==""){
        let namebox=document.querySelector("#name")
        namebox.style.border="1px solid red"
        errname.innerHTML="Please fill this form"
        errname.style.color="red"
        return false
    }
    else if(inpnum==""){
        errnum.innerHTML="please enter number"
        return false
    }
    else if(isNaN(inpnum)){    //if alphabtes return true
        errnum.innerHTML="Please enter number only"
        return false;
    }
    else if(inpnum.length != 10){
        errnum.innerHTML="Plese Enter 10 digits only"
        return false
    }
    else if((inpemail.includes("@") && inpemail.includes(".com"))){
        erremail.innerHTML="please enter valid email"
        return false
    }
}