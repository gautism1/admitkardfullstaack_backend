const express=require('express');
const search=require('../module/stringy')
const router=express.Router();
const bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({
    extended: true
}));
router.post('/search',async (req,res) =>{
    const {string}=req.body;
    const {Topic}=req.body;
    const {tags}=req.body;
    let newentry={};
    try{
         
        {
                  newentry=new search({
                  string:string,
                  Topic:Topic,
                  tags:tags,
                  date:new Date()
            });
                newentry.save().then((data)=>   {
                 res.json(newentry);
                 }).catch((err)=>  {
                      console.log(err);
                 });     
        }
      {
    if(req.data)
   res.json("no data send");
        }
    }
    catch(err)
{
    conosle.log("ye mera error ",err);
    res.json("Some error occured please wait....")}
});
module.exports=router;