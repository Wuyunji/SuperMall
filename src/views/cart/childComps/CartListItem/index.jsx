import React, { useState }from 'react'
import CheckButton from '../../../../components/content/CheckButton'
import './index.css'

export default function CartListItem(props) {
  const {cartList, handleItemClick} = props
  const title = cartList?.title
  const desc = cartList?.desc
  const realPrice = cartList?.realPrice
  const count = cartList?.count
  const image = cartList?.image
  const id = cartList?.id
  const [isChecked, setIsChecked] = useState(cartList.isCheck)
  
  function handleClick(){
    handleItemClick(id)
    setIsChecked(!isChecked)
  }
  
  return (
    <div id="shop-item">
      <div className="item-selector" onClick={handleClick}>
        <CheckButton isCheck={isChecked} />
      </div>
      <div className="item-img">
        <img src={image} alt="商品图片"/>
      </div>
      <div className="item-info">
        <div className="item-title">{ title }</div>
        <div className="item-desc">{ desc }</div>
        <div className="info-bottom">
          <div className="item-price left">￥{ realPrice }</div>
          <div className="item-price right">x{ count }</div>
        </div>
      </div>
    </div>
  )
}
