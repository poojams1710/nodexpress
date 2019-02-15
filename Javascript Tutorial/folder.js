const fs=require('fs');
fs.mkdir('tutorial',(err)=>{
    if(err){
        console.log(err);
    }else{
        console.log("successfully created tutorial folder");
        // fs.rmdir('tutorial',(err)=>{
        //     if(err){
        //         console.log(err);
        //     }else{
        //         console.log('deleted');
        //     }
        // });
    }

});