// case 1: How to Declare an array and How to assign Elements and How to Read Elements
//declare an array
let arr=[]
//assign Elements
arr[0]=10
arr[1]=20
arr[2]=30
arr[3]=40
//Read Elements
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
 
// case 2: Apply looping statement to read Elements from an Array
//declare an array
let ar=[]
//assign Elements
ar[0]=10
ar[1]=20
ar[2]=30
ar[3]=40
//Read Elements
for(let i=0;i<ar.length;i++){
    console.log(ar[i]); 
}
 
// case 3: Apply for each loop to read Elements
let a=[]
//assign Elements
a[0]=10
a[1]=20
a[2]=30
a[3]=40
//Read Elements
for(let ele of a){
    console.log(ele);
}
console.log("-----------------------");
 
// read Elements
for(let x in a){
    console.log(a[x]);
}
 
//case 4: Read Elements from an array in revere order
 
//declare
let arr1=[]
//assign Elements
arr1[0]=10
arr1[1]=20
arr1[2]=30
arr1[3]=40
//Read Elements
for(let i=arr1.length-1;i>=0;i--){
    console.log(arr1[i]);
}
 
// case 5: Assign Elements in to an array in declaration step itself
//declare
let arr2=[10,20,30,40,50]
//Read Elements
for(let x of arr2){
    console.log(x);
}
 
// case 6: Whether an array can sore different datatype of Elements
//declare
let x=[100,true, 12.75, "Mango", false, "Lotus"]
// read Elements
for(let i in x){
    console.log(x[i]);
}