// Assignments :
// 1) programmatically assign even numbers from 20 to 40 into an array and Read Elements from an array?
// Solution:
//Declared an array
let even=[]
//Extract Even numebrs from 20 to 40 and assign into array
let k=0;
for(let i=20;i<=40;i++){
    if(i % 2 ==0){
        even[k]=i;
        k=k+1
    }
}
//Read Elements from even array
for(let x of even){
    console.log(x);
}
 
// 2) programmatically assign odd numbers from 71 to 51 into an array and Read Elements from an array in reverse order?
//Solution:
//declare an array
let odd=[]
 
//assign elements into an array
let j=0;
for(let i=71;i>=51;i--){
    if(i % 2 ==1){
        odd[j]=i
        j+=1
    }
}
// Read Elements in Reverse
for(let i=odd.length-1;i>=0;i--){
    console.log(odd[i]);
}
    // 3) programmatically assign the result of 6th table into an array and Read Elements from an array
//Solution:
// declare an array
let arr=[]
// assign Elements
let l=0;
for(let i=1;i<=10;i++){
    arr[l]=(i * 6)
    l++
}
//Read Elements
for(let x of arr){
    console.log(x);
}
 
// 4) programmatically assign the numbers in between 50 to 150 which are divisible by 11 into an array and Read Elements from an array
//Solution:
//delcare an array
let a=[]
// Assign Elements from 50 to 150 divisible by 11
let m=0;
for(let i=50;i<=150;i++){
    if(i % 11 ==0){
        a[m]=i
        m++
    }
}
 
//Read Elements
for(let ele of a){
    console.log(ele);
}