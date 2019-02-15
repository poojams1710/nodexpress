/* anything inside single qoute or double quote it will always treated as string
*/
var myStr="I am a String under \"double quotes\".";
/*backslash quotation mark js treated as string literal word inside it*/
console.log(myStr);
var myStr1='<a href="https://www.google.com" title="-blank">link</a>';
console.log(myStr1);
var str7='<a href="https://www.yahoo.com" title ="- nothing">link  second or yahoo </a>';
console.log(
    str7);

var myStr2="firstLine\n\t\\second line\t\n third ";
console.log(myStr2);
var mystr3="this is the first  ." + "this is the end";
console.log(mystr3);
/* for string concate
var mystr3="this is the fist."
 mystr3+="this is the next last one.";
console.log(mystr3);
//STRING CONCATENATE WITH VARIABLE
var vari="i am get added using variable inside string";
var myStr5=" here i am "+ vari+ "it get added";
console.log(myStr5);



