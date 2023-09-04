const mongoose=require("mongoose")
const passportLocalMongoose=require("passport-local-mongoose")


const userSchema=new mongoose.Schema({
    email:String,

    cart: [
        {
            name: String,
            price: Number,
            img: String,
            id: mongoose.Schema.Types.ObjectId,
            count : {
                type:Number,
                default: 1,
                min: [0, "Quantity cannot ne less than 1"]
            }

        }



    ]
})

userSchema.plugin(passportLocalMongoose)

const User=mongoose.model("User",userSchema)

module.exports=User