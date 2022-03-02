import React from 'react'
import './index.css'

function TabBar(props) {
  const { children } = props

  return (
    <div id="tab-bar">
      {children && children.map(item => item)}
    </div>
  )
}

export default TabBar
