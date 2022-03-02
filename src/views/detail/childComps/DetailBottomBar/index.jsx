import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addToCollect } from '../../../../redux/actions/addToCollect_action';
import Toast from '../../../../components/common/Toast';
import './index.css'

function DetailBottomBar(props) {
  // console.log('DetailBottomBar');
  const { id, addCart } = props
  const [isCollect, setIsCollect] = useState(false)
  const [collectClassName, setCollectClassName] = useState('icon select')
  const collect = useSelector(state => state.addToCollect)
  const dispatch = useDispatch()
  const navigate = useNavigate() // eslint-disable-line

  useEffect(() => {
    if (collect.has(id)) {
      setIsCollect(true)
      setCollectClassName('icon select active')
    } else {
      setIsCollect(false)
      setCollectClassName('icon select')
    }
  }, [collect, id])

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
    // if (document.cookie) {     //测试
    collect.has(id) ? Toast.info('已取消收藏') : Toast.info('已收藏')
    dispatch(addToCollect(id))
    // } else {
    //   navigate('/login',{replace:true})  //上线
    // }
  }

  function addClick() {
    /**
     * 如果还没登录则必须要先登录后才能加入购物车
     */
    if (document.cookie) {
      addCart()
    } else {
      addCart()   //测试
      // navigate('/login',{replace:true})  //上线
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
          <i className={collectClassName}></i>
          <span className="text" onClick={collectClick}>{isCollect ? '已收藏' : '收藏'}</span>
        </div>
      </div>
      <div className="bar-item bar-right">
        <div className="cart" onClick={addClick}>加入购物车</div>
        <div className="buy" onClick={buyClick}>购买</div>
      </div>
    </div>
  )
}

export default DetailBottomBar
