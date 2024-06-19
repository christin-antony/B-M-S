import mongoose from 'mongoose'
const Schema = new mongoose.Schema({ 
       
    name:{type:String,required:true,max:100},
    age:{type:Number,required:true,max:100},
    email:{type:String,required:true,max:1000},
    contact:{type:String,required:true,max:10000},
    gender:{type:String,required:true,max:100},
    address:{type:String,required:true,max:10000},
    
},{timestamps:true})

export const bankSchema = mongoose.model('bank',Schema)