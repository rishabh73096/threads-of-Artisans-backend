import mongoose  from "mongoose";
const addProductSchema = new mongoose.Schema({
    Id:{
        type:String,
        required:true,
    },
    ProductName:{
        type: String,
        required:true,
    },
    Qty: {
        type: Number,
        required:true,
    },
    Description: {
        type: String,
        required:true,
    },
    price: {
        type: Number,
        required:true,
    },
    discount: {
        type: Number,
        
    },
    pic: {
        type: String,
        required:true,
    },
});

const AddProductModel = mongoose.model("AddProductDetail",addProductSchema)
export default AddProductModel;