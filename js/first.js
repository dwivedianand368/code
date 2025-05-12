// ------------------------------------------question 1 -----------------------------------------------------------------------------
// 1 Write a JavaScrip to display the given number in reverse order?
// Input:9873
// Outpu:3789
// function ook(){
// var a = 9244;
// var reverse = 0;
// while(a>0){
//     var lastdigit = a % 10;
//     reverse = (reverse*10)+lastdigit;
//     a = Math.floor(a / 10);
// }
// console.log(reverse);
// }
// ook();

// ------------------------------------------question 2 -----------------------------------------------------------------------------
// Q.2 Write a JavaScrip to display the sum of first and last digit?
// Input:2873
// Output:5
// function digitsum(){
    
// var a = 2873;
// var firstdigit = a;
// var lastdigit = a%10;
// while(firstdigit>10){
//     firstdigit = Math.floor(firstdigit/10)
// }
// console.log("The firstdigit and last digit sum is = " + (firstdigit+lastdigit));
// }
// digitsum()



// ------------------------------------------question 3--------------------------------------------------------------------------------------
// Q, 3 Write a JavaScrip to find the Icm of any two number?
// Input:A=14, 6=21
// Output:42

// function lcm(){
//     var a = 14;
//     var b = 21;
//     var max = a > b ? a : b;
    
//     while(1){
//         if(max % a == 0 && max % b == 0){
//             console.log(max);
//             break;
//         }
//         max++;
//     }
// }
// lcm();


// ------------------------------------------question 4--------------------------------------------------------------------------------------

// Q.4 Write a JavaScript conditional statement to sort three numbers. Display an alert
// box to show the results
// Input: 0, 3, -1
// Output: -1, 0, 3


// ------------------------------------------question 5--------------------------------------------------------------------------------------

// Q.5 Write a JavaScript for loop that iterates from O to 15. For each iteration, 
// it checks if the current number is odd or even, and displays a message on the screen.
// Output:
// "0 is even'
// "1 is odd"
// "2 is even"

// function evenodd(){
//     for(let i = 0; i <= 15; i++){
//         if(i % 2 == 0){
//             console.log(i + " is  Even")
//         }else{
//             console.log(i + " is odd");
//         }
//     }
// }
// evenodd()

// ------------------------------------------question 6--------------------------------------------------------------------------------------


// Q.6 Write a JavaScript program that iterates integers from 1 to 100. But for multiples of three print "Good"
//  instead of the number and for multiples of five print "Better".
// For numbers multiples of both three and five print "Best"
// function iterates(){
//     for(let i = 1; i <= 100; i++){
//         if(i % 3 == 0 && i % 5 == 0){
//             console.log("Best");
//         }else if (i % 3 == 0){
//             console.log("Good")
//         }else if(i % 5 == 0){
//             console.log("Better");
//         }else{
//             console.log(i);
//         }
//     }
// }
// iterates()

// ------------------------------------------question 7--------------------------------------------------------------------------------------



// Q.7 Write a JavaScript program to construct the following pattern, using a nested for loop.



// function pattern(){
//     let n = 5;
//     for(let i = 1; i <= n; i++){
//         console.log("*".repeat(i))
//     }
// }
// pattern();

// ------------------------------------------question 8--------------------------------------------------------------------------------------


// Q.8 Check if a string is a palindrome

// function palindrome(){
   
// }
// palindrome();


// ------------------------------------------question 9--------------------------------------------------------------------------------------

// Q, 9 Write a JavaScript program to count the length of string.
// Input:Anand
// Output:6
// function Count(){
//     let a = prompt("Enter a string");
//     let length = a.length;
//     alert("length is = " + length)
// }
// Count();


// ------------------------------------------question 10--------------------------------------------------------------------------------------


// Q.10 Time of Day Greeting
// Scenario: Write a program that greets the user based on the time of day.



// let time = Number(prompt("Enter a time not more than 24"))
// var greeting;
// if(time<12){
//     greeting = "good morning"
// }else if(time<17){
//     greeting = "good afternoon"
// }else if(time<21){
//     greeting = "good evening"
// }else(
//     greeting = "good night!"
// )

// alert(greeting);

