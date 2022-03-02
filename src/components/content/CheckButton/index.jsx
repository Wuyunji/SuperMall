import React from 'react'
import pic from '../../../assets/img/cart/tick.svg'
import './index.css'

export default function CheckButton(props) {
  const {isCheck} = props
  return (
    <div className={"check-button" + (isCheck?' check':'')}>
      <img src={pic} alt="图片"/>
    </div>
  )
}
