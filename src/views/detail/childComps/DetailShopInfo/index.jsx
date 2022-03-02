import React, { useState, useMemo, memo }from 'react'
import { nanoid } from 'nanoid'
import './index.css'

function DetailShopInfo(props) {
  // console.log('DetailShopInfo');
  const {shop:{
    logo,
    name,
    goodsCount,
    score,
    sells
  }} = props
  const [sell, setSell] = useState('')

  useMemo(() => {
    setSell(sells > 10000 ? (sells/10000).toFixed(1) + "万" : sells) 
  }, [sells])

  return (
    <div className="shop-info">
      <div className="shop-top">
        <img src={logo} alt="图片"/>
        <span className="title">{ name }</span>
      </div>
      <div className="shop-middle">
        <div className="shop-middle-item shop-middle-left">
          <div className="info-sells">
            <div className="sells-count">
              { sell }
            </div>
            <div className="sells-text">总销量</div>
          </div>
          <div className="info-goods">
            <div className="goods-count">
              { goodsCount }
            </div>
            <div className="goods-text">全部宝贝</div>
          </div>
        </div>
        <div className="shop-middle-item shop-middle-right">
          <table>
            <tbody>
            {
              score&&score.map((item)=>{
                const {name, score, isBetter} = item
                return(
                  <tr key={nanoid()}>
                    <td>{ name }</td>
                    <td className={'score' + (isBetter?' score-better':'')}>{ score }</td>
                    <td className={"better" +(isBetter?' score-more':'')}>
                      <span>{isBetter ? '高' : '低' }</span>
                    </td>
                  </tr>
                )
              })
            }  
            </tbody>        
          </table>
        </div>
      </div>
      <div className="shop-bottom">
        <div className="enter-shop">进店逛逛</div>
      </div>
    </div>
  )
}

export default memo(DetailShopInfo, (pre, next) => {
  return Object.keys(pre.shop).length === Object.keys(next.shop).length
})
