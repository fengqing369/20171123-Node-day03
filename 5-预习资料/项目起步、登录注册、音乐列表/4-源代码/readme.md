### 准备开始
---
#### 学员反馈

#### 复习
* cookie
    - maxAge(express代码中)
        + max-age 和expires
        + max-age 主流除IE 以当前时间过期的秒数,3600
            * 在服务器代码中则表示毫秒值
            * expires 是只的IE上cookie的过期时间点
        + 对于非IE 来说，两个属性都可以用，但是以max-age为更高权限
    - path
        + 设置cookie有效的路径(浏览器自动携带cookie)
            * 举例:cookie('myname','tjx') 设置 /abc
            * 访问当前网站的/abc 和/abc/xxxx 都会自动携带cookie
            * 访问/def  和访问 / 不会携带cookie
* session
    - session基于cookie，但是不是必须
        + session基于请求头，带来钥匙，就可以实现通过钥匙存储数据
        + 假设每次请求 `xhr.setReqeustHeader('connnect.sid','x1sw24d21df2')`
        + 服务器每次去除头中的connect.sid
        + global['x1sw24d21df2'] 操作用户数据
* 大小
    - session没有大小限制,cookie大小限制4kb,个数在同一个域30-50
        + 一个cookie 是指的一组键值对
* 安全性
    - session更好
* 数据持久化
    - session重启数据就没有了,cookie长时间保存在浏览器
        + cookie默认过期时间是浏览器关闭时

* mongodb数据库操作
    - CRUD
        + c -> insert
        + r -> find
        + u -> update
        + d -> remove || delete
    - 以上对应API大部分都提供了one和many的操作，细分你的调用
    - 内置 $
        + $set 更新操作符
        + $gt 大于
        + $lt 小于
        + $ne 不等于
        + $gte 大于等于
        + $lte 小于等于
        + $or 或者[],并且 多个key
        + 区间范围 60~90
            * score:{ $gt:60,$lt:90} 
    - 模糊-> 正则
    - 分页-> 跳几个skip,显示几个limit
        + 三到六条:skip(2).limit(4)
    - sort({ score:1||-1  })
        + -1代表降序 1代表升序
    - mongodb 
        + CDU 增删改 返回result 对象{}
        + R 查询 返回文档对象docs []




#### 今日重点

#### ObjectId
* 以ID作为条件查询数据
* const ObjectID = mongo.ObjectID;
* ObjectID("ID字符串");
* 黑窗口客户端 `db.users.find({_id:ObjectId("597ea4a8390547c03dac4533")});`
* node中代码 `集合对象.find({_id:ObjectID("597ea4a8390547c03dac4533")})`

#### 提取dbTools

#### 打通前后台过程
* 通过后台模板渲染，打通后台到页面的架构
* 通过mongodb打通node到数据库的架构


#### 模板配置
* 注册一个当后缀名是html所使用的引擎
    - `app.engine('html',xxx);`
* 设置res.render时express的查找路径
    - `app.set('views','./tmlps');`
* 使用
    - `res.render('index');`  //我不知道找谁来做模板引擎
* 设置默认的模板引擎
    - `app.set('view engine','html')`
    - 告知express不管后缀名。默认就找app.engine('html',xxx);
* 设置art-template默认的补充后缀名
    - .art 替换为 .html
    - `views options中加入 extname:'.html'`

#### robomongo


#### 设计后端路由(页面)
* 注册页面
* 登录页面
* 添加音乐页面
* 音乐列表页面
* 编辑音乐页面
* 按照业务划分中间件职责
    - /public 静态资源 具体匹配干掉这个标识/public
    - /user 用户模块 具体匹配干掉这个标识/user
        + userRouter.get('/login'); 不需要匹配/user
    - /music 音乐模块 具体匹配干掉这个标识/music
* 作为文件来单独存储路由对象
    - 1:引入express
    - 2:导出配置好的router对象


#### 设计后端路由(数据接口)

#### 登录注册逻辑

#### 是否可访问