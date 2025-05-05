//selectionsort
/*

*/
let arr = [10,2,40,9,11];
let n = arr.length

for(let i = 0 ; i<n-1 ; i++){
    // let temp = 0;
    let min = i 
    for(let j = i+1 ; j<n ; j++){
        if(arr[j]<arr[min]){
            min = j
        }
    }
[    arr[i],arr[min] ]= [arr[min],arr[i]]
   

// temp = arr[i];
    // arr[i] = arr[min];
    // arr[min] = temp
}
console.log(arr);


