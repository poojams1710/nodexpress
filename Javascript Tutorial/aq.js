var DOG={
    "name": "Quincy",
    "color": "white",
    "gen": "fem",
};
DOG.name="H Quincy";
delete DOG.color;
var Quincyname=DOG.name;
var Quincygen=DOG.gen;
console.log(Quincygen);
console.log(Quincyname);
var  q1=DOG["name"];
console.log(q1);
var Qc=DOG.color;
console.log(Qc);


