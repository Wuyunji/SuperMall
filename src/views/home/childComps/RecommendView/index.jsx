import React, { memo } from 'react'
import './index.css'

function RecommendView(props) {
  // console.log('RecommendView');
  const {recommends} = props
  return (
    <div className="recommend">
      {
        recommends.map((item)=>{
          const {
            // link, 
            image, 
            title
          } = item.recommend
          return (
            <div className="recommend-item" key={item.id}>
              {/* <a href={link}> */}
                <img src={image} alt="图片" />
                <div>{title}</div>
              {/* </a> */}
            </div>
          )
        })
      }
  </div>
  )
}

export default memo(RecommendView, (pre, next) => {
  return pre.recommends === next.recommends
})
