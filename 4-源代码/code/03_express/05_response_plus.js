// res.sendFile()  显示一个文件
// res.download()  下载文件


// res.json()   响应json对象
// res.jsonp()  配合jsonp
// res.redirect()    重定向
// res.send()     发送字符串数据自动加content-type
// res.sendStatus()  响应状态码
'use strict';
const express = require('express');
const app = express();
const path = require('path');
app.listen(8888);

// 路由规则配置
let router = express.Router();
router.get('/sendFile',(req,res)=>{
    //必须绝对路径
    res.sendFile(path.join(__dirname,'05_index.html'));
})
router.get('/download',(req,res)=>{
    res.download('./1.mp3');
})
.get('/json',(req,res)=>{
    res.json({ name:'jack',age:18   });
    //res.end(字符串或者fs读出来的二进制数据);
})
//  http://127.0.0.1:8888/jsonp?callback=myjsonpTest
.get('/jsonp',(req,res)=>{
    res.jsonp({ name:'myjsonp'  });
    //res.end(字符串或者fs读出来的二进制数据);
})
.get('/redirect',(req,res)=>{
    res.redirect('http://www.baidu.com');
    //res.end(字符串或者fs读出来的二进制数据);
})
.get('/sendStatus',(req,res)=>{
    res.sendStatus(500);
    //res.end(字符串或者fs读出来的二进制数据);
})
.get('/send',(req,res)=>{
    res.send(`
        <ul>
            <li>北京</li>
            <li>啥模糊和</li>
        </ul>
        <i>哈哈</i>

    `);
    //res.end(字符串或者fs读出来的二进制数据);
})
// app.use 大纲列表
app.use(router);