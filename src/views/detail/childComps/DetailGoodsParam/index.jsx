import React, { memo }from 'react'
import { nanoid } from 'nanoid'
import './index.css'

function DetailGoodsParam(props) {
  // console.log('DetailGoodsParam');
  const {
    goodsParam,
    goodsParam:{
    sizes,
    infos,
    image
  }} = props

  if(Object.keys(goodsParam).length === 0)  return <div/>
  return (
    <div className="goods-param">
      <table className="info-size">
        <tbody>
          {
            sizes[0].map((tr)=>{
              return (
                <tr key={nanoid()}>
                  {
                    tr.map((td)=>{
                      return <td key={nanoid()}>{ td }</td>
                    })
                  }
                </tr>
              )
            })
          }
        </tbody>   
      </table>
      <table className="info-param">
        <tbody>
          {
            infos.map((item)=>{
              return (
                <tr key={nanoid()}>
                  <td className="info-param-key">{ item.key }</td>
                  <td  className="param-value">{ item.value }</td>                
                </tr>
              )
            })
          }
        </tbody>
      </table>
      <div className="info-img">
        {image && <img src={image} alt="图片"/>}
      </div> 
    </div>
  )
}

export default memo(DetailGoodsParam, (pre, next) => {
  return Object.keys(pre.goodsParam).length === Object.keys(next.goodsParam).length
})
