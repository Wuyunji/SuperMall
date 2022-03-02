import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Toast from '../../components/common/Toast'
import ProfileNav from './childComps/ProfileNav'
import ProfileInfo from './childComps/ProfileInfo'
import ProfileOrder from './childComps/ProfileOrder'
import ProfileTools from './childComps/ProfileTools'
import { getData } from '../../network/profile'
import './index.css'

function Profile() {
  // console.log('Profile');
  const [data, setData] = useState({})
  const navigate = useNavigate()

  useEffect(() => {
    getData().then((res)=>{
      console.log(res);
      if(res.data.status==='false'){        //登录失败
        const errMsg = res.data.errMsg
        if(errMsg.loginErr){
          Toast.info(errMsg.loginErr)
        }else{
          Toast.info('未知的出错')
        }
        navigate('/login',{replace:true})
      }else{                                //登录成功
        setData(res.data)
      }
    },(err)=>{
      console.log(err);
      Toast.info('网络不稳定,请稍后重试')
      // navigate('/login',{replace:true})  //上线使用
    })
  })
  
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
