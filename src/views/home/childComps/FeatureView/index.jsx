import React, { memo } from 'react'
import './index.css'
import recommend_bg from '../../../../assets/img/home/recommend_bg.jpg'

function FeatureView() {
  // console.log('FeatureView');
  return (
    <div className="feature">
      {/* <a href="https://act.mogujie.com/zzls67"> */}
        <img src={recommend_bg} alt="图片"/>
      {/* </a> */}
    </div>
  )
}

export default memo(FeatureView, (pre, next) => {
  return JSON.stringify(pre) === JSON.stringify(next)
})
