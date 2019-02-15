/* to prove one number is prime

 */
function f(num) {
    var c=0;
    for(var i=1;i<num;i++){
        if(num%i==0){
            c=c+1;
        }
    }
    if(c==2){
        console.log("num is prime");
    }else{
        console.log("num is not prime ");
    }


}
console.log(f(8));