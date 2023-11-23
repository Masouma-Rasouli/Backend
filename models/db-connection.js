import mongoose from "mongoose"

export default async function dbconnect (){
    try{
        await mongoose.connect("mongodb://127.0.0.1:27017/recordshop")
        console.log("connection with database is stablished");
        } 
        catch(err){
            console.log("Error connecting to MongoDB: ", err)
        }
        
}
