// Display Pattens in JavaScript:
// -----------------------------------------------
// * * * * * * *
// * * * * * * *
// * * * * * * *
// no of rows = 3
// no of cols = 7
let pattern=""
for(let i=1;i<=3;i++)
{
    for(let j=1;j<=7;j++)
    {
          patten=pattern+" * "
    }
}
 
/*
 
* * * * * * *
* * * * * * *
* * * * * * *
 
*/
let pattern1=""
for(let i=1;i<=3;i++){
    for(let j=1;j<=7;j++){
        pattern1=pattern1+" * "
    }
    pattern1=pattern1+"\n"
}
 
console.log(pattern1);
 
// case 1: display pattern using while loop:
 
/*
 
* * * * * * *
* * * * * * *
* * * * * * *
 
*/
 
let pattern2=""
let i=1
while(i<=3){
    let j=1
    while(j<=7){
        pattern2=pattern2+" * "
        j++
    }
    pattern2=pattern2+"\n"
    i++
}
console.log(pattern2);
 
// case 2: display pattern using do while loop
/*
 
* * * * * * *
* * * * * * *
* * * * * * *
 
*/
let pattern3=""
let k=1
do{
    let j=1
    do{
        pattern3+=" * "
        j++
    }while(j<=7)
    pattern3+=" \n"
    k++
}while(k<=3)
 
console.log(pattern3);
 
// Display the below pattern:
// 1
// 1 2 
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5
 
// rows = 5
// cols = each row wise specific number of cols
 
// Solution:
/*
 
1
1 2 
1 2 3
1 2 3 4
1 2 3 4 5
 
*/
let pattern4=""
for(let i=1;i<=5;i++){
    for(let j=1;j<=i;j++){
        pattern4+=j+" "
    }
    pattern4+="\n"
}
console.log(pattern4);