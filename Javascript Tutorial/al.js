function f(val) {
    if(val>50 && val<100){
        if(val>25){
            return "it is above then 25";
        }
    }
    return "value greater then 100"

}
function f2(val) {
    if(val>50 || val<100){
        if(val>25){
            return "it is above then 25";
        }
    }
    return "value greater then 100"

}
console.log(f(45));
console.log(f2(30));