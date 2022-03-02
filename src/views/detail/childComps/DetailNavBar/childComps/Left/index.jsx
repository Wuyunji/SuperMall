import React from 'react'
import backImg from '../../../../../../assets/img/common/back.svg'
import './index.css'

function Left() {
  // console.log('Left');
  function backClick() {
    window.history.back()
  }
  return (
    <div className="back" onClick={backClick}>
      <img src={backImg} alt="图片" />
    </div>
  )
}

export default Left
