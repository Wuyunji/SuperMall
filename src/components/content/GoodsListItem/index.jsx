import React from 'react'
import { useNavigate } from 'react-router-dom';
import './index.css'

function GoodsListItem(props) {
  const { imgLoad } = props
  const { title, price, cfav, iid } = props.item
  const img = props.item.image || props.item.show.img
  const navigate = useNavigate()

  function handleClick() {
    navigate(`/detail/${iid}`, { replace: true })
  }
  return (
    <div className="goods-item" onClick={handleClick}>
      <img src={img} alt="图片" onLoad={imgLoad} />
      <div className="goods-info">
        <p>{title}</p>
        <span className="price">{price}</span>
        <span className="collect">{cfav}</span>
      </div>
    </div>
  )
}

export default GoodsListItem
