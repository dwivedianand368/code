//   Write a program to find the sum of all positive numbers in an array

   // Input:  let arr = [-5, 10, 20, -3, 7];



   let arr = [-5, 10, 20, -3, 7]
   let sum  = []

    for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
        sum += arr[i];
    }
}
   console.log(sum);
