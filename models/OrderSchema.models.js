
import mongoose from "mongoose";
const { Schema } = mongoose;
const orderSchema = new mongoose.Schema({
    customerId: {
        type: String,
        ref: "CustomerDetail",
        required: true
    },
    products: [{
        productId: {
            type: Schema.Types.ObjectId,
            ref: "AddProductDetail",
            required: true
        },
        productQty: {
            type: Number,
            required: true,
            default: 1
        }
    }],
    totalPrice: {
        type: Number,
        required: true
    },
    orderDate: {
        type: Date,
        default: Date.now
    },
    orderstatus: {
        type: String,
        enum: ['Pending', 'Shipped', 'Delivered'],
        default: 'Pending'
    },
    address:{
        type:String,
        default:null,
        required:false
    },
    cardno:{
        type:String,
        default:null,
        required:false
    },
    expire:{
        type:String,
        default:null,
        required:false
    },
    cvv:{
        type:String,
        default:null,
        required:false
    }
});

    





const Order = mongoose.model("Order", orderSchema);

export default Order