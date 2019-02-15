//acessing nested object
var myplants=[
    {
    "type": flower ,

    list:[
        "rose",
        "lilly",
        "jasmine",
    ]

    },
    {
        "type": veg,
        list:[
            "potatoes",
            "onion",
            "chilly flacks",
        ]

}
];
var m2=myplants[1].list[0];
console.log(m2);
