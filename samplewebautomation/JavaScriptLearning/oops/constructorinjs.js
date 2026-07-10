/* Constructors in JavaScript:
-------------------------------------------
Constructor is block , it execute during creation of object and execution of constructor always provides an object.
 
there are two types of constructors:
1. No-Args constructor
2. Parametrized Constructor
 
1. No-Args constructor:
----------------------------------
Example1: */
class Department{
    deptno;
    dname;
    location;
    constructor(){
        this.deptno=20
        this.dname="Sales"
        this.location="Bangalore"
    }
 
    show(){
        console.log(this.deptno,this.dname, this.location);
    }
}
 
let o1=new Department()
o1.show()
 
let o2=new Department()
o2.show()
 
// Example 2:
class Department1{
    constructor(){
        this.deptno=20
        this.dname="Sales"
        this.location="Bangalore"
    }
 
    show(){
        console.log(this.deptno,this.dname, this.location);
    }
}
 
let d1=new Department1()
d1.show()
 
let d2=new Department1()
d2.show()
 
/* 2. Parametrized Constructor:
----------------------------------------
This type of constructor accepts parameters.
 
Example 1: */
class Employee{
    constructor(eid, ename,jobname,sal){
        this.eid=eid
        this.ename=ename
        this.job=jobname
        this.sal=sal
    }
 
    display(){
        console.log(this.eid, this.ename, this.job, this.sal);
    }
}
 
let e1=new Employee(1001, "Santosh","Manager",45000)
e1.display()
 
let e2=new Employee(1002,"Adams","Analyst",24000)
e2.display()
 
// Case 5: whether a class can have only functions.
class Employee1{
 
    showEmployeeName(ename){
        console.log("Employee Name is "+ename);
    }
 
    displayEmployeeJob(jobname){
        console.log("Employee Job is "+jobname);
    }
 
    showEmployeeSalary(sal){
        console.log("Employee Salary "+sal);
    }
}
 
let obj1=new Employee1()
obj1.showEmployeeName("Santosh")
obj1.displayEmployeeJob("Sales Executive")
obj1.showEmployeeSalary(47000)