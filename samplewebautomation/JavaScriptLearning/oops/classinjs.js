/* Object Oriented Programming in JavaScript:
------------------------------------------------------------------
1. class & object:
A class is a template or blue print or logical entity
 
Example:
class as student, it contains variables and functions (these are called as members of the class)
class defines variables such as rollno, student name, age, course name etc functions such as getMarks(), getPercentage() etc
 
Once we can create an object (object has physical Entity)
 
Case 1: Create class which has only variables */
 
class Department{
    deptno;
    dname;
    location;
}
 
let o=new Department()
o.deptno=10
o.dname="Accounting"
o.location="Dallas"
console.log(o.deptno,o.dname,o.location);
 
// Case 2: Can we create multiple objects for the same class
class Department1{
    deptno;
    dname;
    location;
}
 
let o1=new Department1()
o1.deptno=10
o1.dname="Accounting"
o1.location="Dallas"
console.log(o1.deptno,o1.dname,o1.location);
 
let o2=new Department1()
o2.deptno=20
o2.dname="Sales"
o2.location="New York"
console.log(o2.deptno, o2.dname,o2.location);
 
// case 3: Can we assign value to variables in a class itself.
class Department2{
    deptno=10;
    dname="Accounting";
    location="Boston";
}
 
let d2=new Department2()
console.log(d2.deptno,d2.dname,d2.location);
 
let d21=new Department2()
console.log(d21.deptno,d21.dname,d21.location);
 
// Case 3: We should a method to assign a value
class Department3{
    deptno;
    dname;
    location;
 
    setDeptDetails(){
        this.deptno=10
        this.dname="Operations"
        this.location="California"
    }
 
    display(){
        console.log(this.deptno, this.dname, this.location);
    }
}
 
let d3=new Department3()
d3.setDeptDetails()
d3.display()
 
let d31=new Department3()
d31.setDeptDetails()
d31.display()
 
// Case 4: Eliminate hardcoding the value for variables in functions.
class Department4{
    deptno;
    dname;
    location;
 
    setDeptDetails(dno, deptname,location){
        this.deptno=dno
        this.dname=deptname
        this.location=location
    }
 
    display(){
        console.log(this.deptno, this.dname, this.location);
    }
}
 
let d4=new Department4()
d4.setDeptDetails(10,"Accounting","Dallas")
d4.display()
 
let d41=new Department4()
d41.setDeptDetails(20,"Sales","New York")
d41.display()