'use strict';
const http = require('http');
const fs = require('fs');


//创建服务器对象
let server = http.createServer( (req,res)=>{
    //处理请求，响应数据
    //设计路由
    // req.url == '/' => 返回首页
    // req.url == '/getPic' =>  响应图片
    
    if(req.url == '/'){
        fs.readFile('./index.html',(err,data)=>{
            if(err) throw err;
            // let htmlStr = data.toString();
            res.end(data);
        })
    }else if( req.url == '/getPic'){
        fs.readFile('./1.jpg',(err,data) =>{
            if(err) throw err;
            res.end(data); //data是读出来的数据，原封不动的向客户端写出去
        })
    }

});


// arr.find(方式);


//开启服务器
server.listen(8888,'127.0.0.1',()=>{
    console.log('服务器开启了');
});