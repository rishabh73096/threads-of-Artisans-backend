import  Mongoose from "mongoose";
const shopkeeperSchema = new Mongoose.Schema({
    Id:{
        type:String,
       required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
    },
    shopkeeperName:{
        type:String,
        required:true,   
    },
    brandName:{
        type:String,
        required:true,   
    },
    email:{
        type:String,
        required:true,
        
    },
    contact:{
        type:String,
        required:true,
        
    },
    city:{
        type:String,
        required:true,
        
    },
    address:{
        type:String,
        required:true,
        
    },
    state:{
        type:String,
        required:true,
        
    },
    specility:{
        type:String,
     required:true,
        
    }
})
const ShopKeeperModel = Mongoose.model("shopkeeperDetail",shopkeeperSchema)
export default ShopKeeperModel
