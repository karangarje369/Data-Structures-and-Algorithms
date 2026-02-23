#include<bits/stdc++.h>
using namespace std ;
int piviot(int low , int high ,int arr[]){
    int pIndex = arr[low];
    int i = low ;
    int j = high ;
    while(i<j){
        while(arr[i]<=pIndex && i< high ){
            i++;
        }
        while(arr[j]>pIndex && j > low){
            j--;
        }
        if(i<j) swap(arr[i],arr[j]);
    }
    swap(arr[low],arr[j]);
    return j;
}
void quickSort(int low , int high, int arr[]){
    int pIndex ;
    if(low<high){
        pIndex = piviot(low ,high,arr);
        quickSort(low,pIndex-1,arr);
        quickSort(pIndex+1,high,arr);
    }
    
}

int main(){
    int arr[] = {1,5,6,3,7,1,4,9};
    int low = 0;
    int high = 7;
quickSort(low , high , arr);
for(int i = 0 ; i<high ; i++){
        cout<<arr[i];
    }
}