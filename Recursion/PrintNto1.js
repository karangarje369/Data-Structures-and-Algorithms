function print(i,n){
    if(i>n){
        return;
    }
    print(i+1,n);
    console.log(i);
}
// print(1,5);
function print2(i,n){
    if(i<1){
        return;
    }
    console.log(i);
    print2(i-1,n)
}
print2(5,5)