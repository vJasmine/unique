// 用于用户登录、注销登录有关的请求
const express=require("express");
const router=express.Router();
const pool=require("../pool.js");

// 用户登录
router.post("/signin",(req,res)=>{
    var uname=req.body.uname;
    var upwd=req.body.upwd;
    // console.log(uname,upwd);
    pool.query("select * from v1_user where uname=? and upwd=?",[uname,upwd],(err,result)=>{
        if(err) throw(err);
        res.writeHead(200,{
            "Content-Type":"application/json;charset=utf-8",
            "Access-Control-Allow-Origin":"*"
        });
        if(result.length>0){
            // console.log(result);
            var user=result[0];
            req.session["uid"]=user["uid"]
            // console.log(req.session["uid"]);
            res.write(JSON.stringify(
                {ok:1,msg:'signin success!'}
            ))
          }
        else{
            res.write(JSON.stringify(
                {ok:0,msg:"uname or upwd error！"}
            ))
        }
        res.end();
    })
})
// 判断是否登录
router.get("/islogin",(req,res)=>{
    // console.log(req.session["uid"]);
    res.writeHead(200,{
        "Content-Type":"application/json;charset=utf-8",
        "Access-Control-Allow-Origin":"*"
    });
    if(req.session.uid===undefined){
        res.write(JSON.stringify({ok:0}));
        res.end();
    }else{
        var uid = req.session.uid;
        var sql = "select * from v1_user where uid = ?";
        pool.query(sql,[uid],(err,result)=>{
            if(err) throw err;
            var user = result[0];
            res.write(JSON.stringify({
                ok:1,
                uname:user.uname
            }));
            res.end();
        })
    }
})
// 退出登录
router.get("/signout",(req,res)=>{
    res.writeHead(200,{
        "Content-Type":"application/json;charset=utf-8",
        "Access-Control-Allow-Origin":"*"
    });
    req.session.uid = undefined;
    res.write(JSON.stringify({
        ok:0,
        msg:"退出登录成功"
    }));
    res.end();
})
module.exports=router;
    
//测试：
//http://localhost:3000/login/islogin ok:0 检查是否登录(未登录)
//http://localhost:3000/login/signin?uname=aaa&upwd=aaa123 ok:1  进行登录
//http://localhost:3000/login/islogin ok:1 检查是否登录(已登录)
//http://localhost:3000/login/signout      退出登录
//http://localhost:3000/login/islogin ok:0 检查是否登录(未登录)