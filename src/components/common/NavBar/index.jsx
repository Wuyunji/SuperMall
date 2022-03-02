import React from 'react'
import './index.css'

function NavBar(props) {
  // console.log('NavBar');
  const { Left, Center, Right } = props
  return (
    <div className="nav-bar">
      {<div className="left">{Left}</div>}
      {<div className="center">{Center}</div>}
      {<div className="right">{Right}</div>}
    </div>
  )
}

export default NavBar
