const express=require("express")
const router=express.Router()
const Product=require("../Models/Product")
const {isLoggedIn}=require("../middleware")

//get all products
router.get("/products",async(req,res)=>{
    const products= await Product.find({})
    res.render("products/index",{products})
})

//to add new product
router.get("/products/new",isLoggedIn,(req,res)=>{
    res.render("products/new")
})

router.post("/products",isLoggedIn,async(req,res)=>{
    const {name,price,desc,img}=req.body
    await Product.create({name,price,desc,img})
    req.flash("success","Product Added Successfully")
    res.redirect("/products")
})

//to show product
router.get("/products/:productid",async(req,res)=>{
    const {productid}=req.params
    const products=await Product.findById(productid).populate("reviews")  //populate()-Whenever in the schema of one collection we provide a reference (in any field) to a document from any other collection,  
                                                                                 //we need a populate() method to fill the field with that document.
    console.log(products)
    res.render("products/show",{products})
})

//to edit product
router.get("/products/:productid/edit",isLoggedIn,async(req,res)=>{
    const {productid}=req.params
    const products=await Product.findById(productid)
    res.render("products/edit",{products})
})

router.patch("/products/:productid",isLoggedIn,async(req,res)=>{
    const {productid}=req.params
    const {name,img,price, desc} =req.body;
    await Product.findByIdAndUpdate(productid, {name, price, img, desc});
    req.flash("success","Product Updated Successfully")
    res.redirect("/products")
})

//to delete product
router.delete("/products/:productid",isLoggedIn, async(req,res)=>{

    const {productid} = req.params;

    await Product.findByIdAndDelete(productid);
    req.flash("error","Product Deleted Successfully")
    res.redirect("/products")
})











module.exports=router