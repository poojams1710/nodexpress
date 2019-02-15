var outvar="tshirt";
function f() {
    innervar="sweater";
    console.log(innervar);
    outvar="shoes";
    console.log(outvar);

}
//localvar take precendence over global var

f();
console.log(outvar);