// let arr = new Array(5);
// for(let i = 0 ; i<5 ; i++){
//     arr[i] = parseInt(prompt())
// }
// console.log(arr);
// function check(arr,num){
  
// let hash = new Array(6).fill(0)
// for(let i = 0 ; i<6 ; i++){
//     hash[arr[i]] += 1;
// }
// return hash[num]
// }
// let arr = [1,2,3,1,2,3]
// console.log(check(arr,1));

// function my_hash(arr,num){
//     let hash = new Array(arr.length + 1).fill(0);
//     for(let i = 0 ; i<arr.length ; i++){
//      hash[arr[i]] = (hash[arr[i]]||0)+1
//     }
//     return (hash[num]||0)
//  }
//  let arr1 = [1,2,6,1,2,3,3];
 
//  console.log(my_hash(arr1,10));



function h(arr,n){
    let hash = {}
    for(let val of arr){
        hash[val] = (hash[val]||0) + 1

    }
    return hash[n]||0
}
console.log(h([4,4,1,2,6,6],0));