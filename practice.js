/*  // function print(i,n){

//     if(i>n){
//         return 
//     }
//     console.log(i);// 1 to n

//     print(i+1,n)
//     console.log(i); // n to 1


// }
// print(0,7)

// reverse array
// function print(start , end, arr){
//     if(start>end){
//         console.log(arr);
//         return}
//     [arr[start],arr[end]] =  [arr[end],arr[start]]
//     print(start+1,end-1,arr)
// }



// reverse array single variable
// function print(arr,i,n){
//     if(i>n/2){
//         console.log(arr);
//         return 0;
//     } 
//     let temp = arr[i];
//     arr[i] = arr[n-i];
//     arr[n-i] = arr[i];
//     print(arr,i+1,n)
// }
// print(arr,0,n-1)

// let arr = [1,2,3,4,5,6,7];
// let n = arr.length
 // palindrome 
//  function  print(str, i , len){
//     if(i>len/2){
//         return true;
//     }
//     if(str[i] != str[len-i-1]) return false;
//    return print(str,i+1,len)

// }
// let str = "karan"
// console.log(print(str,0,str.length))

// Sumation
// function print(i,sum,n){
//     if(i>n){ 
//         console.log(sum);
//         return sum;}
//     return print(i+1,sum+i,n)}
//     console.log(print(1,0,5));
    // function print2(i,sum=0){
    //     if(i<1) return sum;
    //     return print2(i-1,sum+i) 
    // }
    // console.log(print2(5));

 // Fibo 
//  function fibo(n){
//     if(n<=1) return n;
//     return fibo(n-1) + fibo(n-2)
//  }   
//  console.log(fibo(8));
// Factorial 
// function fact(n,i,factt){
//     if(i>n) return factt;
//     return fact(n,i+1,factt*i)
// }
// console.log(fact(4,1,1));

// Hashing
// let arr = [2,4,1,2,5,6,4,2];

// function my_hash(arr,num){
//     let hash = {};
// for(let i = 0;i<arr.length;i++){
//     hash[arr[i]] = (hash[arr[i]]||0)+1
// }
// return hash[num]||0;
// }
// console.log(my_hash(arr,4));

// function charc(str,ch){
//     let my_hash = {};
//     for(let val of str){
//         // let char = str[val];
//         my_hash[val] =  (my_hash[val]||0)+1
//     }
//     return my_hash[ch]||0
// }
// console.log(charc("karan","a"));

// slection sort 1-find 
// function sort(arr){
//     let n=arr.length
//     for(let i = 0 ;i<=n-2;i++){
//         let mini = i
//         for(let j = i;j<=n-1;j++){
//             if(arr[j]<arr[mini]){
//                 mini = j;
//             }
//         }
//         let temp = 0
//         temp = arr[i];
//         arr[i] = arr[mini];
//         arr[mini] = temp

//     }
//     console.log(arr);
// }
// let arr = [1,4,77,33,9,0];
// sort(arr)

// Buble sort 
// let arr = [22,32,12,2,31,56];
// let n = arr.length
// for(let i =0 ; i<n-1;i++){
//     let didswap=0;
//     for(let j = 0;j<n-i-1;j++){
//         if(arr[j]>arr[j+1]){
//             didswap++;
//            [ arr[j],arr[j+1]] =  [ arr[j+1],arr[j]]
//         }
//     }
//     if(didswap==0) break;
// }
// console.log(arr);










// HashMap 
// function findMyHash(arr,n){
//     let hash = {}
//     // console.log(hash);
//     for(let i = 0 ; i<=arr.length ; i++){
//         hash[arr[i]] = ((hash[arr[i]]||0 )+ 1)
//     }
//     return hash[n]||0;
// }
// let arr = [3,2,5,6,1,6,8,99];
// console.log(findMyHash(arr,2));

// Character Hash

// function findMyHash(str,n){
//     let hash = {}
//     // console.log(hash);
//     for(let i = 0 ; i<=str.length ; i++){
//         hash[str[i]] = ((hash[str[i]]||0 )+ 1)
//     }
//     return hash[n]||0;
// }
// let str = "karan";
// console.log(findMyHash(str,'z'));

// Recursion

// ---------------------------------------------------------

// Sorting


// Slection Sort
// function sort(arr){
//     let len = arr.length;
//     console.log(len);

//     for(let i = 0 ; i<len-1;i++){
//         let min = i;
//         for(let j = i+1 ; j<=len-1 ; j++){
//             if(arr[j]<arr[min]){
//                 min = j
//             }
//         }
//         if(min!=i){
//             [arr[i],arr[min]] = [arr[min],arr[i]]
//         }
//     }
//         console.log(arr);
// }
// let arr = [10,4,6,9,8,2,3,1,0,5,7];

// sort(arr)

// Bubble sort 

function sort(arr){
    let n = arr.length
    for(let i = 0 ; i<n-1 ; i++){
        let didswap = 0
        for(let j = 0 ; j<n-i-1; j++){
            if(arr[j]>arr[j+1]){
            didswap++;
                [arr[j+1],arr[j]] = [arr[j],arr[j+1]] 
            }
        }
        if(didswap == 0) break;
     }
     console.log(arr);
}
let arr = [4,47,5,5,74,1,7]
sort(arr)

*/

// 4/4/2025

// Sorting 

/*
// Selection Sort

let sort = (arr)=> {
    let n = arr.length 
    for(i = 0 ; i <= n-2 ; i++){
        let min = i ;

        for(let j = i + 1; j <= n-1 ; j++){
            
            if(arr[j]<arr[min]){
                min = j;
            }
        }

        [arr[i],arr[min]] = [arr[min],arr[i]];
    }

    console.log(arr);
}
let arr = [13,46,24,52,20,9];
sort(arr);
*/

/*
//           Bubble Sort 

function sort(arr){
    let n = arr.length - 1
    // console.log(n);
    for(let i = n ; i>1 ; i--){
        let didswap = 0;
        for(let j = 0 ; j<n ; j++){
        if(arr[j]>arr[j+1]){   
            didswap++;
             [arr[j],arr[j+1]] = [arr[j+1],arr[j]]
        }
        }
        if(didswap==0) break;
    }
    console.log(arr);
}

sort([10,2,1,5,4,8,7,6,3,9])
*/

// Insertion Sort 
