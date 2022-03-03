import React, { useState, useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom'

import PropTypes from 'prop-types'
import './index.css'

function TabBarItem(props) {
  const { 
    activeColor, 
    path, 
    path_route 
  } = props
  const location = useLocation()
  const { pathname } = location
  const [Icon, Icon_active, Text] = props.children

  const [isActive, setIsActive] = useState(false)
  const [activeStyle, setActiveStyle] = useState({ color: activeColor })

  useEffect(() => {
    if (path_route) {
      setIsActive(pathname === path || pathname === path_route[0] || pathname === path_route[1])
    } else {
      setIsActive(pathname === path)
    }
  }, [pathname])// eslint-disable-line

  useEffect(() => {
    setActiveStyle(isActive ? { color: activeColor } : {})
  }, [isActive])// eslint-disable-line

  return (
    <NavLink className="link" to={path}>
      <div className="tab-bar-item">
        {isActive ? Icon_active : Icon}
        <div style={activeStyle}>{Text}</div>
      </div>
    </NavLink>
  )
}
TabBarItem.propTypes = {
  activeColor: PropTypes.string,
  path: PropTypes.string.isRequired,
  // Icon:PropTypes.element.isRequired,
  // Icon_active:PropTypes.func.isRequired,
  // Text:PropTypes.string,
}
TabBarItem.defaultProps = {
  activeColor: 'red'
}

export default TabBarItem
