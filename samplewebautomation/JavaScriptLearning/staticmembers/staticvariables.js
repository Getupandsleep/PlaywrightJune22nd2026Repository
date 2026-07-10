/* static members in class:
----------------------------------------
In class static members includes variables, functions, static members can be accessible based on class Name since those are at class Level.
 
Case 1: Declare static variables in a class and Execute them */
class Department{
    deptno
    static dname
    static location
 
}
 
let o=new Department()
Department.deptno=10
Department.dname="Accounting"
Department.location="Dallas"
console.log(Department.deptno, Department.dname, Department.location);
 
