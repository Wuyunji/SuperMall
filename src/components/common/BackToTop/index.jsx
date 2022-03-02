import React, { memo } from 'react'
import PropTypes from 'prop-types'
import './index.css'

function BackToTop(props) {
  // console.log('BackToTop');
  const position = props.position
  function backToTop() {
    document.getElementsByTagName('html')[0].scrollTop = position
  }
  return (
    <div className='backtotop' onClick={backToTop} style={position}>
      <div className='triangle'></div>
      <div className='rectangle'></div>
    </div>
  )
}
BackToTop.propTypes = {
  position: PropTypes.object
}
BackToTop.defaultProps = {
  positon: { right: '0', bottom: '0' }
}
export default memo(BackToTop, (pre, next) => {
  return pre.position.right === next.position.right &&
    pre.position.bottom === next.position.bottom
})
