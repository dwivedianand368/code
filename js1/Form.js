let formValidate=()=>{
    let inpname = document.querySelector("#name").value
    let inpnum = document.querySelector("#num").value
    let inpemail = document.querySelector("#email").value
    let inppass = document.querySelector("#pass").value
    let incpass = document.querySelector("#cpass").value


    let errname=document.querySelector("#errname")
    let errnum = document.querySelector("#errnum")
    let erremail=document.querySelector("#erremail")
    let errpass=document.querySelector("#errpass")
    let errcpass=document.querySelector("#errcpass")

    if(inpname=="")
    {
        namebox=document.querySelector("#name")
        namebox.style.border="1px solid red"
        errname.innerHTML="Please fill this form"
        errname.style.color="red"
        return false
    }
    else if(inpnum=="")
    {
        errnum.innerHTML="please enter number"
        return false
    }
    else if(isNaN(inpnum))
    {    //if alphabtes return true
        errnum.innerHTML="Please enter number only"
        return false;
    }
    else if(inpnum.length != 10)
    {
        errnum.innerHTML="Plese Enter 10 digits only"
        return false
    }
    else if(!(inpemail.includes("@") && inpemail.includes(".com"))){
        erremail.innerHTML="please enter valid email"
        return false
    }
    else if (pass != cpass){
        errcpass.innerHTML = "Please inter same password"
    }
    else if (!(pass.match(/[0-9]]/) &&
            pass.match(/[!@#$%^&*()]/)&&
            
            Pass.match(/[a-z]/)&&
            Pass.match(/[A-Z]/)
        )){

            errpass.innerHTML = "please enter strong password"

    }
}