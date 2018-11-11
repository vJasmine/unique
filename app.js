const express=require('express');
const pool=require('./pool.js');
// 构建web服务器
var app=express();
app.listen(3000);
// 托管静态资源
app.use(express.static('./public'));