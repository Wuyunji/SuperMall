import React from 'react'
import { withRouter } from 'react-router-dom'
import './index.css'

function GoodsListItem(props) {
  const { imgLoad, history } = props
  const { title, price, cfav, iid } = props.item
  const img = props.item.image || props.item.show.img
  // const navigate = useNavigate()
  function handleClick() {
   history.replace('/detail/' + iid)
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

export default withRouter(GoodsListItem)
