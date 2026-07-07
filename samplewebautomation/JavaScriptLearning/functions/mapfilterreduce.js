/* 3. map(), filter(), reduce():
------------------------------------------
 
map() -> It is an inbuilt array function , it is a Higher Order function , It accepts a callback function based on that function it transforms the elements in the array.
 
Example1: */
 
let numbers=[2,5,4,3,1,6]
 
//square of each elements in array
// [4,25,16,9,1,36]
 
function squareNums(x){
    return x * x
}
console.log(numbers.map(squareNums));
 
console.log("------------------------------");
//Named Function passing as callback function
let result1=numbers.map(function squareNums1(x){
    return x * x
})
console.log(result1);
console.log("------------------------------");
//Ananymous Function passing as callback function
let result2=numbers.map(function(x){
    return x * x
})
console.log(result2);
 
 
console.log("------------------------------");
//Arrow Function passing as callback function
let result3=numbers.map((x)=>{
    return x * x
})
console.log(result3);
 
//*************************** Binary value of a given number ************** */
function binary(x){
    return x.toString(2)
}
 
console.log(numbers.map(binary));
 
// filter():   It is an inbuilt array function , it is a Higher Order function , It accepts a callback function based on that function it filters the elements in the array.
 
// Example:
 
// dispaly even numbers
// [2,4,6]
//display odd numbers
//[1,3,5]
// greater than 4
// [5,6]
 
function evenNums(x){
    return (x % 2 ==0)
}
 
function oddNums(x){
    return (x % 2 ==1)
}
 
function greaterThan4(x){
    return (x > 4)
}
console.log(numbers.filter(evenNums));
console.log(numbers.filter(oddNums));
console.log(numbers.filter(greaterThan4));
 
 
// reduce() :  It is an inbuilt array function , it is a Higher Order function , It accepts a callback function based on that function it accumulates  the result of elements in the array.
 
// Example:
 
let sumofelements=function(numbers){
    let sum=0
    for(let i=0;i<numbers.length;i++){
        sum =sum + numbers[i]
    }
    return sum
}
 
console.log(sumofelements(numbers));
console.log("--------------------------");
let sumofElements=numbers.reduce(function(acc, curr){
    return acc=acc + curr
},0)
 
console.log(sumofElements);