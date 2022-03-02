// 引入express库
const express = require('express')
// 使用express
const app = express()
// 禁止服务器返回x-powered-by 
app.disable('x-powered-by')
// 配置模板引擎
// app.set('view engine', 'ejs')
// app.set('views', './views')
// 引入db模块，用于连接数据库
let db = require('./db/db')
// 使用内置中间件用于解析post的urlencoded参数
app.use(express.urlencoded({extended:true}))
// 引入UI路由器
const UIRouter = require('./router/UIRouer')
// 引入登录注册路由器
const loginRegisterRouter = require('./router/loginRegisterRouter')
// 设置端口号
let port = 8000
// 引入express-session模块
const session = require('express-session')
// 引入connect-mongo 用于session持久化
const MongoStore = require('connect-mongo')
// 设置允许跨域
app.all('*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', 'http://192.168.1.199:3000');
  res.header('Access-Control-Allow-Headers', 'Content-Type, X-Requested-With');
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Credentials', 'true');//允许携带cookie
  res.header('Content-Type', 'application/json;charset=utf-8');
  next();
});
// 配置session
app.use(session({
  name: '_id', //返回给客户端我的cookie的key
  secret: 'wyj',  //参与加密的字符串
  saveUninitialized: false,  //是否在存储内容之前创建session会话 默认true
  resave: true, //是否在请求时强制重新保存session
  store: MongoStore.create({
    mongoUrl:'mongodb://localhost:27017/session_container',
    touchAfter: 24 * 3600
  }),
  cookie: {
    httpOnly: false,//设置js脚本是否能读取cookie
    maxAge: 1000 * 60 * 10 //10分钟
  }
}))

db((err) => {
  if(err){
    console.log(err);
    return
  }
  app.use(UIRouter())
  app.use(loginRegisterRouter())

  app.listen(port, (err)=>{
    if(err){
      console.log(err);
    }else{
      console.log(port+'端口正在监听...');
    }
  })
})
