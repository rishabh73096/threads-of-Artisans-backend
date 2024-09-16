import mongoose from "mongoose";

const dbURL = "mongodb://tiwari7309651657:Rishabh%407309651657@cluster0-shard-00-00.un6p7.mongodb.net:27017,cluster0-shard-00-01.un6p7.mongodb.net:27017,cluster0-shard-00-02.un6p7.mongodb.net:27017/?replicaSet=atlas-ifrupx-shard-0&ssl=true&authSource=admin";

const connectDB = async () => {
    try {
        const connection = await mongoose.connect(dbURL);
        console.log("Connected to MongoDB");    
       
    } catch (error) {
        console.error("Error connecting to MongoDB:", error.message);
    }
};

export default connectDB;
