function isPalin(str,i,len){
    if(i>len/2) return true;
    if(str[i]!=str[len-i-1]) return false;
    return isPalin(str,i+1,len);  // Note : we use return to call because we are totally dependent on the returned bool values so in order to keep track at every recursive call the call stack holds the execution and values of the function
//No Value Propagation: In this function, the recursive calls (print(arr, i + 1, n)) are made solely to perform an action (swapping elements in the array) rather than calculating or propagating a result back through the call stack. After the recursive call returns, there's no further computation that depends on the returned value.
}

let str = "wow"
let len = str.length
let val = isPalin(str,0,len);
console.log(`palindrome:${val}`);