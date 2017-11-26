'use strict';
//引入express对象
const express = require('express');
//构建对象器对象
let app = express();

//app.use在请求的时候一定会触发
//1:都触发，输出3行
//2:只触发一个,小白菜 -> 先写的先生效
//3:西红柿炒蛋 -> 后写的覆盖了前写的作用



app.use((req,res,next)=>{
    console.log('小白菜');
    next();  //放行到红烧肉
});

app.use((req,res,next)=>{
    console.log('红烧肉');
    next(); //放行到西红柿炒蛋
});
app.use((req,res,next)=>{
    console.log('西红柿炒蛋');
    //res.writeHead(404);
    next();
    // res.end('ok');
});


//开启监听
app.listen(8888,()=>{
    console.log('猜猜我是什么菜？'); //第一个输出
});