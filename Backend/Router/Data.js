import express from "express"
import con from "../Database/Db.js"


const router = express.Router()

router.post("/userdata",(req,res) => 
{
  const sql ="insert into userdetails(username,email,password,phone) values(?)"
  const value = [req.body.name,req.body.email,req.body.password,req.body.phone]
  con.query(sql,[value],(err,result) =>
 {
    if (err) return res.json({ Status: false, Error: err })
    return res.json({Status:true,Result:result})
 })
})

router.post("/login",(req,res) => 
{
    const sql ="select * from userdetails where email = ?";
    con.query(sql,[req.body.email],(err,result) =>
    {
        if(err) return res.json({Status:false,Error:"query error"})

            if(result.length>0)
            {
                if(req.body.password==result[0].password)
                {
                    return res.json({Status:true,Result:result})
                }
                else
                {
                    return res.json({Status:false,Error:"Wrong Password"})
                }
            }
            else
            {
                return res.json({Status:false,Error:"Wrong Email And Password"})
            }
    })
})



export {router as DataRouter}