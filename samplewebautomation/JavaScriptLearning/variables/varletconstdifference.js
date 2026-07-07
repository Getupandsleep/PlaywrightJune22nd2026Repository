// Difference between var, let and const keywords:

// -----------------------------------------------------------------------

// 1. Scope Level

// 2. Declaration and Assigning value

// 3. Redeclaration

// 4. Re-initialization

// 5. Hoisting
 
// 1. Scope Level:

// --------------------

// var : it has function scope

// let & const : these have block scope
 
// function scope example:
 
function display(){

    if(true){

        var x=500

        console.log(x);

    }

    console.log(x);

}

display()

// Output:

// 500

// 500
 
// Block scope Example:

function display(){

    if(true){

        let a=250

        console.log(a);

    }

    //console.log(a);  // it provides error since let is a block scope

}

//display()

    // output:

    // 250
 
function display1(){

    if(true){

        const a=250

        console.log(a);

    }

   // console.log(a);  // it provides error since let is a block scope

}

display1()

// output:

// 250
 
// 2. Declaration and Assigning value:

// var : can be declared and assign value in next line

// let : can be declared and assign value in next line

// const: we should assign value in declaration itself
 
// Example:

// var keyword

var x;

console.log(x);

x=40

console.log(x);

// let keyword

let a;

console.log(a);

a=40

console.log(a);

//const keyword

const b=400;

console.log(b);
 
// Output:

// undefined

// 40

// undefined

// 40

// 400
 
// 3. Redeclaration:

// var : it can be redeclared

// let &  const : these can't be redeclared
 
//var keyword

var a1=100

console.log(a1);

var a1=200

console.log(a1);

//let keyword: it can not accept redeclaration

let x1=20

console.log(x1);

// let x=90  // Identifier 'x' has already been declared

// console.log(x);
 
//const keyword: it can not accept redeclaration

const p=300

console.log(p);

// const p=500 // SyntaxError: Identifier 'p' has already been declared

// // console.log(p);
 
// 4. Re-initialization:

// var & let can be re-initialized

// const : It can not be re-initialized
 
//var keyword

var a2=100

console.log(a2);

a2=300

console.log(a2);
 
//let keyword

let b1=500

console.log(b1);

b1=400

console.log(b1);
 
//const keyword

const c=650

console.log(c);

// c=750  // TypeError: Assignment to constant variable.

// console.log(c);
 
// 5. Hoisting:

// ---------------

// Before declaration of variable ,if we can able to use variable
 
// var : supports hoisting

// let & const : doesn't support
 
// var keyword

console.log(a3);

var a3=10

console.log(a3);
 
// let keyword

// console.log(b);  // ReferenceError: Cannot access 'b' before initialization

let b2=20

console.log(b2);
 
//const keyword

//console.log(c); // ReferenceError: Cannot access 'c' before initialization

const c2=750

console.log(c2);

 