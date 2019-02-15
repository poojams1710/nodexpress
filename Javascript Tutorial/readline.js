const readline=require('readline');
const r1=readline.createInterface({input:process.stdin,
    output:process.stdout});
let num1=Math.floor((Math.random()*10)+1);
let num2=Math.floor((Math.random()*10)+1);
let ans=num1+num2;
r1.question(`what is ${num1} +${num2} ?\n`,
     (userinput) => {

             if (userinput.trim() === ans) {
                 r1.close();

             }

         });
     r1.on('close',()=>{
         console.log("correct");
     });

