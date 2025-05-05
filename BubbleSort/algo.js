let arr= [12,44,55,1,2];
let n = arr.length
for(let i = n-1 ; i>=1;i--){
    let didSwap = 0;
    for(let j = 0 ; j<i;j++){
    let max = j ;

        if(arr[j]>arr[j+1]){
            [arr[j+1],arr[j]] = [arr[j],arr[j+1]]
            didSwap = 1;

        }
    }
    if(didSwap == 0){
        break;
    }

}
console.log(arr);