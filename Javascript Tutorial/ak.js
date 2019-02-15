function f( val) {
    if(val>100){
        return  "over 100";
    }
    if(val<=10) {
        if (val <= 5) {
            return "under 5";
        }
    }
    return "In between 10 and 100";

}
console.log(f(3));