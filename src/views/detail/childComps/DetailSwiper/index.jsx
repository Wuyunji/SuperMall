import React, { memo } from 'react'
import Swiper from '../../../../components/common/Swiper'
import './index.css'

function DetailSwiper(props) {
  // console.log('DetailSwiper');
  const {banners} = props
  return (
      <Swiper banners={banners}></Swiper>
  )
}

export default memo(DetailSwiper, (pre, next) => {
  return pre.banners.length === next.banners.length
})
