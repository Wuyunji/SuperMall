import React from 'react'
import CartListItem from '../CartListItem'
import { nanoid } from 'nanoid'
import './index.css'

function CartList(props) {
  const { cartList, handleItemClick } = props
  return (
    <div className="cart-list">
      {
        cartList&&cartList.map((item)=>{
          return <CartListItem cartList={item} handleItemClick={handleItemClick} key={nanoid()} />        
        })
      }
    </div>
  )
}

export default CartList
