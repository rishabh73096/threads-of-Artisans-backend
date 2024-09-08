import Mongoose from "mongoose";
const EventsSchema = new Mongoose.Schema({
    EventName:{
        type:String,
        required:true
    },
    EventVenue: {
        type:String,
        required:true
    },
    EventDescription: {
        type:String,
        required:true
    },
    EventOrganiser: {
        type:String,
        required:true
    },
    Date: {
        type:String,
        required:true
    }
})
const EventsModels= Mongoose.model("EventsDetail",EventsSchema)
export default EventsModels;