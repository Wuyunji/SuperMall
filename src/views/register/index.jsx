import React from 'react'
import { useNavigate } from 'react-router-dom'
import avatar from '../../assets/img/profile/avatar.svg'
import user from '../../assets/img/profile/user.webp'
import password from '../../assets/img/profile/password.webp'
import Toast from '../../components/common/Toast'
import { register } from '../../network/register'
import { trottle } from '../../common/utils'
import './index.css'

export default function Register() {
  // console.log('Register');
  const navigate = useNavigate()
  function submitForm() {
    let userId = document.getElementsByTagName('input')[0].value
    let password = document.getElementsByTagName('input')[1].value
    let re_password = document.getElementsByTagName('input')[2].value

    register(userId, password, re_password).then((res) => {
      console.log(res);
      if (res.data.status === 'false') {
        const errMsg = res.data.errMsg
        if (errMsg.userIdErr) {
          Toast.info(errMsg.userIdErr)
        } else if (errMsg.passwordErr) {
          Toast.info(errMsg.passwordErr)
        } else if (errMsg.re_passwordErr) {
          Toast.info(errMsg.re_passwordErr)
        } else if (errMsg.networkErr) {
          Toast.info(errMsg.networkErr)
        } else if (errMsg.loginErr) {
          Toast.info(errMsg.loginErr)
        } else {
          Toast.info('未知的出错')
        }
      } else {
        Toast.info('已成功注册! 跳转中...')
        // 登录成功后4s跳转到login
        setTimeout(() => {
          routeToLogin()
        }, 3000);
      }
    }, (err) => {
      console.log(err);
      Toast.info('网络不稳定,请稍后重试')
    })
  }

  function routeToLogin() {
    navigate('/login',{replace:true})
  }

  return (
    <div id="register">
      <div className="register-tips-box">
        <div className='register-tips'>
          <p>账号和密码必须满足以下条件</p>
          <p>1. 只能6-20位</p>
          <p>2. 只能包含数字、字母、下划线</p>
        </div>
      </div>
      <div className="register-box">
        <div className='register-avatar'>
          <img src={avatar} alt="头像" />
        </div>
        <div className="register-title">
          <h2>User Register</h2>
        </div>
        <div className="register-form">
          <div className="register-userid">
            <input type="text" placeholder="User ID" autoComplete="true" />
            <span><img src={user} alt="user" /></span>
          </div>
          <div className="register-password">
            <form onSubmit={() => { this.preventDefault() }}>
              <input type="password" placeholder="Password" autoComplete="true" />
            </form>
            <span><img src={password} alt="password" /></span>
          </div>
          <div className="register-password">
            <form onSubmit={() => { this.preventDefault() }}>
              <input type="password" placeholder="rePassword" autoComplete="true" />
            </form>
            <span><img src={password} alt="password" /></span>
          </div>
          <button className="register-button" onClick={trottle(submitForm, 2000)}>Register</button>
        </div>
        <div className="register-login">
          <button onClick={routeToLogin}>Back</button>
        </div>
      </div>
    </div>
  )
}
