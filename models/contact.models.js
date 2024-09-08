import Mongoose  from "mongoose";

const contactSchema= new Mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phoneno:{
        type:String,
        required:true
    },
    query:{
        type:String,
        required:true
    }
})

const contactmodel =Mongoose.model("Contact",contactSchema);
export default contactmodel;