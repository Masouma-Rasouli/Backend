import mongoose from "mongoose"

export default async function dbconnect (){
    try{
        await mongoose.connect("mongodb+srv://masoumarasouli:LG3pwFxptQKh5G8v@cluster0.3ijiugh.mongodb.net/record-shop")
        console.log("connection with database is stablished");
        } 
        catch(err){
            console.log("Error connecting to MongoDB: ", err)
        }
        
}
