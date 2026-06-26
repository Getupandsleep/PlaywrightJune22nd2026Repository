let char='U'
 
switch(char){
    case 'A':
        console.log("A is a Vowel");
        break;
    case 'E':
        console.log("E is a Vowel");
        break;
    case 'I':
        console.log("I is a Vowel");
        break;
    case 'O':
        console.log("O is a Vowel");
        break;
    case 'U':
        console.log("U is a Vowel");
        break;
    default:
        console.log("Character is not a Vowel");
}
  
let char1='I'
 
switch(char1){
    case 'A':case 'E':case 'I':case 'O':case 'U':
        console.log(char1+" is a Vowel");
        break;
    default:
        console.log("Character is not a Vowel");
}