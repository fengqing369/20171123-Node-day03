'use strict';
const formidable = require('formidable');
const path = require('path');
exports.addMusic = (req,res,next)=>{
    //3:去了干嘛，接收数据
    let form = new formidable.IncomingForm();
 
    //配置上传路径基于app.js目录
    form.uploadDir = path.resolve('./public/files');
    //基于app.js也就是项目的根目录
    console.log(path.resolve('./public/files'));

    form.parse(req, function(err, fields, files) {
      console.log(fields);//文字数据
      console.log(files);
    });

}