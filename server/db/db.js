let mongoose = require('mongoose')

function connectMongo(callback){
  // 2.连接数据库
  mongoose.connect('mongodb://localhost:27017/supermall')
  // 3.绑定监听
  mongoose.connection.on('open', function(err){
    if(err){
      console.log('数据库连接失败');
      callback('connect error')
    }else{
      console.log('数据库连接成功');
      //操作数据库
      callback()
    }
  })
}

module.exports = connectMongo
