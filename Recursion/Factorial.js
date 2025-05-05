function print(n){
    if(n==0){
        return 1;
    }
    return n*print(n-1);
}
let ans = print(3);
console.log(ans);

function print2(i,n,mul){
    if(i>n){
        console.log(mul);
        return 0;
    }
    print2((i+1),n,(mul*i))
}
print2(1,3,1)