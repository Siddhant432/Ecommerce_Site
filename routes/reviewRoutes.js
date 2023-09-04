const express=require("express")
const router=express.Router()
const Product=require("../Models/Product")
const Review=require("../Models/Review")
const mongoose = require("mongoose")
const { isLoggedIn } = require("../middleware")


router.post("/products/:productid/review",isLoggedIn, async(req,res)=>{

    const {productid} = req.params;
    const {rating, comment}= req.body;


    //find the product with the given productid
     const product = await Product.findById(productid);
     const review = await Review.create({ rating , comment})

      product.reviews.push(review);

      await product.save()

     res.redirect(`/products/${productid}`)
})

module.exports=router