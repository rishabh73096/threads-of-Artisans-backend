import mongoose from "mongoose";

const dbURL = "mongodb+srv://tiwari7309651657:Rishabh%407309651657@cluster0.x0yhjfd.mongodb.net/threads_of_artisans_db";

const connectDB = async () => {
    try {
        const connection = await mongoose.connect(dbURL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            serverSelectionTimeoutMS: 30000 // 30 seconds
          });
        console.log("Connected to MongoDB");    
       
    } catch (error) {
        console.error("Error connecting to MongoDB:", error.message);
    }
};

export default connectDB;
