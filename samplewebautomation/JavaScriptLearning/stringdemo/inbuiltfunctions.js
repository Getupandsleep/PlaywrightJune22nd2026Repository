// Inbuilt String Functions:
// -------------------------------------
 
// lower case
let str1="WELCOME";
console.log(str1.toLowerCase());
console.log("-----------------")
//Uppercase
let str2="programming";
console.log(str2.toUpperCase());
console.log("-----------------")
//Extract one character at a time using index
let str3="JAVASCRIPT";
console.log(str3.charAt(2));
console.log("-----------------")
// Existance of teh String
let str4="Bangalore is capital city of Karantaka";
console.log(str4.startsWith("Bangalore"));
console.log(str4.endsWith("Karantaka"));
console.log(str4.includes("capital"));
console.log("-----------------")
//replace 
let str5="It is a new palace";
// if match has fond
console.log(str5.replace("is","was"));
//if match has not found
console.log(str5.replace("is123","was"));
// ------------------------------------------------------------


//from left to right, it provides the position of char or string
let str6="It is a big city, it is a big city"
console.log(str6.indexOf("is"));
console.log(str6.indexOf("is",4));
console.log("------------------------------");
// from right to left, it provides teh position if char or string
let str7="It is a big city, it is a big city"
console.log(str7.lastIndexOf("is"));
console.log("------------------------------");
// conculsion
let str8="ABCDEF"
console.log(str8.indexOf("F"));
console.log(str8.lastIndexOf("F"));
console.log("------------------------------");
//compare Strings
let str9="JAVASCRIPT";
let str10="JAVASCRIPT";
console.log(str9.localeCompare(str10));
console.log("------------------------------");
// substring -> to extract substring from teh given string
let str11="Programming";
console.log(str11.substring(3));  // based on position
console.log(str11.substring(3,7));
// -------------------------------------------------------


//split -> it splits based on delimeter
let str12="Apple Mango Orange Grapes Guava"
let result=str12.split(" ")
console.log(result);
let str13="Lotus,Sunflower#Tulip,Jasmine"
let result1=str13.split(",")
console.log(result1);
// slice -> it slices the String based on start and end position
let str14="Mango Apple Banana Grapes Guava"
console.log(str14.slice(0,10));
// padding teh given String on left or right side
let str15="WELCOME"
console.log(str15.padStart(10,"#"));
console.log(str15.padEnd(10,"#"));
// repeat 
let str16="Good Morning"
console.log(str16.repeat(5));
 
//Trim  -> It remove blank space on both the sides
let str17="   PLAYING   "
console.log("Before Trim opration Number of Characters :"+str17.length);
console.log("After Trim opration Result :"+str17.trim());
console.log("After Trim opration Number of Characters :"+str17.trim().length);