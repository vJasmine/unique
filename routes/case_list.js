const express = require('express');
const query = require('./query.js');
const router = express.Router();

router.get("/",(req,res)=>{
    var output={
        count:0,    //查询出的数据总量
        pSize:9,    //每页的数据量
        pCount:0,   //总页数
        pram:req.query.pram,  //排序的参数
        pNum:req.query.pNum,    //页码
    };
    var kw = req.query.kw;
    var sql="SELECT v1_case.*,v1_case_pic.case_pic_0,v1_hotel.hname,v1_planner.plan_name FROM v1_case,v1_case_pic,v1_hotel,v1_planner WHERE v1_case.cid=v1_case_pic.cid AND v1_case.hid=v1_hotel.hid AND v1_case.plan_id=v1_planner.plan_id ";
    if(kw){
        var kws=kw.split(" ");
        kws.forEach((elem,i,arr)=>{
            arr[i]=` AND cstyle LIKE '%${elem}%'`;
        })
        var where=kws.join(" ");
        sql += where;
    }
    // if(output.pram == 1 || !output.pram){
    //     sql += " LIMIT ?,?";
    // }else 
    if(output.pram == 2){
        sql += " ORDER BY watched";
    }else if(output.pram == 3){
        sql += " ORDER BY price";
    }
    query(sql,[])
    .then(result=>{
        output.count=result.length;
        output.pCount=Math.ceil(output.count/output.pSize);
        sql+=" LIMIT ?,?"
        // console.log(output);
        return query(sql,[(output.pNum-1)*output.pSize,output.pSize]);
    })
    .then(result=>{
        for(var item of result){
            item.output = output;
        }
        // console.log(result);
        res.writeHead(200,{
            "Content-Type":"application/json;charset=utf-8",
            "Access-Control-Allow-Origin":"*"
        });
        res.write(JSON.stringify(result));
        res.end();
    })
})
module.exports = router;
