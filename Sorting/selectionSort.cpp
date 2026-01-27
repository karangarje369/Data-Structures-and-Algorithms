#include<bits/stdc++.h>
using namespace std;
void concept_sort(){
    int arr[] = {2,10,3,8,6,9,1,4,5,7} ;
    int n = sizeof(arr)/sizeof(arr[0]);
    int min ;
    for(int i =0 ; i<n-1 ; i++){
        min = i;
        for(int j = i + 1 ; j<n ; j++){
            if(arr[j]<arr[min]){
                swap(arr[min],arr[j]);
            }
            min = j;
        }
    }
    for(int i = 0 ; i<n ; i++){
        cout<<arr[i]<<" ";
    }
}
int main(){
    concept_sort();
}