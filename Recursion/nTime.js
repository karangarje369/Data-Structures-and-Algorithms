function print(i,n){
    if(i>n){
        return;
    }
    console.log("Karan");
    print(i+1,n)
}
print(1,5)