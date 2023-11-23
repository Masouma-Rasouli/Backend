import {Schema, model} from "mongoose";

const RecordSchema= new Schema({
title:{type: String, required:true},
description:{type: String, required:true},
brand:{type: Number},
rating:{type: Number},
category:{type: String, required:true},
thumbbnail:{type: String, required:true},
images:[String]
})

const RecordsModel= model("Record",RecordSchema) //name of collection, schema name

export default RecordsModel