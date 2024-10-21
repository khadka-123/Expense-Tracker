const mongoose=require('mongoose')

const transactionSchema=new mongoose.Schema({
    userId:{
        type:String,
        required:true
    },
    amount:{
        type:Number,
        required:[true,"amount is required"]
    },
    type:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    reference:{
        type:String,
    },
    description:{
        type:String,
        required:[true,"description is required"]
    },
    date:{
        type:Date,
        required:[true,"date is required"]
    }
},{timestamps:true})

const transactionModel=mongoose.model('transactions',transactionSchema)

module.exports= transactionModel