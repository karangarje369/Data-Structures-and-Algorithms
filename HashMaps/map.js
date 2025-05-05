function check(arr,num){
    let myMap = new Map
    for(val of arr){
       // myMap[arr[val]] = (myMap[arr[val]]||0) + 1
        myMap.set(val,(myMap.get(val)||0)+1)
    }
    console.log(myMap);
    return myMap.get(num)||0;
}
let arr = [1,5,5,3,1,7,7]
console.log(check(arr,7));

function check1(str,char){
    let myMap = new Map
    for(val of str){
        myMap.set(val,(myMap.get(val)||0)+1)
    }
    console.log(myMap);
    return myMap.get(char)||0;
}
let str = "karan"
console.log(check1(str,"a"));