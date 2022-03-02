import React from 'react'
import './index.css'

export default function ToastBox(props) {
  const {content} = props
  return (
    <div className="toast-box">
      <div className="toast-content">{ content }</div>
    </div>
  )
}
