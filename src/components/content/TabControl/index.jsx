import React, {
  forwardRef,
  useState,
  useImperativeHandle
} from 'react'
import './index.css'

function TabControl(props, ref) {
  const { titles, handleTabClick, style } = props
  const [currentIndex, setCurrentIndex] = useState(0)

  function handleClick(index) {
    if (currentIndex !== index) {
      if (document.getElementsByTagName('html')[0].scrollTop > 615) {
        document.getElementsByTagName('html')[0].scrollTop = 615
      }
      // 设置当前的下标为index
      setCurrentIndex(index)
      // 给Home组件返回一个当前选中的index
      handleTabClick(index)
      // setOffsetTop(???)
    }
  }

  useImperativeHandle(ref, () => ({
    setCurrentIndex,
  }));
  return (
    <div className="tab-control" style={style}>
      {
        titles.map((item, index) => {
          return (
            <div className={"tab-control-item" + (index === currentIndex ? ' active' : '')}
              key={item.id}
              onClick={() => { handleClick(index) }}>
              <span>{item.title}</span>
            </div>
          )
        })
      }
    </div>
  )
}

export default forwardRef(TabControl)
