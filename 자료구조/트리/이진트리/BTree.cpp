#include <iostream>

using namespace std;

struct Node{
    char data;
    Node *left;
    Node *right;
};


/* 노드에 메모리 할당하고, 초기화 */
Node* newNode(){
    Node* newnode = (Node*)malloc(sizeof(Node));
    newnode->left = NULL;
    newnode->right = NULL;
    return newnode;
}

/* 노드의 데이터 가져오기 */
char getData(Node * targetNode){
    return targetNode->data;
}

/* 노드에 데이터 할당 */
void setData(Node *targetNode,char data){
    targetNode->data = data;
}

Node* getleftsubTree(Node *targetNode){
    return targetNode->left;
}

Node *getrightsubTree(Node *targetNode){
    return targetNode->right;
}

Node *makeleftsubTree(Node *targetNode,Node *parentNode){
    parentNode->left = targetNode;
}

Node *makerightsubTree(Node *targetNode,Node *parentNode){
    parentNode->right = targetNode;
}









