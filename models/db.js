const mongoose  = require('mongoose');

const connectDB = async ()=>{
    try{
        await mongoose.connect("mongodb+srv://V3025:12345678910@cluster0.f8yflnn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
        console.log("database connected successfully");
        
    } catch(error){
        console.log("Something went wrong", error)
    }
}

module.exports = connectDB