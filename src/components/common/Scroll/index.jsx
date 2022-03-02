import React, { useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import BScroll from 'better-scroll'
import './index.css'

function Scroll(props) {
  const {
    children,
    className,
  } = props
  const scrollRef = useRef()

  useEffect(() => {
    new BScroll(scrollRef.current, {
      observeDOM: true,
      click: true,
      probeType: 3,
      pullUpLoad: true,
      disableTouch: false
    })
  }, [])
  
  return (
    <div className={"wrapper " + (className === 'content' ? 'content' : '')} ref={scrollRef}>
      <div>
        {children && children.map(item => item)}
      </div>
    </div>
  )
}
Scroll.propTypes = {
  children: PropTypes.array,
  className: PropTypes.string.isRequired
}
Scroll.defaultProps = {
  children: []
}

export default Scroll
