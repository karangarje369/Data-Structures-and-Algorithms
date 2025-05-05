function print1toN(i,n){
    if(i<1){
        return;
    }
    print1toN(i-1,n);
    console.log(i);
}
print1toN(5,5);
console.log("/");
function printNto1(i,n){
    if(i<1){
        return;
    }
    console.log(i);
    printNto1(i-1,n);
}
printNto1(5,5)