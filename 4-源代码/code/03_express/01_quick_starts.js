'use strict';
// 原生http模块服务器
const http = require('http');
//创建服务器
let server = http.createServer((req,res)=>{
    res.end('node-server');
});
//开启监听
server.listen(8881,()=>{
    console.log('node服务器启动了');
});
// 
// 
// express服务器
//引入第三方包
const express = require('express');
//创建服务器
let app = express();
//开启监听
app.listen(8882,()=>{
    console.log('express服务器启动了');
});
//处理响应之一
app.use(function(req,res){
    res.end('express-server'); //原生的API
});