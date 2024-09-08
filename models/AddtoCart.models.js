import mongoose from "mongoose";

const { Schema } = mongoose;


const cartSchema = new Schema({
    Id: {
        type: String,
        ref: "CustomerDetail", 
        required: true
    },
    productItem: [{
        Id: {
            type: Schema.Types.ObjectId,
            ref: "AddProductDetail", 
            required: true
        },
        productQty: {
            type: Number,
            required: true,
            default: 1
        }
    }]
},
);

// Create a model based on the schema
const AddtocardDb = mongoose.model("CardDb", cartSchema);

export default AddtocardDb;
