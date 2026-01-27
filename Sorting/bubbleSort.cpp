#include<bits/stdc++.h>
using namespace std;
void concept_sort(){
    int arr[] = {2,10,3,8,6,9,1,4,5,7} ;
    int n = sizeof(arr)/sizeof(arr[0]);
    for(int i =n-1 ; i >= 1 ; i--){
        for(int j = 0 ; j<= i-1 ; j++){
            if(arr[j]>arr[j+1]){
                swap(arr[j],arr[j+1]);
            }
        }
    }
    for(int i = 0 ; i<n ; i++){
        cout<<arr[i]<<" ";
    }
}
int main(){
    concept_sort();
}