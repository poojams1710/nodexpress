var myarr =[];
 var i=0;
  while(i<5){
      myarr.push(i);
      i++
  }
  console.log(myarr);

  var myarr1=[];
  for(var i=0;i<10;i=i+3){
      myarr1.push(i);

  }
  console.log(myarr1);
  var myarr2=[];
  for(var i=10;i>0;i--){
      myarr2.push(i);
  }
  console.log(myarr2);
  function f1(num) {
      return num>0 ? "pos": num < 0? "neg" :"zero"

  }
  console.log(f1(8));
  /// var and let
let catname="Quincy";
let  Qoute;
 catname="Baeu";
 function f3() {
     "use strict";
// if we use catname
     // catename="b";
     Qoute=catname+"meow";
     return catname;



 }
 console.log(f3());

