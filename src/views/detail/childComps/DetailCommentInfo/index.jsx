import React, { useMemo, memo } from 'react'
import { formatDate } from '../../../../common/utils'
import { nanoid } from 'nanoid'
import './index.css'

function DetailCommentInfo(props) {
  // console.log('DetailCommentInfo');
  const { commentInfo } = props
  const {
    user,
    content,
    style,
    images,
    created
  } = commentInfo
  const avatar = user?.avatar
  const uname = user?.uname

  const date = useMemo(() => {
    return formatDate(new Date(created * 1000), 'yyyy-MM-dd')
  }, [created])


  if (Object.keys(commentInfo).length === 0) return <div />
  return (
    <div className="comment-info">
      <div className="info-header">
        <div className="header-title">用户评价</div>
        <div className="header-more">
          更多
          <i className="arrow-right"></i>
        </div>
      </div>
      <div className="info-user">
        <img src={avatar} alt="图片" />
        <span>{uname}</span>
      </div>
      <div className="info-detail">
        <p>{content}</p>
        <div className="info-other">
          <span className="date">{date}</span>
          <span>{style}</span>
        </div>
        <div className="info-imgs">
          {
            images && images.map((item) => {
              return <img src={item} key={nanoid()} alt="图片" />
            })
          }
        </div>
      </div>
    </div>
  )
}

export default memo(DetailCommentInfo, (pre, next) => {
  return Object.keys(pre.commentInfo).length === Object.keys(next.commentInfo).length
}) 
