import React, { useRef } from 'react'
import PropTypes from 'prop-types'
import AwesomeSwiper from 'react-awesome-swiper'
import { nanoid } from 'nanoid'
import './index.css'

function Swiper(props) {
  const { banners, swiperImageLoad } = props
  const state = {
    message: 'Gallery',
    text: '测试数据',
    defaultActiveKey: ['1'],
    config: {
      loop: true,
      observer: true, //调完接口不能翻页解决方法，修改swiper自己或子元素时，自动初始化swiper
      observeParents: true, //调完接口不能翻页解决方法，修改swiper的父元素时，自动初始化swiper
      autoplay: {
        delay: 3000,
        stopOnLastSlide: false,
        disableOnInteraction: false, //点击后是否停止自动播放
      },
      // Disable preloading of all images
      preloadImages: false,
      // Enable lazy loading
      lazy: true,
      speed: 500,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        bulletElement: 'li',
        hideOnClick: true,
        clickable: true,
      },
      on: {
        slideChange: function () {
          // console.log(this.activeIndex)
        },
      },
    },
  }

  const swiper = useRef()

  return (
    <div className="swiperAll">
      <AwesomeSwiper ref={swiper} config={state.config} >
        <div className="swiper-wrapper">
          {
            banners && banners.map((item) => {
              return (
                <div className="swiper-slide" key={nanoid()}>
                  <img src={item} alt="图片" onLoad={swiperImageLoad} />
                </div>
              )
            })
          }
        </div>
        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>
        <div className="swiper-pagination"></div>
      </AwesomeSwiper>
    </div>
  )
}
Swiper.propTypes = {
  banners: PropTypes.array.isRequired,
  swiperImageLoad: PropTypes.func
}
Swiper.defaultProps = {
  swiperImageLoad: null
}

export default Swiper
