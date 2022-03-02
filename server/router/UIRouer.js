const cookieParser = require('cookie-parser')
const {Router} = require('express')
const userModel = require('../model/userModel')
let router = new Router()

//使用cookie-parser中间件
router.use(cookieParser())

router.get('/profile', (req, res) => {
  const {_id} = req.session
  if(_id){
    userModel.findOne({_id}, function(err, data){
      if(!err && data){
        // 数据库交互成功且查询到有效的id
        res.json({status:'true', userId: data.userId})
      }else{
        // 交互失败或没查到id或用户篡改了cookie
        res.json({status:'false', errMsg:{loginErr:'请重新登录'}})
      }
    })
  }else{
    // 用户的cookie过期了 或 清除了浏览器缓存 或 没有登录过
    res.json({status:'false', errMsg:{loginErr:'请重新登录'}})
  }
})

module.exports = function(){
  return router
}
