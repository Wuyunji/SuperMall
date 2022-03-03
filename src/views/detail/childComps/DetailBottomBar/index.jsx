import React, { useEffect } from 'react'
import Toast from '../../../../components/common/Toast';
import { 
  // connect, 
  useSelector, 
  useDispatch 
} from 'react-redux';
import { addToCollect } from '../../../../redux/actions/addToCollect_action';
import './index.css'

function DetailBottomBar(props) {
  // console.log('DetailBottomBar');
  const { 
    addCart, 
    id, 
    // collect 
  } = props

  const collect = useSelector(state=>state.addToCollect)
  const dispatch = useDispatch()


  useEffect(() => {
    let div = document.getElementsByClassName('select')[0]
    let span = document.getElementsByClassName('select')[1]
    div.className = collect.has(id) ? 'icon select active' : 'icon select'
    span.innerHTML = collect.has(id) ? '已收藏' : '收藏'
  })

  function serviceClick() {
    Toast.info('暂未开通客服功能')
  }

  function shopClick() {
    Toast.info('暂无店铺详情')
  }

  function collectClick() {
    /**
     * 如果还没登录则必须要先登录后才能收藏
     */
    if (document.cookie) {     //测试
      collect.has(id) ? Toast.info('已取消收藏') : Toast.info('已收藏')
      // props.addToCollect(id)
      dispatch(addToCollect(id))
    } else {
      window.location.replace('/login')  //上线
    }
  }

  function addClick() {
    /**
     * 如果还没登录则必须要先登录后才能加入购物车
     */
    if (document.cookie) {
      addCart()
    } else {
      // addCart()   //测试
      window.location.replace('/login')  //上线
    }
  }

  function buyClick() {
    Toast.info('暂未开通购买功能')
  }

  return (
    <div className="bottom-bar">
      <div className="bar-item bar-left">
        <div>
          <i className="icon service"></i>
          <span className="text" onClick={serviceClick}>客服</span>
        </div>
        <div>
          <i className="icon shop"></i>
          <span className="text" onClick={shopClick}>店铺</span>
        </div>
        <div>
          <i className="icon select"></i>
          <span className="text select" onClick={collectClick}>收藏</span>
        </div>
      </div>
      <div className="bar-item bar-right">
        <div className="cart" onClick={addClick}>加入购物车</div>
        <div className="buy" onClick={buyClick}>购买</div>
      </div>
    </div>
  )
}

// export default connect(
//   state => ({ collect: state.addToCollect }),
//   { addToCollect }
// )(DetailBottomBar)

export default DetailBottomBar
