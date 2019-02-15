// returning boolean value from function
function f(a,b) {
    return a<b;

}
console.log(f(12,20));
// returning early value
function f1(a,b) {
    if(a<0 || b<0){
        return undefined;
    }
    return  Math.round(Math.pow(Math.sqrt(a)+Math.sqrt(b),2));

}
console.log(f1(2,2));