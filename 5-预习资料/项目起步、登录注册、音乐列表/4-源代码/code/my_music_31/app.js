'use strict';
const express = require('express');
//引入body-parser处理请求体数据
const bodyParser = require('body-parser');
//引入session
const session = require('express-session');
//创建服务器
let app = express();
//配置对象
const config = require('./config.js');
//引入路由对象
const userRouter = require('./web_routers/userRourer.js');
const musicRouter = require('./web_routers/musicRouter.js');
const apiRouter = require('./web_routers/apiRouter.js');

//设置模板配置
//1:声明.html后缀的由art-template来处理
app.engine('html',require('express-art-template') ); //.html后缀我来渲染
app.set('view engine', 'html'); //默认以.html为后缀，使用上面这个引擎
//2:设置express默认查找目录
app.set('views','./tmpls');
//3:设置art-template的options
app.set('view options',{
    debug: process.env.NODE_ENV != 'production',    //true不缓存不压缩，false:  缓存，压缩
    extname:'.html'
});

//处理post请求 json 或者键值对，将对象挂载到req.body上
// // parse application/x-www-form-urlencoded 处理键值对
app.use(bodyParser.urlencoded({ extended: false }));
// // parse application/json 解析json数据作为请求体数据
app.use(bodyParser.json()); 
//处理静态资源

//处理session
app.use(session({
  rolling:true,//顺延
  secret: 'itcast',
  resave: false,  //不修改数据不覆盖
  saveUninitialized: true, //一连接就生成cookie
  cookie: { 
    // secure: true  true是https，默认是http
    // 这个钥匙默认过期时间是5分钟，如果你在4:：59秒操作了,时间顺延
    // 如果超过过期时间，钥匙重新生成，由钥匙做key挂载的值就丢失了
    maxAge:config.cookieTime
}
}))
app.use('/public',express.static('./public'));


//登录过期驱逐
app.use('/music',(req,res,next)=>{
    if(!req.session.user){
        return res.send(`
            您的登录已经过期
            <a href="/user/login">点我去登录</a>
        `)
    }
    next();//放行

});


app.use('/user',userRouter);  //根据/user选择性调用这个中间件

app.use('/music',musicRouter);
//异步数据接口
app.use('/api',apiRouter); // ajax:/api/do-register



//错误处理中间件
app.use((err,req,res,next)=>{
    console.log('出异常了');
    console.log(err);
    res.send(`
            <div style="backgroud-color:yellowgreen;">不好意思，系统出了一点异常....稍等片刻..</div>
        `)
})

//开启监听
app.listen(config.server_port,()=>{
    console.log('服务器启动了,8888');
});