// 1. Find the sum of number in between 1 to 10
 
// 1+2+3+4+5+6+7+8+9+10=55
 
// Answer:
//1+2+3+4+5+6+7+8+9+10=55
/*
   let i=1
   i=i+1
*/
let sum=0;
for(let i=1;i<=10;i++){
    sum=sum+i
}
console.log("sum of Numbers :"+sum);
 
// 2. Find sum of numbers in between 1 to 100 which are divisible by 6?
/*
    step 1: print numbners 1 to 100
    step 2: extract numbers which are divisible by 6
    step 3: find sum
*/
let sum1=0;
for(let i=1;i<=100;i++){
    if(i % 6 ==0){
        sum1=sum1+i        
    } 
}
console.log("sum  Result:"+sum1);
 
// 3.  Find count of numbers in between 1 to 100 which are divisible by 6?
/*
    step 1: print numbners 1 to 100
    step 2: extract numbers which are divisible by 6
    step 3: find count
*/
let count=0;
for(let i=1;i<=100;i++){
    if(i % 6 ==0){
        count=count+1      
    } 
}
console.log("count  Result:"+count);
 
// 4. Find factorial of a Number
// 1! => 1 
// 2! => 2 * 1
// 3! => 3 * 2* 1
// 4!=> 4 * 3 * 2 * 1
 
// find factorial of a given number
 
let num=6
let fact=1
for(let i=num;i>=1;i--){
    fact=fact * i    
}
console.log("Factorial :"+fact);
 
// 5. display the first 10 fib numbers?
// 0  1  1  2  3  5  8  13  21  34  
// fn=0
// sn=1
// tn=fn+sn
// fourth=sn+tn
// fifth=tn+fourth
// six=fourth+fifth
 
// 0  1  1  2  3  5  8  13  21  34  
 
let fn=0
let sn=1
console.log(fn);
console.log(sn);
for(let i=1;i<=8;i++){
    tn=fn+sn
    console.log(tn);
    fn=sn
    sn=tn
}
 
// 6) verify the given number is prime number or not?
// The must divisible by 1 and itself
// num=12
// 2,3,4,5,6,7,8,9,10,11
// num % (2,3,4,5,6,7,8,9,10,11)
// num=17
let flag=0
 
for(let i=2;i<num;i++){
    if(num % i ==0){
        flag++;
        break;
    }
}
 
if(flag==0){
    console.log(num+" is a Prime Number");
}else{
    console.log(num+" is not a Prime Number");
}