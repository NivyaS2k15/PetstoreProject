import mongoose, { Schema } from "mongoose";

const Buy = mongoose.model(
    'Buy',
    new Schema({
        name:{
            type:String
        },
       
        address:{
            type:String
        },
        state:{
            type:String
        },
        district:{
            type:String
        },
        pin:{
            type:String
        }


    })
);

export default Buy;