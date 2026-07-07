/* Difference between named function , anonymous function and Arrow function:
------------------------------------------------------------------------------------------------------------------
1. Hoisting:
2. this operator
3. Constructor Representation:
 
 
Named function only can be hoisted */
 
 
//Named function
show()
function show(){
    console.log("Welcome to Hoisting Level");
}
show()
 
// Ananymous function
show1()  // Cannot access 'show1' before initialization
let show1=function(){
    console.log("Welcome to Hoisting Level for Ananymous function");
}
show1()
 
//Arrow Function
show2()  //  Cannot access 'show2' before initialization
var show2=()=>{
    console.log("Welcome to Hoisting Level for Arrow function");
}
show2()
 
// this operator:
// ------------------------
// this operator can be used in named and anonymous function.
 
let employees={
    "eid":101,
    "ename":"Santosh",
    "jobname":"Sales Manager",
    "salary":40000,
    "variablepay":100000,
    "bonus": function showBonus(){
                return (this.salary * 5)/100;
            },
    "commision":function(){
                return (this.salary * 10)/100
            },
    "getvariablepay":()=>{
                        return (this.variablepay*20)/100
                    }
};
 
console.log(employees);
console.log(employees.bonus());
console.log(employees.commision());
console.log(employees.getvariablepay());
 
 
// Constructor Representation:
// ---------------------------------------
 
// Constructor representation can be supported only for Named and Anonymous functions:
//Named function
 
function display(dname, location){
    this.dname=dname
    this.location=location
    console.log("Department Name :"+this.dname);
    console.log("Department Location :"+this.location);
}
 
let obj=new display("Accounting","California")
 
// Ananymous Function
 
let result1=function(dname, location){
    this.dname=dname
    this.location=location
    console.log("Department Name :"+this.dname);
    console.log("Department Location :"+this.location);
}
 
let obj1=new result1("Accounting","California")
 
// Arrow Function
let result2=(dname, location)=>{
    this.dname=dname
    this.location=location
    console.log("Department Name :"+this.dname);
    console.log("Department Location :"+this.location);
}
 
let obj2=new result2("Accounting","California")