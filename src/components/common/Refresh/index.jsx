import React, { memo } from 'react'
import PropTypes from 'prop-types'
import './index.css'

function Refresh(props) {
  // console.log('Refresh');
  const position = props.position

  function clickBtn() {
    window.location.reload()
  }

  return (
    <div className='refresh' style={position} onClick={clickBtn}>
      <div className="refresh-btn">刷新</div>
    </div>
  )
}
Refresh.propTypes = {
  position: PropTypes.object
}
Refresh.defaultProps = {
  positon: { top: '0', right: '0', color: '#fff' }
}

export default memo(Refresh, (pre, next) => {
  return pre.position.top === next.position.top &&
    pre.position.right === next.position.right &&
    pre.position.color === next.position.color
})
