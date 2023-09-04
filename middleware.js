module.exports.isLoggedIn=(req,res,next)=>{
    
    if(!req.isAuthenticated()){
        req.flash("error","You Need to Login fist")
        return res.redirect("/login")
    }
    next()
}