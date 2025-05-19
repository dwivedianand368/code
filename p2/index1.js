//  Question 1
//    Remove All Occurrences of a Specific Element
//    Remove all 0s from [1, 0, 2, 0, 3, 0, 4] and print the new array.

let arr = [1, 0, 2, 0, 3, 0, 4]
let k = []
for(let i = 0; i<arr.length;i++){
    if(arr[i] > 0){
        k.push(arr[i])
    }
}
console.log(k)