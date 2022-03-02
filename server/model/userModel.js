let mongoose = require('mongoose')

// 1.引入模型对象
let Schema = mongoose.Schema
    
// 2.创建约束对象
let usersRule = new Schema({
  userId: {
    type: String,
    required: true
  },
  password:{
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now()
  },
  enable_flag: {
    type: String,
    default: 'Y'
  }
})

// 3.创建模型
let usersModel = mongoose.model('users', usersRule)

module.exports = usersModel
