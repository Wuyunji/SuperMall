import React, {
  useEffect,
  useState,
  memo
} from 'react'
import { nanoid } from 'nanoid'
import PubSub from 'pubsub-js'
import './index.css'

function Center(props) {
  // console.log('Center');
  const { title } = props
  const [currentIndex, setCurrentIndex] = useState(0)
  const [Y, setY] = useState([0, Infinity, Infinity, Infinity, Infinity])

  window.onscroll = function () {
    let offsetTop = document.getElementsByTagName('html')[0].scrollTop
    // console.log(offsetTop);
    let len = title.length
    for (let i = 0; i < len; i++) {
      if (offsetTop >= Y[i] && offsetTop < Y[i + 1] - 1) {
        setCurrentIndex(i)
        break
      }
    }
  }

  useEffect(() => {
    PubSub.subscribe('param-offsetTop', (_, data) => {
      // console.log('data1', data);
      setY(Y => [0, data, Y[2], Y[3], Infinity])
    })
    PubSub.subscribe('comment-offsetTop', (_, data) => {
      // console.log('data2', data);
      setY(Y => [0, Y[1], data, Y[3], Infinity])
    })
    PubSub.subscribe('list-offsetTop', (_, data) => {
      // console.log('data3', data);
      setY(Y => [0, Y[1], Y[2], data, Infinity])
    })

    return () => {
      window.onscroll = null
      PubSub.unsubscribe('param-offsetTop')
      PubSub.unsubscribe('comment-offsetTop')
      PubSub.unsubscribe('list-offsetTop')
    }
  }, [])

  function handleClick(index) {
    return () => {
      // console.log(Y);
      if (currentIndex !== index) {
        setCurrentIndex(index)
        if (Y[index] === Infinity) {
          document.getElementsByTagName('html')[0].scrollTop = Y[index - 1]
        } else {
          document.getElementsByTagName('html')[0].scrollTop = Y[index]
        }
      }
    }
  }

  return (
    <div className={"title"}>
      {
        title.map((item, index) => {
          return (
            <div key={nanoid()}
              className={"detail-item" + (index === currentIndex ? ' active' : '')}
              onClick={handleClick(index)}>
              {item}
            </div>
          )
        })
      }
    </div>
  )
}

export default memo(Center, (pre, next) => {
  return pre.title.length === next.title.length
})
