// bruteforce
// let n = 5;
// let sum = 0 ;
// for(let i = 1 ; i<=n ; i++){
//      sum = sum + i;
// }
// console.log(sum);
// 1+2+3+4+5
// simple recu
function print(i,n,sum){
    if(i>n){
        console.log(sum);
        return;
    }
    print(i+1,n,sum+i)
}
print(1,5,0)

// backtracking 
function printb(i,sum){
    if(i<1){
        console.log(sum);
        return;
    }
    printb(i-1,sum+i)
}
printb(5,0)