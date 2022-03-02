import React, { memo } from 'react'
import { nanoid } from 'nanoid'
import './index.css'

function DetailBaseInfo(props) {
  // console.log('DetailBaseInfo');
  const {goods} = props
  const {goods:{
    title, 
    newPrice, 
    oldPrice, 
    discount, 
    services, 
    columns
  }} = props

  if(Object.keys(goods).length===0) return <div/>

  return (
    <div className="base-info">
      <div className="info-title">{ title }</div>
      <div className="info-price">
        <span className="n-price">{ newPrice }</span>
        <span className="o-price">{ oldPrice }</span>
        <span className="discount">{ discount }</span>
      </div>
      <div className="info-other">
        <span>{ columns[0] }</span>
        <span>{ columns[1] }</span>
        <span>{ services[services.length-1].name }</span>
      </div>
      <div className="info-service">
        {
          services.map((item, index)=>{
            return (
              <span className="info-service-item" key={nanoid()}>
                {services[index].icon&&<img src={services[index].icon} alt="图片"/>}
                <span>{services[index].name }</span>
              </span>
            )
          })
        }       
      </div>
    </div>
  )
}

export default memo(DetailBaseInfo, (pre, next) => {
  return Object.keys(pre.goods).length === Object.keys(next.goods).length
})
