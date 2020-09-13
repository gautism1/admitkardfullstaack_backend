const mongoose=require('mongoose')
const stringsearch=new mongoose.Schema(
     {
          string:String,
          Topic:String,
          tags:[],
          date:{
               type:Date,
               default:Date.now
          }

     }
);
module.exports=mongoose.model('search',stringsearch)