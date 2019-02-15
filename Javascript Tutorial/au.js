function f( myarr) {


    var product = 1;
    for (var i = 0; i < myarr.length; i++) {
        for (var j = 0; j < myarr[i].length; j++) {
            product *= myarr[i][j];
        }
    }
    return product;
}
console.log(f(myarr=[[2,4],[9,8,7],[1,4,5]]));