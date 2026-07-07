/* 2. Higher Order Function:
--------------------------------------
A function which takes another function as parameter and returns a function, this type of function is called as Higher Order function.
 
Case 1: Before Applying Higher Order Function concept: */
 
let radius=[3,4,1,2,5,6]
 
let calculateArea=function(radius){
    let result=[]
    for(let i=0;i<radius.length;i++){
        result.push(Math.PI * radius[i] * radius[i])
    }
    return result
}
 
console.log(calculateArea(radius));
 
let calcualteCircuference=function(radius){
    let result=[]
    for(let i=0;i<radius.length;i++){
        result.push(2 * Math.PI * radius[i])
    }
    return result
}
 
console.log(calcualteCircuference(radius));
 
let calculateDiameter=function(radius){
    let result=[]
    for(let i=0;i<radius.length;i++){
        result.push(2 * radius[i])
    }
    return result
}
 
console.log(calculateDiameter(radius));
 
 
// Case 2: After Applying Callback Function and developed Higher Order Function
 
function area(radius){
    return Math.PI * radius * radius;
}
 
function circumference(radius){
    return 2 * Math.PI * radius
}
 
function diameter(radius){
    return 2 * radius
}
 
let calculate=function(radius, formulaLogic){
    let result=[]
    for(let i=0;i<radius.length;i++){
        result.push(formulaLogic(radius[i]))
    }
    return result
}
 
console.log(calculate(radius,area));
console.log(calculate(radius,circumference));
console.log(calculate(radius,diameter));
 
// Case 3: Higher Order function exactly similar to map() function:
 
function area(radius){
    return Math.PI * radius * radius;
}
 
function circumference(radius){
    return 2 * Math.PI * radius
}
 
function diameter(radius){
    return 2 * radius
}
 
Array.prototype.calculate=function(formulaLogic){
    let result=[]
    for(let i=0;i<this.length;i++){
        result.push(formulaLogic(this[i]))
    }
    return result
}
 
console.log(radius.calculate(area));
// console.log(calculate(radius,circumference));
// console.log(calculate(radius,diameter));
 
console.log(radius.map(area));