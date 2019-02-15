//extracting letters from words sentenc
var firstname="mohit";
 var l1=firstname[0];
console.log(l1);
//String are immutable means once it created it cannt be altered again .it does not means it can be changed
/*var str1="jello world";
str1[0]="h";
//it show error
str1="hello world" work*/
// to get thhe last letter of last name
var l2= firstname[firstname.length-1];
console.log(l2);
/// second last letter
var l3=firstname[firstname.length-2];
console.log(l3);
//WORD BLANK
function f( mynoun,myadj,verb,adverb) {
    var result = "";
    result += "the " + myadj + mynoun + verb + "to the store" + adverb ;
        return result;


}
console.log(f("dog","big","ran"," quickly"));


