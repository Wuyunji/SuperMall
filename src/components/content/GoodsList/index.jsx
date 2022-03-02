import React from 'react'
import './index.css'
import GoodsListItem from '../GoodsListItem'
import { nanoid } from 'nanoid';

function GoodsList(props) {
  // console.log('GoodsList');
  const { goods } = props

  function imgLoad() {
    // let count = 0
    // let len = goods.length
  }
  
  return (
    <div className="goods">
      {
        goods && goods.map((item) => {
          return <GoodsListItem key={nanoid()} item={item} imgLoad={imgLoad} />
        })
      }
    </div>
  )
}

export default GoodsList
