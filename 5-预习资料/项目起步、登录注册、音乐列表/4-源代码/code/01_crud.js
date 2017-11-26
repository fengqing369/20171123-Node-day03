'use strict';
//引入第三方对象（程序）
const mongo = require('mongodb');
//从程序中启动一个类似黑窗口的客户端(node中的客户端)
const mongoClient = mongo.MongoClient;
//创建url -> mongodb IP 端口 数据库
const url = 'mongodb://192.168.161.63:27017/test';


//插入数据
// mongoClient.connect(url,(err,db) =>{
//     if(err) throw err;
//     //核心思想: db有多个，db中有多个集合，集合中有多个文档对象
//     //通过bd拿集合对象
//     let usersCollection = db.collection('users');

//     //通过集合对象操作文档对象
//     usersCollection.insertMany([{name:'传智31期，厉害！'},{name:'传智31期，厉害2！'}],(err,result)=>{
//             if(err) throw err;
//             console.log(result);
//             console.log(result.insertedCount);
//             console.log(result.insertedIds);
//             //关闭连接
//             db.close();
//     });
// });

//更新数据
// mongoClient.connect(url,(err,db) =>{
//     if(err) throw err;
//     //核心思想: db有多个，db中有多个集合，集合中有多个文档对象
//     //通过bd拿集合对象
//     let usersCollection = db.collection('users');

//     //通过集合对象操作文档对象
//     usersCollection.updateMany({name:'传智31期，厉害2！'},{$set:{ test:'笑一个'}  },(err,result)=>{
//             if(err) throw err;
//             console.log(result);
//             console.log(result.modifiedCount);
//             console.log(result.matchedCount);
//             //关闭连接
//             db.close();
//     });
// });

//查询数据
// mongoClient.connect(url,(err,db) =>{
//     if(err) throw err;
//     //核心思想: db有多个，db中有多个集合，集合中有多个文档对象
//     //通过bd拿集合对象
//     let usersCollection = db.collection('users');

//     //通过集合对象操作文档对象
    // usersCollection.find({name:/31期/}).toArray( (err,docs)=>{
    //     if(err) throw err;
    //     console.log(docs);
    //     //关闭连接
    //     db.close();
    // });
// });


// //删除数据
// mongoClient.connect(url,(err,db) =>{
//     if(err) throw err;
//     //核心思想: db有多个，db中有多个集合，集合中有多个文档对象
//     //通过bd拿集合对象
//     let usersCollection = db.collection('users');

//     //通过集合对象操作文档对象
//     usersCollection.deleteMany({name:/31期/},(err,result)=>{
//         if(err) throw err;
//         console.log(result.deletedCount);
//         //关闭连接
//        db.close();
//     });
// });


//通过mongodb程序获取ObjectId生成器
// const ObjectID = mongo.ObjectID;

// //根据_id作为条件查询指定数据
// // ObjectId("597ea36b52917a1b144b8ce1"), "name" : "我们同意好好学习" }
// mongoClient.connect(url,(err,db) =>{
//     if(err) throw err;
//     let usersCollection = db.collection('users');

//     //通过集合对象操作文档对象
//     usersCollection.find({_id:ObjectID("597ea36b52917a1b144b8ce1")}).toArray( (err,docs)=>{
//         if(err) throw err;
//         console.log(docs);
//         //关闭连接
//         db.close();
//     });
// });