/* Inheritance in JavaScript:
------------------------------------------
Inheritance provides reusability, based on sub class object we can access members of sub class as well as members of its parent class or super class.
 
class BasicCalculator(
    // All Basic maths function : 50 functions
}
 
 
class ScientificCalculator{
     // All Scientific Function  :  400 Functions
}
 
if ScientificCalculator extends BasicCalculator in this case 
BasicCalculator -> Parent class / Super Class / Base Class
ScientificCalculator - >Child Class/ sub class / derived class
 
Based on object of ScientificCalculator class we can access all members of Parent class.
Note: In Inheritance we must create object only for Sub class.
 
Types of Inheritance:
-----------------------------------
1. Simple Inheritance
Example: */
class Maths1{
    addition(x,y){
        console.log("Addition Result :"+(x + y));
    }
}
 
class Maths2 extends Maths1{
    substraction(a,b){
        console.log("Substraction Result :"+(a - b));
    }
}
 
let obj1=new Maths2()
obj1.substraction(40,20)
obj1.addition(40,30)