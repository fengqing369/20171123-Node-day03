var mysql = require('mysql');
var pool  = mysql.createPool({
  connectionLimit : 10,
  host            : '127.0.0.1',
  user            : 'root',
  password        : 'root',
  database        : 'itcast'
});
 
pool.getConnection(function(err, connection) {
 connection.query('SELECT * FROM articles where id=?',[30], function (error, results, fields) {
    //查询完毕以后，释放连接
    connection.release();
 
    if (error) throw error;
    console.log(results[0]);// [数据]
    // console.log(fields);//[字段信息]
  });
});