// 2. functions which return value:
// ---------------------------------------------
// This type of function returns value and A function can return one value at a time.
 
// Case 1: Write a function, it should return a city name
 
function getLocation(cityname){
    return cityname
}
 
let v1=getLocation("New York")
console.log(v1);
console.log("The City Name is "+v1);
console.log("The Capital city of United state :"+v1)
 
// Case 2: Write a function to return an integer array from a function
function getIntegrArray(){
    let a=[]
    for(let i=11;i<=20;i++){
        a.push(i)
    }
    return a
}
let b=getIntegrArray()
console.log(b);
console.log("---------------------------");
 
// display First half of the Elements
for(let i=0;i<b.length/2;i++){
    console.log(b[i]);
}
console.log("---------------------------");
console.log("---------------------------");
 
// display Second half of the Elements
for(let i=b.length/2;i<b.length;i++){
    console.log(b[i]);
}
console.log("---------------------------");
 
// sum of all Eleemnts
let sum=0
for(let i=0;i<b.length;i++){
    sum=sum+b[i]
}
console.log("Sum of All Elements :"+sum);
 
console.log("---------------------------");
 
// Case 2: Write a function it should return a result to represent whether the given number id prime or not?
 
function isPrimeNumber(num){
    let flag=0
    for(let i=2;i<num;i++){
        if(num % i ==0){
            flag=flag+1
            break
        }
    }
    if(flag==0){
        return true
    }else{
        return false
    }
}
// verify the given number is prime
let v2=isPrimeNumber(13)
console.log(v2);
console.log("----------------------");
 
//Display primen umbers in between 50 to 100
for(let i=50;i<=100;i++){
    if(isPrimeNumber(i)==true){
        console.log(i);
    }
}
console.log("----------------------");
// Find count of Prime Numbers in between 1 to 100
let count=0
for(let i=1;i<=100;i++){
    if(isPrimeNumber(i)==true){
        count=count+1
    }
}
console.log("Count of Prime Numbers in between 1 to 100 :"+count);
console.log("----------------------");
//find sum of Prime numbers in between 1 to 50
 
let sum1=0
for(let i=1;i<=50;i++){
    if(isPrimeNumber(i)==true){
        sum1=sum1+i
    }
}
console.log("Sum of Prime Numbers in BEtween 1 to 50 :"+sum);

// Assignment:
// 1. Write a function for a given string, it should return in reverse order?
 
function reverse(str){
    let rev=""
    for(let i=str.length-1;i>=0;i--){
        rev=rev+str[i]
    }
    return rev;
}
 
console.log(reverse("Welcome"));
 
// 2. Write a function it should return result of joining of two arrays without using join function?

function joinArrays(a,b){
    let result=""
    for(let i=0;i<a.length;i++){
        result=result+a[i]+"#"
    }
 
    for(let i=0;i<b.length;i++){
        result=result+b[i]+"#"
    }
    return result
}
 
console.log(joinArrays(new Array(10,20,30), new Array(40,50,60,70)));