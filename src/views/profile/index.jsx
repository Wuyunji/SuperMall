import React, { useState, useEffect } from 'react'
import Toast from '../../components/common/Toast'
import ProfileNav from './childComps/ProfileNav'
import ProfileInfo from './childComps/ProfileInfo'
import ProfileOrder from './childComps/ProfileOrder'
import ProfileTools from './childComps/ProfileTools'
import { getData } from '../../network/profile'
import './index.css'

function Profile(props) {
  // console.log('Profile');
  const [data, setData] = useState({})
  const replace = props.history?.replace

  useEffect(() => {
    getData().then((res)=>{
      console.log('profile-->', res);
      if(res.data.status==='false'){        //登录失败
        const errMsg = res.data.errMsg
        if(errMsg.loginErr){
          Toast.info(errMsg.loginErr)
        }else{
          Toast.info('未知的出错')
        }
        replace('/login')
      }else{                                //登录成功
        setData(res.data)
      }
    },(err)=>{
      console.log(err);
      Toast.info('网络不稳定,请稍后重试')
      replace('/login')  //上线使用
    })
  },[replace])
  
  return (
    <div id='profile'>
      <ProfileNav/>
      <ProfileInfo data={data}/>
      <ProfileOrder/>
      <ProfileTools/>
    </div>
  )
}

export default Profile
