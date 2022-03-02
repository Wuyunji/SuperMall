import React, { memo } from 'react'
import { nanoid } from 'nanoid'
import './index.css'

function DetailGoodsInfo(props) {
  // console.log('DetailGoodsInfo');
  const {
    imageLoad,
    detailInfo,
    detailInfo:{
      desc,
      detailImage
    },
  } = props

  let length = 0
  let count = 0
  length = detailImage&&detailImage[0].list.length
  function handleOnLoad(){
    if(++count === length) {
      imageLoad()
    }
  }

  if(Object.keys(detailInfo).length === 0) return <div/>
  return (
    <div className="detail-goods-info">
      <div className="info-desc clear-fix">
        <div className="start"></div>
        <div className="desc">{ desc }</div>
        <div className="end"></div>
      </div>
      <div className="info-key">{ detailImage[0].key }</div>
      <div className="info-list">
        {
          detailImage[0].list.map((item)=>{
            return <img src={item} alt="图片" key={nanoid()} onLoad={handleOnLoad}/>
          })
        }
      </div>
    </div>
  )
}

export default memo(DetailGoodsInfo, (pre, next) => {
  return Object.keys(pre.detailInfo).length === Object.keys(next.detailInfo).length
})
