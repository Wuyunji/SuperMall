import React from 'react'
import avatar from '../../assets/img/profile/avatar.svg'
import user from '../../assets/img/profile/user.webp'
import password from '../../assets/img/profile/password.webp'
import Toast from '../../components/common/Toast'
import { verify } from '../../network/login'
import { trottle } from '../../common/utils'
import './index.css'

export default function Login() {
  // console.log('Login');
  function submitForm() {
    let userId = document.getElementsByTagName('input')[0].value
    let password = document.getElementsByTagName('input')[1].value
    // 验证账号密码
    verify(userId, password).then((res) => {
      console.log(res);
      if (res.data.status === 'false') {
        const errMsg = res.data.errMsg
        if (errMsg.userIdErr) {
          Toast.info(errMsg.userIdErr)
        } else if (errMsg.passwordErr) {
          Toast.info(errMsg.passwordErr)
        } else if (errMsg.networkErr) {
          Toast.info(errMsg.networkErr)
        } else if (errMsg.loginErr) {
          Toast.info(errMsg.loginErr)
        } else {
          Toast.info('未知的出错')
        }
      } else {
        // 登录成功后跳转到profile
        Toast.info('已成功登录')
        window.location.replace('/profile')
      }
    }, (err) => {
      console.log(err);
      Toast.info('网络不稳定,请稍后重试')
    })
  }


  // 点击注册按钮跳转到注册界面
  function routeToRegister() {
    window.location.replace('/register')
  }

  return (
    <div id="login">
      <div className="login-tips-box">
        <div className='login-tips'>
          <p>账号和密码必须满足以下条件</p>
          <p>1. 只能6-20位</p>
          <p>2. 只能包含数字、字母、下划线</p>
        </div>
      </div>
      <div className="login-box">
        <div className='login-avatar'>
          <img src={avatar} alt="头像" />
        </div>
        <div className="login-title">
          <h2>User Log in</h2>
        </div>
        <div className="login-form">
          <div className="login-userid">
            <input type="text" placeholder="User ID" autoComplete="true" />
            <span><img src={user} alt="user" /></span>
          </div>
          <div className="login-password">
            <form onSubmit={() => { this.preventDefault() }}>
              <input type="password" placeholder="Password" autoComplete="true" />
              <span><img src={password} alt="password" /></span>
            </form>
          </div>
          <input type="button" className="login-button" value="LOGIN" onClick={trottle(submitForm, 2000)} />
        </div>
        <div className="login-register">
          <button onClick={routeToRegister}>Regitser</button>
        </div>
      </div>
    </div>
  )
}
