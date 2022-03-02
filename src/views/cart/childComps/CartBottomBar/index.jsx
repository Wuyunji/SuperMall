import React, { useState, useEffect } from 'react'
import CheckButton from '../../../../components/content/CheckButton'
import Toast from '../../../../components/common/Toast'
import './index.css'

function CartBottomBar(props) {
  // console.log('CartBottomBar');
  const { totalPrice, checkLength, length, handleToggle, toggleState} = props
  const [isSelectAll, setIsSelectAll] = useState(true)

  useEffect(() => {
    // console.log('toggleState=',toggleState);
      setIsSelectAll(toggleState)
  },[toggleState])

  function calcClick() {
    Toast.info('暂未开通支付功能')
  }

  /**
   * 点击全选/全不选按钮时
   * 如果当前为全  选状态 修改为全不选状态
   * 如果当前为全不选状态 修改为全  选状态
   */
  function toggleClick() {
    if(length > 0){
      handleToggle(!isSelectAll)
      setIsSelectAll(!isSelectAll)
    }
  }

  return (
    <div id="bottom-bar">
      <div className="check-content">
        <div onClick={toggleClick}>
          <CheckButton isCheck={isSelectAll} />
        </div>
        <span>全选</span>
      </div>
      <div className="total-price">
        合计: ￥{ totalPrice }
      </div>
      <div className="calculate" onClick={calcClick}>
        去结算: { checkLength }
      </div>
    </div>
  )
}

export default CartBottomBar
