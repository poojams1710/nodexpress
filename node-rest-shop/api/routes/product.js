const express=require('express');
const  router=express.Router();
const P=require('../models/p');
const mongoose=require('mongoose');

router.get('/',(req,res,next)=>{
    res.status(200).json(
        {
            message:"handling get request for products"
        }
    )
});

router.post('/',(req,res,next)=> {

    const product =new P ({
        _id:new mongoose.Types.ObjectId(),
        name: req.body.name,
        price: req.body.price


    });
    product.save().then(result=>{
        console.log(result);
    }).catch(err=>console.log(err));

    res.status(201).json(
        {
            message:"handling post req for product",
            createProduct:product
        }
    );
});
router.get('/:productId',(req,res,next)=>{
    const id=req.params.productId ;
    if(id==='special'){
        res.status(200).json(
            {
                message: "u are entering special id",
                id: id,
            });
        }
        else{
            res.status(200).json(
                {
                    message:"u passed id",
                });
        }




});
router.patch('/:productId',(req,res,next)=>{
    res.status(200).json(
        {
            message:"updated product",
        }
    )
});
router.delete('/:productId',(req,res,next)=>{
    res.status(200).json(
        {
            message:"delete product",
        }
    )
});


module.exports=router;