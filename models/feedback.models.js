import Mongoose  from "mongoose";

const feedbackschema= new Mongoose.Schema({
name:{
    type:String,
    required:true
},
email:{
    type:String,
    required:true
},
query:{
    type:String,
    required:true
}

})


const feedbackmodel=Mongoose.model("Feedback",feedbackschema)
export default feedbackmodel;