// 引入express
const express=require('express');
const bodyParser=require('body-parser');
const session =require('express-session');
// 引入路由模块
var register=require('./routes/register.js');
var index=require('./routes/index.js');
var clist = require('./routes/case_list.js');
var cdetail = require('./routes/case_details.js');
var login = require('./routes/login.js');
// 创建express模块
var app=express();
// 绑定监听端口
app.listen(3000);
// 绑定静态目录
app.use(express.static(__dirname+"/public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(session({
    secret: '128位随机字符串',
    resave: false,
    saveUninitialized: true,
}));
// 使用路由器管理路由
app.use("/register",register);
app.use("/index",index);
app.use("/clist",clist);
app.use("/cdetail",cdetail);
app.use("/login",login);