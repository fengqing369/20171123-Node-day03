'use strict';

const express = require('express'); 
//创建服务器
let app = express();
//设置模板引擎
app.engine('html',require('express-art-template'));

const bodyParser = require('body-parser')

 



//配置路由
let router = express.Router();
router.get('/',(req,res,next)=>{
    res.render('index.html',{
        text:'hello!!!'
    })
})
.post('/login',(req,res,next)=>{
    console.log(req.body);
    res.send('ok');
})

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());
//以上中间件的设置位置必须早于路由的处理，因为路由中我们需要的req.body,是由中间件来完成封装对象，并挂载的，最终，人家next();

//中间件执行列表
app.use(router);



app.listen(8888);

