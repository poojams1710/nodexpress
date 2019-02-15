// let scope
function checkscope(num) {
    "use strict";
    let i="function scope";

    if(num>5){
        let i="block scope";
        console.log("i come in whatever in block ",i);
    }
     console.log("i take value in function ",i);
    return i;


}
console.log(checkscope(7));