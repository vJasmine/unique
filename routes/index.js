const express = require("express");
const router = express.Router();
const pool = require("../pool.js");
// 轮播图
router.get("/carousel",(req,res)=>{
    // 获取轮播图数据并响应回页面
    var sql="SELECT * FROM v1_index_carousel";
    pool.query(sql,(err,result)=>{
        if(err) throw err;
        res.writeHead(200,{
            "Content-Type":"application/json;charset=utf-8",
            "Access-Control-Allow-Origin":"*"
        });            
        res.write(JSON.stringify(result));
        res.end();
    })
})
// 首页案例
router.get("/index_case",(req,res)=>{
    // console.log(123);
    var sql = "SELECT * FROM v1_index_case";
    pool.query(sql,(err,result)=>{
        if(err) throw err;
        res.writeHead(200,{
            "Content-Type":"application/json;charset=utf-8",
            "Access-Control-Allow-Origin":"*"
        });            
        res.write(JSON.stringify(result));
        res.end();
    })
})
// 首页酒店
router.get("/index_hotel",(req,res)=>{
    // console.log(123);
    var sql = "SELECT * FROM v1_index_hotel";
    pool.query(sql,(err,result)=>{
        if(err) throw err;
        res.writeHead(200,{
            "Content-Type":"application/json;charset=utf-8",
            "Access-Control-Allow-Origin":"*"
        });            
        res.write(JSON.stringify(result));
        res.end();
    })
})
// 首页攻略
router.get("/index_tips",(req,res)=>{
    // console.log(123);
    var sql = "SELECT * FROM v1_index_tips";
    pool.query(sql,(err,result)=>{
        if(err) throw err;
        res.writeHead(200,{
            "Content-Type":"application/json;charset=utf-8",
            "Access-Control-Allow-Origin":"*"
        });            
        res.write(JSON.stringify(result));
        res.end();
    })
})
module.exports=router;
