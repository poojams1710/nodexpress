//nested array
var myarr=[[ "mr  mohit", 20], [ "pooja" , 21],["ourbaby",'small' ]];
var myarr1=[50,80,90];
console.log(myarr1[0]);
//modified array with indexes ;

myarr1[1]=89;
// new array

console.log(myarr1);
//ACCESS MULTIDIMENTIONAL ARRAY WITH INDEXES
var myarr3=[[6,7,8],[8,9],[8,0,2,8]];
console.log(myarr3[2][0]);
//manipulae data with push();
myarr3.push(["mohit","bhavya"]);
console.log(myarr3);
//we can not pop out specific element it will always pop up the lastt entered top of stack;

myarr3.pop();
console.log(myarr3);