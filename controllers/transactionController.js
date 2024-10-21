const transactionModel=require('../models/transactionModel');
const moment=require('moment');

const getAllTransaction=async(req,res)=>{
   try {
    const {selectedDate,frequency,type}=req.body;

    const transactions=await transactionModel.find({
        userId:req.body.userId,
        ...(frequency!="custom")?{

            date:{
                $gt:moment().subtract(Number(frequency),'days').toDate(),
            },
        }:{
            date:{
                $gte:selectedDate[0],
                $lte:selectedDate[1],
            }

        },
        ...(type!='all' && {type}),
    })
   res.status(200).json(transactions)
   } catch (error) {
    res.send(500).json(error)
   }
}

const editTransaction=async(req,res)=>{
    try {
        await transactionModel.findOneAndUpdate({_id:req.body.transactionId},req.body.payload)
        res.status(200).send("Edit Successful");
    } catch (error) {
        console.log(error)
        res.status(500).json(error)
    }
}
const deleteTransaction=async(req,res)=>{
    try {
        await transactionModel.findOneAndDelete({_id:req.body.transactionId})
        res.status(200).send("Transaction Deleted")
    } catch (error){
        console.log(error)
        res.status(500).json(error)
    }
}

const addTransaction=async(req,res)=>{
    try {
        const newTransaction=new transactionModel(req.body)
        //if new transaction is found save it
        await newTransaction.save();
        res.status(200).send("Transaction Created")
    } catch (error) {
        console.log(error)
        res.status(500).json(error)
    }
}

module.exports={getAllTransaction,addTransaction,editTransaction,deleteTransaction}