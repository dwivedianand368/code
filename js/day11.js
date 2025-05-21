// for of => Arrays and String cme kaam karta hai
// for in => object
// map => arrays ki kar element ko iterate karega kuch task perform karga ko new array return kar k dega
// filter => filter 

// map or filter ye dono arrays return karta hai




// ============================================================ for of========================================================
let arr = ["java","phython","MERN","PHP"]
for(let i of arr){
    console.log(i)
}



// =======================================================for in loop ========================================================
let welcome = {
    city:"Bhopal",
    name:"Anand",
    age: 22

}
for(let i in welcome){
    // console.log(i)// kaval key bass nikal ne ho tab
    console.log(i+ "=>" +welcome[i])
}

// ===========================================================map loop===========================================================

// let num = [3,6,7,9,12,15]
// let newnum = num.map((e)=>{
//     return e*2
// })
// console.log(newnum)

let num1 = [3,6,7,9,12,15]
let newnum1 = num1.map((e)=>{
    return e*e
})
console.log(newnum1)


// =========================================================Filter loop ===========================================================

let num = [3,6,7,9,12,15]
let newnum = num.filter((e)=>{
    return e%2==0
})
console.log(newnum)

// ============================================================For each ============================================================


let fruits = ["mango","banana","Grapes"]
fruits.forEach((e)=>{
    console.log(e)
}

)