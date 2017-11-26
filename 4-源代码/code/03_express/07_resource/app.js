'use strict';
// 引入express 和express-art-template
const express = require('express');
//他内部依赖art-template
const expressArtTempate = require('express-art-template');

//声明数据
let myHeros = [{ id: 1, name: '曹操' }, { id: 2, name: '刘备' }, { id: 3, name: '周瑜' }];


let app = express();
// res.render('index.html')能有效果，配置模板引擎
app.engine('html', expressArtTempate);
//默认查找views目录

//创建路由对象
let router = express.Router();
//配置路由规则
router.get('/', (req, res, next) => {
    //express扩展的函数
    res.render('index.html', {
        heros: myHeros
    });
})

//内置中间件
let staticObj = express.static('./public');  //static是保留字
//中间件部署列表
//1:处理静态资源
app.use('/public',staticObj); //  内部end
// 如果内部包含end 就理解为阻断型
// 如果内部包含next 就理解为加工型
//2:处理路由
app.use(router);


// 开启服务器
app.listen(8888);