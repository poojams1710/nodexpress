//Switch statement
function f(val) {
    var answer="";
    switch (val) {
        case 1:
            answer="alpha";
            break;
        case 2:
            answer="beta";
            break;
        case 3:
            answer="gamma";
            break;
        default:
                answer="null";
            break;



    }
    return answer;


}
console.log(f(6));