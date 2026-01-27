#include<bits/stdc++.h>
using namespace std;

int explainVectors(){
    // vector<int> v;

    // v.push_back(1);
    // v.emplace_back(2); // faster

    // Defining vector of pair 
    vector< pair<int, int>> vec;
    vec.push_back({1,2}); 
    vec.emplace_back(1,2);// no {}

    // defining size 
    vector<int> v(5,100); // size,value
    vector<int> v2(5); // size

    // copying
    vector<int> v3(v2);

    // iterators and iterating over vectors 
    vector<int> v1 = {1,2,3,4,5,6,6,7};
    vector<int>::iterator it = v1.begin(); // this will point to first memorary location not value

    it++;
    cout<< *(it) << ' ';// to get value we need to use *

    vector<int>::iterator it1 = v1.end(); // points to memo loc right after the last element 

    // accessing 
    cout<<v1[0];

    //looping 
    for(vector<int>::iterator it = v1.begin(); it != v1.end() ; it++){
        cout<< *(it) << " ";
    }
    // shortcut vector<int>::iterator replace --> auto
     for(auto it = v1.begin(); it != v1.end() ; it++){
        cout<< *(it) << " ";
    }
    // for each 
    for(auto it : v1){
        cout<<it << " ";
    }
    return 0;
}

 void List(){
    list<int> ls;
    ls.push_back(2);
    ls.emplace_back(4);
    ls.push_front(5);
    ls.emplace_front(6);
 }

  void Quque(){
    Qeque<int> qq;
    qq.push_back(2);
    qq.emplace_back(4);
    qq.push_front(5);
    qq.emplace_front(6);
 }
 void explainStack(){
    stack<int> st;
    st.push(2);
    st.emplace(5);
    st.pop();
    st.top();
    st.empty();
    
 }
int main() {
    explainVectors();
    return 0;
}