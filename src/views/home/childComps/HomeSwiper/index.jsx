import React, { memo } from 'react'
import Swiper from '../../../../components/common/Swiper'

function HomeSwiper(props) {
  // console.log('HomeSwiper');
  const {banners, swiperImageLoad} = props
  return (
    <Swiper banners={banners}  swiperImageLoad={swiperImageLoad}></Swiper>
  )
}

export default memo(HomeSwiper, (pre, next) => {
  return pre.banners === next.banners
})
