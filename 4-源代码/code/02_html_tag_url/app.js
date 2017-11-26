'use strict';
const http = require('http');
const fs = require('fs');

console.log(require('querystring'));

//创建服务器对象
let server = http.createServer( (req,res)=>{

    if(req.url == '/1/2/3/index.html'){
        fs.readFile('./index.html',(err,data)=>{
            if(err) throw err;
            res.end(data);
        })
    }else{
        res.end('ok');
    }

});


// arr.find(方式);


//开启服务器
server.listen(8888,'127.0.0.1',()=>{
    console.log('服务器开启了');
});