#include<bits/stdc++.h>
using namespace std;
void merge(int low , int high , int mid , vector<int> &arr){
  int left = low ;
  vector<int> temp;
  int right = mid + 1 ;
  while(left<=mid && right<=high){
    if(arr[left]<arr[right]){
        temp.push_back(arr[left]);
        left++;
    }
    else{
        temp.push_back(arr[right]);
        right++;
    }
  }
  while(left<=mid){
    temp.push_back(arr[left]);
    left++;
  }
  while(right<=high){
    temp.push_back(arr[right]);
    right++;
  }

 for(int i = low ; i<= high ;i++){
    arr[i] = temp[ i - low];
 } 
}
void merge_sort(int low,int high,vector<int> &arr){
    if(low>=high) return;
    int mid = (low + high)/2;
    merge_sort(low,mid,arr);
    merge_sort(mid+1,high,arr);
    merge(low , high , mid , arr);
}
int main(){
    vector <int> arr = {8,9,3,5,4,7,1,1};
    int low = 0;
    int high = 7;
    merge_sort(low,high,arr);
    for(int i = 0 ; i<high ; i++){
        cout<<arr[i];
    }
}