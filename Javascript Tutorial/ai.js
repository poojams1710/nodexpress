var sum=0;

function f() {
    /// it will not return anything 
    sum+=1;
    return sum;

}
f();
console.log(f())   ;
function f1(num) {
    sum+=num;
    return sum;
    
}
   sum=f1(67) ;
console.log(sum)  ;