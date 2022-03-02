import React, {useMemo} from 'react'
import avatar from '../../../../assets/img/profile/avatar.svg'
import arrowRight from '../../../../assets/img/common/arrow-right.webp'
import './index.css'

export default function ProfileInfo(props) {
  const {data} = props

  const getAvatar = useMemo(() => {
    return data.avatar?data.avatar:avatar
  }, [data])

  const getVip = useMemo(() => {
    return data.vip?'vip会员':'非vip会员'
  }, [data])

  const getUserId = useMemo(() => {
    return data.userId?data.userId:'未知的ID'
  }, [data])

  const getSignature = useMemo(() => {
    return data.signature?data.signature:'个性签名'
  }, [data])

  return (
    <div className='profile-info'>
      <div className='profile-avatar'>
        <img src={getAvatar} alt="头像" />
      </div>
      <div className='profile-details'>
        <div className='profile-details-warpper'>
          <div className="profile-vip">{getVip}</div>
        </div>
        <div className='profile-details-warpper'>
          <div className="profile-userid">{getUserId}</div>
        </div>
        <div className='profile-details-warpper'>
          <div className="profile-signature">{getSignature}</div>
        </div>
      </div>
      <div className="profile-arrow"><img src={arrowRight} alt="展开" /></div>
    </div>
  )
}
