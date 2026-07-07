// JavaScript Objects:
// ------------------------------------
// If we can consider a Pen is an Object, 
// Properties:
// 1. color
// 2. cap size
// 3. ink color
 
// Actions:
// 1. Writing
 
// Case 1: Define an object provide some properties and read properties, write properties, remove properties?
// Note 1: Create an Object
let student={
    firstname:"Santosh",
    age:22,
    coursename:"Research & Science",
    marks:570,
}
 
console.log(student);
 
 
// Note 2: Read each properties:

 
//Read Property value
console.log(student["firstname"]);
console.log(student["coursename"]);
console.log(student.firstname);
console.log(student.coursename);
 
// Note 3: Add new Property and Update Existing Property and Delete a Property
 
 
//Add new property
student["cityname"]="Mysore"
student.country="India"
console.log(student);
 
 
// Modify Existing proeprty value
student["coursename"] ="Human Science"
console.log(student);
 
// Delete a Property
delete student.country
console.log(student);
