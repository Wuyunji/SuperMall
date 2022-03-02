import React from 'react'
import vollet from '../../../../assets/img/profile/vollet.webp'
import delivery from '../../../../assets/img/profile/delivery.webp'
import receive from '../../../../assets/img/profile/receive.webp'
import comment from '../../../../assets/img/profile/comment.webp'
import './index.css'

export default function ProfileOrder() {
  return (
    <div className='profile-order'>
      <div className="profile-order-header">
        <div className="my-order">我的订单</div>
        <div className="view-all">查看全部</div>
      </div>
      <div className="profile-order-details">
        <div className='profile-order-item'>
          <img src={vollet} alt="待付款" />
          <div>待付款</div>
        </div>
        <div className='profile-order-item'>
          <img src={delivery} alt="待发货" />
          <div>待发货</div>
        </div>
        <div className='profile-order-item'>
          <img src={receive} alt="待收获" />
          <div>待收获</div>
        </div>
        <div className='profile-order-item'>
          <img src={comment} alt="待评论" />
          <div>待评论</div>
        </div>
      </div>
    </div>
  )
}

