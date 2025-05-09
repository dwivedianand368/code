// var a = 9873;
// var reverse=0;
// while(a>0){
//     var lastdigit = a%10;
//     reverse = (reverse*10)+lastdigit;
//     a = a/10;
// }
// console.log(reverse);



// Sum of first and last digit number 
function digitsum(){
    
var a = 2873;
var firstdigit = a;
var lastdigit = a%10;
while(firstdigit>0){
    firstdigit = firstdigit/10
}
console.log(firstdigit+lastdigit);
}
digitsum()