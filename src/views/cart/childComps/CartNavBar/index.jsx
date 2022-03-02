import React from 'react'
import NavBar from '../../../../components/common/NavBar'
import './index.css'

function CartNavBar(props) {
  // console.log('CartNavBar');
  const { length } = props

  return (
    <div className="cart-nav-bar">
      <NavBar Center={<div>购物车({ length })</div>}></NavBar>
    </div>
  )
}

export default CartNavBar
