#include<bits/stdc++.h>
using namespace std;

int bruteForce(){
    int arr[]={ 1,2,1,3,2};
    int number = 1; 
    int count = 0;
    int n = sizeof(arr)/sizeof(arr[0]);
    for(int i = 0 ; i<n ; i++){
        if(arr[i] == number){
            count = count + 1 ;
        }
    }
    return count;
    /* 
    T.C -->
    O(Q*O(N))
    O(Q*N)
    */
}
int hash_Concept(){
    int arr[]={ 1,2,1,3,2};
    int number = 1; 
    int n = sizeof(arr)/sizeof(arr[0]);

    int hash[13] = {0};
    for(int i = 0 ; i<n ; i++){
        hash[arr[i]] += 1;
    }
    return hash[number];
}

int charHash(){
    string ls = "aabccdee";
    char c = 'a';
    int hash[26] = {0};
    for(int i =0 ; i<ls.size() ;i++){
        hash[ls[i] - 'a'] += 1;

    }
    return hash[c - 'a'];
}
// using map data structure from stl
int mapUse(){ // TC--> logN
    int arr[]={100,100,1,1,3,4,500,70,80,90};
    int n = 70;
    map <int,int> mpp;
    int size = sizeof(arr)/sizeof(arr[0]);

    for(int i = 0 ; i<size ; i++){
        mpp[arr[i]]+=1;
    }
    for(auto it : mpp){
        cout<<it.first << "  "<<it.second<<endl;
    }
    return mpp[n];
    // map stores eveeything in sorted manner and unordered map stores as it is 
    // Advantage is TC --> o(1) Worst --> o(N)
}

int main(){
    // cout<<bruteForce();
    // cout<<hash_Concept();
    // cout<<charHash();
    cout<<mapUse();
}