import mongoose from "mongoose";
const adminschema = new mongoose.Schema({
    admin_id:{
        type:String,
        required:true,
        unique:true,
        trim:true
    },
    admin_pass:{
        type:String,
        required:true,
        min:6,
        max:20
    }
})
const AdminModel = mongoose.model("AdminDetails",adminschema)
export default AdminModel;