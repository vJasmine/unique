const express = require('express');
const pool = require('../pool.js');
const router = express.Router();

router.get("/",(req,res)=>{
    var cid = req.query.cid;
    // console.log(cid);
    var sql="SELECT v1_case.*,v1_case_pic.*,v1_hotel.hname FROM v1_case,v1_case_pic,v1_hotel WHERE v1_case.cid=v1_case_pic.cid AND v1_case.hid=v1_hotel.hid and v1_case.cid=?";
    pool.query(sql,[cid],(err,result)=>{
        // console.log(result);
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