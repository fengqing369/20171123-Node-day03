'use strict';
//引入express对象
let express = require('express');
//构建服务器对象
let app = express();
//开启监听
app.listen(8888);


// 创建路由对象
let router = express.Router();

//配置路由规则 开始
router.get('/get',(req,res,next)=>{
    res.end('this is get');
});
router.post('/post',(req,res,next)=>{
    res.end('this is post');
});
//配置路由规则 结束

//中间件队列执行列表 开始

app.use((req,res,next)=>{
    console.log('开始执行了');
    next();
})
app.use(router);  //最终都会end,参考15行代码

//中间件队列执行列表 结束