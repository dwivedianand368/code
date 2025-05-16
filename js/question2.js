// Find the Sum of All Elements
// Given an array [2, 4, 6, 8, 10], write a program to find the sum of all elements

// function Sum(){
//     let arr = [2,4,6,8,10]
//     let sum = 0;
//     for(let i = 0; i<arr.length;i++){
//         sum+=arr[i]

//     }
//     console.log(sum)
// }
// Sum()


// ------------------------------------------------------------------------------------------------------------------------------------//

// Find the Maximum Number in an Array
// Write a program to find the largest number in the array [3, 7, 2, 9, 5].

// function Max(){
//     let arr =  [3, 7, 2, 9, 5]
//     let max = arr[0];
//     for(let i = 1; i<arr.length; i++){
//         if(arr[i]>max){
//             max = arr[i];

//         }
//     }
//     console.log(max)
// }
// Max()



// ---------=============================================================================================================================//

// Count Even and Odd Numbers
// Count how many even and odd numbers are in [1, 2, 3, 4, 5, 6, 7， 8].


// let arr = [1, 2, 3, 4, 5, 6, 7, 8,10];
// let even = 0;
// let odd = 0;
// for(let i = 0; i<arr.length; i++){
//     if(i%2==0){
//         even++;
//     }else{
//         odd++;
//     }

// }
// console.log(even)
// console.log(odd)

// ==========================================================================================================================================//

// Reverse an Array
// Reverse the array [10, 20, 30, 40, 50] without using the reverse() method.

// let arr = [10,20,30,40,50,];
// let start = 0;
// let end = arr.length-1;
// while(start<end){
//     let temp = arr[start]
//     arr[start] = arr[end]
//     arr[end] = temp
//     start++
//     end--
// }
// console.log("reversed arry " ,arr)


//=============================second method of reverse=========================================================================


// let arr = [10,20,30,40,50]
// let reversed = []
// for(let i=arr.length-1; i>=0 ; i--)
// {
//     reversed.push(arr[i])
// }
// console.log("reversed:" ,reversed)
// =====================================================================================================================================//

// Check if an Element Exists
// Write a program to check if a glven number (e.g., 9) exists in the array [3, 5, 7, 9, 11].

// let arr = [3,5,7,9,11]
// let target = 9
// let b = false;
// for(let i = 0; i <=arr.length-1; i++){
//     if(arr[i]==target){
//         b = true;
//         break
//     }
// }
// console.log(b)


// ======================================================================================================================================//

//Merge [1, 2, 3] and [4, 5, 6] into a new array without using .concat().

// let arr1 = [1,2,3,4]
// let arr2 = [5,6,7,8]
// let merged = []
// for(let i=0; i<arr1.length;i++){
//     merged.push(arr1[i])
// }
// for(let i = 0; i<arr2.length;i++){
//     merged.push(arr2[i])
// }
// console.log(merged)