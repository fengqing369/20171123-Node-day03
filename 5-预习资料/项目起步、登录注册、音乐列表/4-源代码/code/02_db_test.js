//let dbTools = require('./02_dbTools.js');
//dbTools.insert();.....
//dbTools.update();.....
//

// 声明dbTools.insert = function(collectionName,insertArr,callback){


let dbTools = require('./02_dbTools.js');
// console.log(dbTools);
//测试插入数据
// dbTools.insert('users',[{ name:'jack&rose'}],(err,result)=>{
//     if(err) throw err;
//     console.log(result);
// });

// 测试更新数据
//function(collectionName,filter,modifyObj,callback){}
// dbTools.update('users',{name:'加油加油加油加油'},{test:'再笑一个'},(err,result)=>{
//     if(err) throw err;
//     console.log(result);
// });

//测试查询数据
// dbTools.find('users',{ name:/牛/ },(err,users)=>{
//     if(err) throw err;
//     console.log(users);
// });

//测试删除数据
dbTools.remove('users',{name:'齐天大圣'},(err,result)=>{
    if(err) throw err;
    console.log(result);
});