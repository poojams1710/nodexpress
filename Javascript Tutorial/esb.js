//const
function f1(str) {
    "use strict";
    const SENTENCE=str+" is cool";
    for(let i=0;i<str.length;i++){
        console.log(SENTENCE);
    }

}
f1("mohit");
// once valu assigned under cons it can be modified again
//object freez
function f2() {
    "use strict";

    const MATHSCONSTANT ={
        PI:3.14
    };
    Object.freeze(MATHSCONSTANT);
    //it get freez and now gone to catch block;
    try{
        MATHSCONSTANT .PI=88;
    }catch (e) {
        console.log(e);

    }
    return MATHSCONSTANT. PI;

}
const PI=f2();
console.log(PI);

const magic = () => new Date();
console.log(magic());
//


