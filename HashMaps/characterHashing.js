function check(str, ch) {
    let hash = {}; // Use an object to store character counts
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        hash[char] = (hash[char] || 0) + 1; // Count occurrences of each character
    }
    return hash[ch] || 0; // Return the count of 'ch', default to 0 if not found
}

let str = "karan";
// console.log(check(str, "a")); // Output: 2
// console.log(check(str, "k")); // Output: 1
// console.log(check(str, "z")); // Output: 0 (since 'z' is not in the string)


// function check2(arr,char){
//     let hash={};
//     for(let i = 0 ; i<arr.length ; i++){
//         let char2 = arr[i];
//         hash[char2] = (hash[char2]||0) + 1;

//     }
//     return hash[char]
// }
// console.log(check2("Hello","a"));


function count(str,char){
    let hash = {};
    for( let val of str){
        hash[val] = (hash[val]||0)+1
    }
    return hash[char]||0;
}
let str1 = "karan";
console.log(count(str1,"a"));