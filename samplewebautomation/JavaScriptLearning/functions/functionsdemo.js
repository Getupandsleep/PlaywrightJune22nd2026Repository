// Functions in JavaScript:
// ---------------------------------------
// functions contains a specific action or task, it can be called if it requires.
 
// in JavaScript Functions can be classified into two types:
// 1. functions which do not return value
// 2. functions which return value
 
// 1. functions which do not return value:
 
// Note: Functions which do not accept parameters and accepts parameters
 
// Example1:
// function which does ot have parameter
function addition(){
    let result,x,y;
    x=25;y=40
    result=(x + y)
    console.log("Addition Result :"+result);
}
 
addition()
addition()
addition()
addition()
 
// Example 2:
// function which has parameters
 
function addition(x,y){
    let result= (x + y)
    console.log("Addition Result :"+result);
}
 
addition(20,40)
addition(100,40)
addition(30,40)
addition(70,20)
 
// Functions in JavaScript can be written in following approaches
 
// 1. named function
// 2. Anonymous function
// 3. arrow function
 
// Case 1: Write a function to find factorial of a given number
// Named function
function findFactorial1(num){
    let fact=1;
    for(let i=num;i>=1;i--){
        fact=fact * i
    }
    console.log("Factorial of number "+num+" is "+fact);  
}
findFactorial1(5)
console.log("------------------------------------");
 
 
// Anonymous function
let findFactorial2=function(num){
    let fact=1;
    for(let i=num;i>=1;i--){
        fact=fact * i
    }
    console.log("Factorial of number "+num+" is "+fact);  
}
 
findFactorial2(6)
 
console.log("------------------------------------");
 
// Arrow Function
let findFactorial3=(num)=>{
    let fact=1
    for(let i=num;i>=1;i--){
        fact=fact * i
    }
    console.log("Factorial of number "+num+" is "+fact);  
}
 
findFactorial3(7)
 
// case 2: without using inbuilt function concat elements from given two arrays:
 
//Named function
function resultantArray1(a,b){
    let resultant=[]
    let k=0
    for(let i=0;i<a.length;i++){
        resultant[k]=a[i]
        k++
    }
 
    for(let i=0;i<b.length;i++){
        resultant[k]=b[i]
        k++
    }
    // Read Elements from resultant array
    console.log(resultant);
}
 
x=[10,20,30]
y=[40,50,60,70]
resultantArray1(x,y)
console.log("-------------------------------");
// Anonymous function
let resultantArray2 =function(p,q){
    let resultant=[]
    let j=0
    for(let i=0;i<p.length;i++){
        resultant[j]=p[i]
        j++
    }
 
    for(let i=0;i<q.length;i++){
        resultant[j]=q[i]
        j=j+1
    }
    // Read Elements from resultant array
    console.log(resultant);
}
 
resultantArray2(new Array(100,200), new Array(300,400,500))
console.log("-------------------------------");
//Arrow function
let resultantArray3=(d,e)=>{
    let resultant=[]
    let k=0
    for(let i=0;i<d.length;i++){
        resultant[k]=d[i]
        k=k+1
    }
 
    for(let i=0;i<e.length;i++){
        resultant[k]=e[i]
        k=k+1
    }
    // Read Elements from resultant array
    console.log(resultant);
}
 
resultantArray3(new Array(4,5,6), new Array(9,8,7,6))