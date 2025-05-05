function print(i){
    if(i>5){
        return 0;
    }
    console.log(i);

    i++;
    print(i)
}
print(1)