// 引入express
const express=require('express');
const bodyParser=require('body-parser');
// 引入路由模块
var register=require('./routes/register.js');
var index=require('./routes/index.js');
var clist = require('./routes/case_list.js');
// 创建express模块
var app=express();
// 绑定监听端口
app.listen(3000);
// 绑定静态目录
app.use(express.static(__dirname+"/public"));
app.use(bodyParser.urlencoded({ extended: false }));
// 使用路由器管理路由
app.use("/register",register);
app.use("/index",index);
app.use("/clist",clist);