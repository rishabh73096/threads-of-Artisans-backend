import Mongoose from "mongoose";
const CustomerSchema = new Mongoose.Schema({
  Name: {
    type: String,
    required: true,
  },
  Id: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },

  phoneno: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
});
const CustomerModel = Mongoose.model("CustomerDetail", CustomerSchema);
export default CustomerModel;
