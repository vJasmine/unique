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
    // var kw = req.query.kw;
    var sql="SELECT zw_case.*,zw_case_pic.case_pic_0,zw_hotel.hname,zw_planner.plan_name FROM zw_case,zw_case_pic,zw_hotel,zw_planner WHERE zw_case.cid=zw_case_pic.cid AND zw_case.hid=zw_hotel.hid AND zw_case.plan_id=zw_planner.plan_id";
    query(sql,[])
    .then(result=>{
        output.count=result.length;
        output.pCount=Math.ceil(output.count/output.pSize);
        // console.log(output);
        // if(kw){
        //     var kws=kw.split(" ");
        //     kws.forEach((elem,i,arr)=>{
        //         arr[i]=`AND cstyle LIKE '%${elem}%'`;
        //     })
        //     var where=kws.join(" ");
        //     sql += where;
        // }
        if(output.pram == 1 || !output.pram){
            sql += " LIMIT ?,?";
        }else if(output.pram == 2){
            sql += " ORDER BY watched LIMIT ?,?";
        }else if(output.pram == 3){
            sql += " ORDER BY price LIMIT ?,?";
        }
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
//     var pCount=5;
//     var pNum = req.query.pNum;
//     var pram = req.query.pram;
//     var sql="SELECT zw_case.*,zw_case_pic.case_pic_0,zw_hotel.hname,zw_planner.plan_name FROM zw_case,zw_case_pic,zw_hotel,zw_planner WHERE zw_case.cid=zw_case_pic.cid AND zw_case.hid=zw_hotel.hid AND zw_case.plan_id=zw_planner.plan_id";
//     if(pram == 1 || !pram){
//         sql += " LIMIT ?,?";
//     }else if(pram == 2){
//         sql += " ORDER BY watched LIMIT ?,?";
//         console.log(1);
//     }else if(pram == 3){
//         sql += " ORDER BY price LIMIT ?,?";
//     }
//     pool.query(sql,[(pNum-1)*pCount,pCount],(err,result)=>{
//         if(err) throw err;
//         for(var item of result){
//             item.count = Math.ceil(result.length/pCount);
//         }
//         // console.log(result);
//         res.writeHead(200,{
//             "Content-Type":"application/json;charset=utf-8",
//             "Access-Control-Allow-Origin":"*"
//         });
//         res.write(JSON.stringify(result));
//         res.end();
        
//     })
// })
// module.exports = router;