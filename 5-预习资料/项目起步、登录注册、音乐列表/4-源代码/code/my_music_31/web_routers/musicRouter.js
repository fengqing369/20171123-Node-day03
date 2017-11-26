const express = require('express');

//音乐相关路由对象
let musicRouter = express.Router();
musicRouter.get('/list-music',(req,res)=>{// 列表
    res.render('index',{
        user:req.session.user
    });
})
.get('/add-music',(req,res)=>{// 添加音乐
    res.render('add');
})
.get('/edit-music',(req,res)=>{// 编辑音乐
    res.render('edit');
});

module.exports = musicRouter;