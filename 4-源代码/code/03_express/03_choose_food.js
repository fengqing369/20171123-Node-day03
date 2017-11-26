'use strict';
const express = require('express');
//构建服务器
let app = express();

//前两个中间件的处理是针对url以 /huncai开头才触发执行
app.use('/huncai',(req,res,next)=>{
    console.log(req.url); //url在匹配好中间件以后，是否有改变
    //  当url是 /huncai/zhu/1/2
    //  req.url 是/zhu/1/2
    console.log('猪肉');
    next();
});
app.use('/huncai',(req,res,next)=>{
    console.log('牛肉');
     next();
});
//后两个中间件的处理是针对url以 /sucai 开头才触发执行
app.use('/sucai',(req,res,next)=>{
    console.log('白菜');
    next();
});
app.use('/sucai',(req,res,next)=>{
    console.log('茄子');
    next();
});
//最终的处理 
//下面这个中间件的处理是针对url以 任意 开头就触发执行
app.use((req,res)=>{
    res.writeHead(200,{
        'content-type':'text/plain;charset=utf-8'
    });
    res.end('吃完了，开心');
});

//开启监听
app.listen(8888,()=>{
    console.log('您好,请选择你吃的菜品:')
});