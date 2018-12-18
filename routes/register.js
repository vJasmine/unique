const express=require("express");
const router=express.Router();
var pool=require("../pool");
router.get("/checkname",(req,res)=>{
    // console.log(req.query);
    // 获取用户名
    var uname = req.query.uname;
    var sql = "SELECT * FROM zw_user WHERE uname=?";
    // 在数据库中查找用户名是否已经存在
    pool.query(sql,[uname],(err,result)=>{
        if(err) throw err;
        // console.log(result);
        if(result.length > 0){  // 用户名已存在，响应状态码0
            res.send({code:0,msg:"User name already exists!"});
        }else{  // 用户名不存在，响应状态码1
            res.send({code:1,msg:"User name available!"});
        }
    })
})
router.get("/checkphone",(req,res)=>{
    // console.log(req.query);
    // 获取电话
    var phone = req.query.phone;
    var sql = "SELECT * FROM zw_user WHERE phone=?";
    // 在数据库中查找电话是否已经存在
    pool.query(sql,[phone],(err,result)=>{
        if(err) throw err;
        console.log(result);
        if(result.length > 0){
            res.send({code:0,msg:"Phone already exists!"});
        }else{
            res.send({code:1,msg:"Phone available!"});
        }
    })
})
router.post("/",(req,res)=>{
    // console.log(req.body);
    var uname=req.body.uname;
    var upwd=req.body.upwd;
    var phone=req.body.phone;
    var sql="INSERT INTO zw_user(uname,phone,upwd) VALUES (?,?,?)";
    pool.query(sql,[uname,phone,upwd],(err,result)=>{
        if(err) throw err;
        // console.log(result);
        if(result.affectedRows > 0){
            res.send({code:1,msg:"Register success!"});
        }else{
            res.send({code:0,msg:"Register failed!"})
        }
    })
})
module.exports=router;