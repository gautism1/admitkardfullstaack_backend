const express=require('express');
const search=require('../module/stringy')
const router=express.Router();

router.post(('/searching'),async (req,res)=>{
  try{
        const searchable= req.body.name;  
        const allstrings= await search.find();  
             if(allstrings)
        {
                 let result=[];           
                  for(let i=0;i<allstrings.length;i++) {
                     if(allstrings[i].string && allstrings[i].string.includes(searchable) ||  allstrings[i].tags.includes(searchable)  ) 
                       {
                             result.push(allstrings[i]);                
                        }
            }
            res.status(200).json(result);  
        }  
        else {
            res.status(201).json("Question bank is empty");
            }
  }
        catch(err)
    {
       console.log("Something we  nt wrong",err);
   }
}
);

module.exports=router;
