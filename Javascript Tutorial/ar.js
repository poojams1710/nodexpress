//
function f(val) {
    var ans="";
     var lookup={
        "alpha":"1",
         "beta":"2",
         "gamma":"3",
         "delta":"4"
     };
     ans=lookup[val];
    return ans;

}
console.log(f("alpha"));
// testing obj for properties
var Mohit ={
    love:"bhavya",
    age:"20",

};
function f1(checkprop) {
    if(Mohit.hasOwnProperty(checkprop)){
        return "yes found";
    }return "not";


}
console.log(f1("love"));
//manipulating complex object
var mystorage={
    car:{
        inside:{
            "glove box":"1",
            "passanger seat": "2",

        }
    },
    outside:{
        "wheel":"4",
    }

};
var m1=mystorage.car.inside["glove box"];
console.log(m1);
























