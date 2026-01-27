#include<bits/stdc++.h>
using namespace std ;
int main(){
    // we need to calculate highest and lowest frequency 
      int arr[]={ 11,11,11,11,11,10,10,10,10};
    // int number = 1; 
    int n = sizeof(arr)/sizeof(arr[0]);

    int hash[13] = {0};
   
    for(int i = 0 ; i<n ; i++){
        hash[arr[i]] += 1;
    }
    //  int large = INT_MIN;
    // int small = INT_MAX;
    // for(int i = 0 ; i<n ; i++){
    //     if(hash[i]> 0){
    //         large = max(large, hash[i]);
    //         small = min(small, hash[i]);

    //     }
    // }
    // cout<<"highest freq: "<<large<<" "<<"small freq: "<<small;

    // Highest Frequency 

    int hf = 0 , ans = -1;
    for(int i = 0 ; i < 13 ; i++){ // here i- Element and hash[i] - frequency of that element 
        if(hash[i] > hf){
            hf = hash[i];
            ans = i;
        }
    }
    cout<<ans<<" "<<"appeard for "<<hf<<" times";
}
// hash array ---> index->element , value->frequency