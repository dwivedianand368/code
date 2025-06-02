//  Question 2:
//   Create a program that:

//   Uses a confirm box to ask: "Do you want to see the numbers from 1 to 10?"
//   If the user clicks "OK", display numbers from 1 to 10 using a for loop and alert.
//   If the user clicks "Cancel", display "You canceled the action" using alert..

let a = confirm("Do you want to see the numbers from 1 to 10?")
if(a){
    for(let i = 0; i<=10; i++){
        console.log(alert(i))
    }
}else{
    console.log(alert("You canceled the action"))
}