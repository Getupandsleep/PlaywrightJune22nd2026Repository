/* Exception Handling:
-----------------------------
There 3 Types of Errors:
1. Syntax Errors
2. Logical Error
3. Run time Error
 
try: if any exception has raised it will throw the exception
 
catch : Catch block catches the exception thrown by the try block
 
finally: It an optional block , irrespective of exception raised or not ,this block executes always. */
 
function addition(x,y){
    let result= (x + y)
    console.log("Addition Result :"+result);
}
 
function multiplication(x,y){
    let result= (x * y)
    console.log("Multiplication Result :"+result);
}
 
function division(x,y){
    try{
        let result= (x / y)
        console.log("Division Result :"+result);
    }catch(error){
        console.log(error);
    }finally{
        console.log("It is executes always");
    }
}
 
multiplication(12,10)
division(25,0)
addition(40,30)
 