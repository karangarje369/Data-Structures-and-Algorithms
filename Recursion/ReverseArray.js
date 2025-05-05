// function reverse(start,end,arr){
//      if(start>end){
//         console.log(arr);
//         return 0;
//      }
//     [ arr[start],arr[end]] =  [ arr[end],arr[start]]
//      reverse(start+1,end-1,arr)
    
// }
// let arr = [1,2,3,4,5];
// let length = arr.length - 1
// reverse(0,length,arr)

//using single var 
let arr = [1, 2, 3, 4, 5];
let length = arr.length - 1;

function rev(i, arr, length) {
    if (i >= length / 2) {  // Stop once the middle of the array is reached
        console.log(arr);  // Print the array once it's fully reversed
        return;
    }

    // Swap elements
    let temp = arr[i];
    arr[i] = arr[length - i];  
    arr[length - i] = temp;  

    // Recurse with the next index
    rev(i + 1, arr, length);
}

rev(0, arr, length);


