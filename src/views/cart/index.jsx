import React, { useState, useMemo } from 'react'
import { useSelector } from 'react-redux'
import CartNavBar from './childComps/CartNavBar'
import CartBottomBar from './childComps/CartBottomBar'
import CartList from './childComps/CartList'
import Scroll from '../../components/common/Scroll'
import './index.css'

function Cart() {
  // console.log('Cart');
  const cartList = useSelector(state=>state.addToCart)

  const [isRender, setIsRender] = useState(false)//用于控制更新一次组件
  const [toggleState, setToggleState] = useState(false)//传给子组件用于更新全选按钮

  // 获取cartList长度
  const getLength = useMemo(() => {
    return cartList.length
  }, [cartList])

  // 获取选中的商品的总价格
  const getTotalPrice = useMemo(() => {
    return cartList.filter(item => {
      return item.isCheck
    }).reduce((perValue, item) => {
      return perValue + item.realPrice * item.count
    }, 0).toFixed(2)
  }, [isRender])// eslint-disable-line

  // 获取选中的商品的种类数
  const getCheckLength = useMemo(() => {
    return cartList.filter(item => {
      return item.isCheck
    }).length
  }, [isRender])// eslint-disable-line

  // 传给子组件
  function handleToggle(isSelectAll) {
    if (isSelectAll) {
      cartList.forEach(item => item.isCheck = true)
      setToggleState(true)
    } else {
      cartList.forEach(item => item.isCheck = false)
      setToggleState(false)
    }

    // 更新组件
    setIsRender(!isRender)
  }

  // 传给子组件
  function handleItemClick(id) {
    let flagT = 0, flagF = 0
    cartList.forEach(item => {
      if (item.id === id) {
        item.isCheck = !item.isCheck
      }
      item.isCheck ? flagT++ : flagF++
    })
    if (flagT === cartList.length) {
      setToggleState(true)
    } else if (flagF === cartList.length) {
      setToggleState(false)
    } else {
      setToggleState(false)
    }

    // 更新组件
    setIsRender(!isRender)
  }

  return (
    <div id="cart">
      <CartNavBar length={getLength} />
      <Scroll className="content">
        <></>
        <CartList cartList={cartList} handleItemClick={handleItemClick} />
      </Scroll>
      <CartBottomBar totalPrice={getTotalPrice}
        checkLength={getCheckLength}
        length={getLength}
        handleToggle={handleToggle}
        toggleState={toggleState}
      />
    </div>
  )
}

export default Cart
