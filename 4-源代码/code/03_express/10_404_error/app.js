'use strict';

const express = require('express'); 
const fs = require('fs');
//创建服务器
let app = express();
//设置模板引擎
app.engine('html',require('express-art-template'));

//配置路由
let router = express.Router();
router.get('/',(req,res,next)=>{
    res.render('index.html',{
        text:'hello!!!'
    })
})
.get('/a',(req,res)=>{
    res.send('a')
})
.get('/b',(req,res)=>{
    res.send('b')
})
.get('/readFile',(req,res,next)=>{
    //读取某个文件，并响应给用户
    fs.readFile('./xxx.txt',(err,data)=>{
        // if(err) throw err;
        if(err) return next(err);//触发错误处理中间件的执行
    })
})
.all('*',(req,res)=>{
    res.send(`
        
        您要查找的页面去旅行了，请稍后再试...
        <a href="/">到首页？</a>

    `);
})

//中间件执行列表
app.use(router);

// 错误处理中间件(4个参数)
app.use((err,req,res,next)=>{
    console.log('出错了!');
    console.log(err);
    res.send(`
        对不起，您访问的页面去医院了，请稍后再试...
        <a href="/">到首页?</a>
    `)
})


app.listen(8888);

