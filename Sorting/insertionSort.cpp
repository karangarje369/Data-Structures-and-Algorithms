#include<bits/stdc++.h>
using namespace std;
void concept_sort(){
    int arr[] = {2,10,3,8,6,9,1,4,5,7} ;
    int n = sizeof(arr)/sizeof(arr[0]);
    for(int i = 0 ; i <= n-1 ; i++){
        int j =i;
        while(j>0 && arr[j-1]>arr[j]){
            swap(arr[j-1],arr[j]);
            j--;
        }
    }
    for(int i = 0 ; i<n ; i++){
        cout<<arr[i]<<" ";
    }
}
int main(){
    concept_sort();
}