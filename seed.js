const mongoose=require("mongoose")
const Product=require("./Models/Product")


mongoose.connect("mongodb://127.0.0.1:27017/ecomm-site")
.then(()=>{console.log("db connected successfully")})
.catch(()=>{console.log("error occur")});

const products=[
    {
        name:"iphone",
        price:300,
        img:"https://images.unsplash.com/photo-1664478546384-d57ffe74a78c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aXBob25lJTIwMTQlMjBwcm8lMjBtYXh8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
        desc:"Nice Phone"  
    },
    {
        name:"bicycle",
        price:500,
        img:"https://images.unsplash.com/photo-1576435728678-68d0fbf94e91?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YmljeWNsZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
        desc:"Amazing cycle"  
    },
    {
        name:"Wrist Watch",
        price:600,
        img:"https://images.unsplash.com/photo-1523170335258-f5ed11844a49?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d3Jpc3QlMjB3YXRjaHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
        desc:"Sexy watch"  
    },
    {
        name:"Coat",
        price:500,
        img:"https://images.unsplash.com/photo-1514813836041-518668f092b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNvYXR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
        desc:"beautiful Coat"  
    },
    {
        name:"Shirt",
        price:700,
        img:"https://images.unsplash.com/photo-1598033129183-c4f50c736f10?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fFNoaXJ0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
        desc:"Cotton Cloth"  
    },
    {
        name:"BMW",
        price:1000,
        img:"https://images.unsplash.com/flagged/photo-1553505192-acca7d4509be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Ym13fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
        desc:"Dashing Car"  
    }
]


async function seedProducts(){


    await Product.deleteMany({})
    await Product.insertMany(products);

   console.log("products have been seeded sucessfully")

}

seedProducts()
