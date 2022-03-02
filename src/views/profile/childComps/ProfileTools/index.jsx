import React from 'react'
import { useSelector } from 'react-redux'
import arrowRight from '../../../../assets/img/common/arrow-right.webp'
import coupons from '../../../../assets/img/profile/coupons.webp'
import collection from '../../../../assets/img/profile/collection.webp'
import address from '../../../../assets/img/profile/address.webp'
import service from '../../../../assets/img/profile/service.webp'
import './index.css'

function ProfileTools() {
  // console.log(count);
  const count = useSelector(state=>state.addToCollect.size)
  return (
    <div className='profile-tools'>
      <div className="profile-tools-header">
        <div className="my-tools">我的工具</div>
      </div>
      <div className='tools'>
        <div className='tools-item'>
          <span className='icon'><img src={coupons} alt="优惠券" /></span>
          <span className='text'>优惠券</span>
          <span className='arrow'><img src={arrowRight} alt="展开" /></span>
        </div>
        <div className='tools-item'>
          <span className='icon'><img src={collection} alt="我的收藏" /></span>
          <span className='text'>我的收藏<i className='count'> { count } </i></span>
          <span className='arrow'><img src={arrowRight} alt="展开" /></span>
        </div>
        <div className='tools-item'>
          <span className='icon'><img src={address} alt="地址管理" /></span>
          <span className='text'>地址管理</span>
          <span className='arrow'><img src={arrowRight} alt="展开" /></span>
        </div>
        <div className='tools-item'>
          <span className='icon'><img src={service} alt="联系客服" /></span>
          <span className='text'>联系客服</span>
          <span className='arrow'><img src={arrowRight} alt="展开" /></span>
        </div>
      </div>
    </div>
  )
}

export default ProfileTools
