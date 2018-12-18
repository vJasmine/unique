const express = require('express');
const pool = require('../pool.js');
const router = express.Router();

router.get("/",(req,res)=>{
    var cid = req.query.cid;
    console.log(cid);
    var sql="SELECT zw_case.*,zw_case_pic.*,zw_hotel.hname FROM zw_case,zw_case_pic,zw_hotel WHERE zw_case.cid=zw_case_pic.cid AND zw_case.hid=zw_hotel.hid and zw_case.cid=?";
    pool.query(sql,[cid],(err,result)=>{
        console.log(result);
        if(err) throw err;
        res.writeHead(200,{
            "Content-Type":"application/json;charset=utf-8",
            "Access-Control-Allow-Origin":"*"
        });
        res.write(JSON.stringify(result[0]));
        res.end();
    })
})
module.exports = router;