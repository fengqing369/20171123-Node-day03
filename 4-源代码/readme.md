### 准备开始
---
#### 学员反馈
凃老大，包那里还是有点不太明白
    包是更有效的组织管理我们的多个js文件代码
    不是一定非要那样，但是那样更好
        src -> 源码
        node_modules 依赖包
        package.json 包描述文件
        readme.md 说明书
        test 测试文件
        bin  
            npm.cmd 
            xxx.exe  双击就启动

*** 感觉好乱，做作业的时候也是完全没从下手，只能抄，好纠结！！！
    每日练习比较重要,关于零散的点，可以结合起来练一下

*** 武汉做前端的公司多不多？ 想去南方找机会试试

*** 就知道严格模式是ES6中的一种 到底是做啥的
        严格模式就是约束
            约束with语句
            约束全局函数中的this是undefined
        ES6是代码功能的扩展

 还有nodejs 不是一种框架么 这两天讲的内容具体能干啥不是很清楚
    nodejs作为网络留言本的服务器
        - nodejs是后台语言运行的环境,其环境可以让JavaScript代码运行后台功能

*** 老师，既然js是单线程，那为什么Ajax也可以实现同步或者异步
    DOM ->  script标签 -> 请求js文件 ->解析并运行js(单线程)
    浏览器来负责发起ajax请求，他肯定不是单线程的

*** 岳父大人，不知要成为你的女婿有什么要求没有啊？

*** 老师能不能画图存照片的时候吧图片剪裁一下呢/。
    - 我尽力注意!

*** 今天的内容挺难得，都听不懂，好郁闷，觉得脑子结石了，动脑子都动不了
        NPM -> 命令
        包 ->  加载机制，硬背 1/3
            1:package.json中的main属性
            3:包文件夹下的index.js
        http:
            约定双方交互方式(数据格式)
            服务器 与 浏览器，先有请求后有响应
            
            4个  
                请求对象 (对客户端来说,可写)
                响应对象 (对客户端来说,可读)

                请求对象 (对服务器来说,可读)
                响应对象 (对服务器来说,可写)

                请求对象(客户端操作)，响应对象(服务器操作)

            请求对象(请求报文,头行体)
                对于服务器:获取头行体
               `req.on('data',data=>{  data.toString(); })`
               框架中可以帮我们简化该操作
            响应对象(响应报文,头行体)
                对于服务器:操作头行体
                
                fs.readFile(路径,(err,data)=>{
                    let 字符串 = data.toString();
                    `注意: res.end(字符串或者data);`
                })
                


  模块化的理解还是有点模糊

  数据劫持有点懵
    存数据，取数据中间的一些操作
        判断数据是否允许这样存，不允许，就劫持了

  对包那里 还有 处理请求参数 那里 不太明白
        post请求，数据是以键值对的形式存在的 
            require('querystring').parse('username=abc&age=18');
            {username='abc',age=18}


 老师你的嘴皮子太6了，咱能不能商量一下，讲慢点，给点消化的时间！！！！！！
#### 复习

#### 今日重点

#### 启程helloworld
* 安装`npm i express -S`
* 1:引入express第三方对象
* 2:构建一个服务器对象
* 3:开启服务器监听端口
* 4:处理响应
* 在express中，保留了原生http的相关属性和函数

#### 中间件
* 案例:
    - 猜猜我是什么菜？
* 总结
    - 中间件顺序执行
    - 既不end也不next会卡住
    - 一路next而不end就是找不到页面404

#### app.use(虚拟目录,fn)
* 小练习
    - 选择性荤菜素菜
* 用户/abc/def的请求
    - 选择性调用app.use('/abc',fn)的中间件
    - 但是内部req.url则去除了/abc这个暗号
* app.use(fn)是任何请求都会触发执行的

#### node和express的关系
* 在学校学习文字(node) ->  用来写简历
* 长大了以后,学会上网下载简历模板(express框架) ->  产出简历
* 框架能帮助我们更高效的实现业务

#### 中间件类别(了解)
* 应用级中间件 `app(application).use(事fn)`
* 路由级中间件 
    - 1:获取路径级中间件
    - 2:配置路由
    - 3:加入到应用程序控制中`app.use(router);`
* 内置中间件
    - 处理一些静态资源文件的返回(设置将某个目录下的资源文件向外暴露)  
       + 当url匹配上我设置的目录下的子文件后，自动返回该文件
       + 加入到应用程序控制中`app.use(内置中间件);`
* 第三方中间件
    - 更方便的处理cookie/session,简易的解析post请求体数据
    - 在npm上下载并使用
    - 加入到应用程序控制中`app.use(第三方中间件);`
* 错误处理中间件
    - 在express中统一处理错误

#### 路由中间件
* 一个请求进来(总网线),分发到各自不同的处理(分多根网线给其他人)
    - __分流__
* 后端路由
    - (请求方式 + URL = 判断依据)(分流的判断依据) -> 做不同的处理(分流后的行为)
* 使用步骤
    - 1:获取路由中间件对象 `let router = express.Router();`
    - 2:配置路由规则 `router.请求方式(URL,fn事)`
        + fn中参数有req,res,next
    - 3:将router加入到应用`app.use(router)`


#### 有了app.use为什么还需要router
* app.use 应用级功能做在处理路由
* 路由级中间件可以处理路由,功能的细分
    - 当路由中间件细分出来以后。代码就好维护


#### res扩展函数
```javascript
res.download()  下载文件
res.json()   响应json对象
res.jsonp()  配合jsonp
res.redirect()    重定向
res.send()     发送字符串数据自动加content-type
res.sendFile()  显示一个文件
res.sendStatus()  响应状态码
```
* 总结
    - res.json() 响应数据,最常用
    - redirect() 重定向
    - download() 下载
    - jsonp() 跨域处理

### 模板渲染
---
#### 使用art-template模板引擎
* 下载express-art-template art-template
* app.js中配置
    - 注册一个模板引擎
        + `app.engine(后缀名,express-art-template);`
    - res.render(文件名,数据对象);
    - express这套使用，默认在当前app.js同级的views目录查找

#### 命令简写
* npm install 包名 --save
* 简写为 `npm i 包名 -S`
* npm uninstall 包名 --save
* 简写为 `npm un 包名 -S`

#### 内置中间件
* 1:保证前端请求url与服务器目录结构一致,就加上/public
* 2:服务器中区分中间件类别，以/public开头专门处理静态资源
    - `app.use('/public',staticObj);`
* 3: 当请求是/public的时候，静态资源处理中间件，只是将/public以下的部分与url匹配
    - `express.static('./public');`
    - 其以下的部分 /css/index.css
* 2:加入中间件区分以后，同时也能干掉请求url上的/public

#### url上的参数
* 见图

#### 第三方中间件(post请求体的获取)
* 原生的:`req.on('data',data=>{ data.toString();})`

```javascript
const bodyParser = require('body-parser');
解析键值对application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false })); 
//不用扩展的库来解析键值对，而使用node核心对象querystring来解析键值对
解析application/json
app.use(bodyParser.json());

```

#### 服务端处理错误和404页面找不到

### 数据库连接
---
#### 第三方包mysql
* 创建连接池
* 从连接池中获取连接，查询完毕，释放连接

#### nodemon
* 修改代码自动重启
* 安装全局命令行工具 `npm i -g nodemon`
* 进入到指定目录命令行 `nodemon ./xxx.js`
* 手动触发重启，在命令行输入 rs回车

### 练习:我的相册
---
#### 首页显示
* 见图

#### 总结
* express搭建步骤  
    - 1:引入express对象
    - 2:构建服务器对象`express()`
    - 3:监听端口开启服务器
    - 4:处理响应 
* 路由中间件 -> 负责路由
* 错误处理中间件 -> 负责错误
* 第三方 -> 想负责什么负责什么
* 内置 -> 处理静态资源
* 应用 -> 以上中间件最终必须关联应用`app.use()`
* 中间件思想
    - 其实类似事件回调函数，只是没有事件名,
        + 按照app.use的调用顺序来顺序执行
    - 进入到app.js中看到一堆app.use可以清楚这个应用做了什么，
    - 可以根据中间件执行顺序，轻易的在某个事情后加一件事
* 模板配置
    - `app.engine('后缀名',require('express-art-template'));`
    - `app.render('index.html',{})`
        + 由于后缀名匹配，会调用这个模板引擎
        + render的时候。express默认查找views目录
* 数据库连接池
    - 避免了频繁的开关连接，造成资源的消耗
    - node 使用某个账户创建的多个连接，用则从node中拿出来，不用则释放回去
* 404和error
    - 404:路由规则先配置，先匹配
    - `router.all('*')`写在最后，返回一个404页面
    - error利用错误处理中间件
* url参数
    - 查询字符串 `href="/a?id=1&name=2"`
        + express配置`get('/a')`
        + 获取值 `req.query.id|| req.query.name`
    - path方式 `href="/a/NO.001/jack"`
        + express配置`get('/a/:id/:name')`
        + 获取值 `req.params.id|| req.params.name`
* 今天把最后的练习做一下，
    - 404_error添加进去


#### 添加相册


