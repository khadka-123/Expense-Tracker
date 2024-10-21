const express=require("express");
const { addTransaction, getAllTransaction,editTransaction,deleteTransaction} = require("../controllers/transactionController");


const router=express.Router();

//add transaction post method
router.post('/add-transaction',addTransaction)
//edit transaction post method
router.post('/edit-transaction',editTransaction)
//delete transaction post method
router.post('/delete-transaction',deleteTransaction)

//get transactions
//as id is passed so post method
router.post('/get-transaction',getAllTransaction)

module.exports=router;