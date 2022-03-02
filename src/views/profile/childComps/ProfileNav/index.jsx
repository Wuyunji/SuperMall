import React from 'react'
import NavBar from '../../../../components/common/NavBar'
import setting from '../../../../assets/img/profile/setting.webp'
import './index.css'

function Center(){
  // console.log('Center');
  return (
    <div>个人中心</div>
  )
}
function Right(){
  // console.log('Right');

  return (
    <div className='profile-right'>
      <img src={setting} alt="设置" />
    </div>
  )
}
export default function ProfileNav() {
  // console.log('ProfileNav');
  return (
    <div className='profile-nav'>
      <NavBar Center={<Center/>} Right={<Right/>}></NavBar>
    </div>
  )
}
