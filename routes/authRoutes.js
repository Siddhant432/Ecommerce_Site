const express=require("express")
const router=express.Router()
const User=require("../Models/User")
const passport=require("passport")


router.get("/register",(req,res)=>{
    res.render("auth/Signup")
})

//register a user

router.post("/register",async(req,res)=>{
    
    const {username,password,email}=req.body
    const user=new User({username,email})
    const newUser=await User.register(user,password)
    req.flash("success","User Registered Successfully")
    res.redirect("/login")
})

router.get("/login",(req,res)=>{
    res.render("auth/Login")
})

router.post("/login", 

    passport.authenticate("local", {
      
        failureRedirect : "/login",
        failureFlash : true ,
        failureMessage:true
  
    }),
    function(req,res){


        req.flash("success", `welcome back  ${req.user.username}`);

        res.redirect("/products")
    }
)

router.get("/logout", (req,res)=>{


    req.logOut((err)=>{

        if(err) {return next(err)};

        req.flash("success", "Goodbye see you again!");
        res.redirect("/login")
    })
})






module.exports = router;
