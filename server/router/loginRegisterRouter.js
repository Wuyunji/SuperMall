const {Router} = require('express')
const userModel = require('../model/userModel')
const bodyParser = require('body-parser')
const md5 = require('md5')
let router = new Router()
router.use(bodyParser.urlencoded());
router.use(bodyParser.json());

router.post('/login', (req, res) => {
  // 1.获取输入
  let {userId, password} = req.body

  // 2.验证数据
  const userIdReg = /^[a-zA-Z0-9_]{6,20}$/
  const passwordReg = /^[a-zA-Z0-9_]{6,20}$/
  const errMsg = {}
  if(!userIdReg.test(userId)){
    errMsg.userIdErr = '用户名格式不正确'
  }
  if(!passwordReg.test(password)){
    errMsg.passwordErr = '密码格式不正确'
  }
  if(JSON.stringify(errMsg) !== '{}'){
    res.json({status:'false', errMsg})
    return
  }
  password = md5(password)
  // 3.数据库查找
  userModel.findOne({userId, password}, (err,data)=>{
    if(err){
      console.log(err);
      errMsg.networkErr = '网络不稳定，请稍后重试'
      res.json({status:'false', errMsg})
      return
    }
    if(data){
      // 1.开辟一个session会话存储空间
      // 2.将数据存入session
      // 3.获取存储空间的ID
      // 4.返回客户端一个cookie包含ID
      // res.cookie('_id', data._id.toString(), {maxAge:1000*60})数据库交互成功且查询到有效的id
      
      // 查找成功则返回该用户的数据
      if(req.session._id){
        res.json({status:'true', content:'第n次登录', data})
      }else{
        req.session._id = data._id.toString()
        // console.log(req.session);
        res.json({status:'true', content:'第一次登录', data})
      }
      return
    }
    errMsg.loginErr = '用户名或密码输入错误'
    res.json({status:'false', errMsg})
  })
})

router.post('/register', (req, res) => {
  // 1.获取输入
  let {userId, password, re_password} = req.body
  // 2.验证数据
  const userIdReg = /^[a-zA-Z0-9_]{6,20}$/
  const passwordReg = /^[a-zA-Z0-9_]{6,20}$/
  const errMsg = {}
  if(!userIdReg.test(userId)){
    errMsg.userIdErr = '用户名不合法'
  }
  if(!passwordReg.test(password)){
    errMsg.passwordErr = '密码格式不合法'
  }
  if(password !== re_password){
    errMsg.re_passwordErr = '两次密码输入不一致'
  }
  if(JSON.stringify(errMsg) !== '{}'){
    res.json({status:'false', errMsg})
    return
  }
  // 3.数据库写入
  userModel.findOne({userId}, function(err, data){
    if(err){
      console.log('无法连接至服务器，请稍后重试');
      return
    }
    if(data){
      console.log(`用户名为${userId}的用户注册失败，因为用户名重复`);
      errMsg.userIdErr = `账号 ${userId} 已被注册`
      res.json({status:'false', errMsg})
      return
    }
    password = md5(password)
    userModel.create({
      userId,
      password
    }, function(err){
      if(err){
        console.log(err);
        errMsg.networkErr = '您当前的网络状态不稳定，请稍后重试'
        res.json({status:'false', errMsg})
      }else{
        console.log(`用户名为${userId}的用户注册成功`);
        res.json({status:'true', content:`账号 ${userId} 注册成功`})
      }
    })  
  })
})

module.exports = function(){
  return router
}
