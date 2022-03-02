import React, { useState, useEffect, useRef } from 'react'
import { NavLink, useLocation, useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import PubSub from 'pubsub-js'
import { addToCart } from '../../redux/actions/addToCart_action'
import './index.css'
import {
  getDetailData,
  Goods,
  Shop,
  GoodsParam,
  getRecommend
} from '../../network/detail'
import DetailNavBar from './childComps/DetailNavBar'
import DetailSwiper from './childComps/DetailSwiper'
import DetailBaseInfo from './childComps/DetailBaseInfo'
import DetailShopInfo from './childComps/DetailShopInfo'
import DetailGoodsInfo from './childComps/DetailGoodsInfo'
import DetailGoodsParam from './childComps/DetailGoodsParam'
import DetailCommentInfo from './childComps/DetailCommentInfo'
import DetailBottomBar from './childComps/DetailBottomBar'
import GoodsList from '../../components/content/GoodsList'
import BackToTop from '../../components/common/BackToTop'
import Toast from '../../components/common/Toast'
import Refresh from '../../components/common/Refresh'

function Detail() {
  // console.log('Detail');
  const { iid } = useParams()
  const location = useLocation()
  const pathname = location.pathname

  const title = ['商品', '参数', '评论', '推荐']
  const [id, setId] = useState()
  const [banners, setBanners] = useState([])
  const [goods, setGoods] = useState({})
  const [shop, setShop] = useState({})
  const [detailInfo, setDetailInfo] = useState({})
  const [goodsParam, setGoodsParam] = useState({})
  const [commentInfo, setCommentInfo] = useState({})
  const [recommend, setRecommend] = useState([])

  const commentRef = useRef()
  const paramRef = useRef()
  const goodsRef = useRef()
  const dispatch = useDispatch()

  useEffect(() => {
    document.getElementsByTagName('html')[0].scrollTop = 0
    // console.log('detail-useEffect');
    // 1.保存iid
    setId(iid)

    // 2.请求详细数据
    getDetailData(iid).then(res => {
      // 1.获取数据
      const data = res.data.result
      // console.log(data);

      // 2.获取顶部信息和轮播图数据
      setBanners(data.itemInfo.topImages)

      // 3.获取商品信息
      setGoods(new Goods(data.itemInfo, data.columns, data.shopInfo.services))

      // 4.创建店铺信息
      setShop(new Shop(data.shopInfo))

      // 5.获取商品详细信息
      setDetailInfo(data.detailInfo)

      // 6.获取商品信息
      setGoodsParam(new GoodsParam(data.itemParams.info, data.itemParams.rule))

      // 7.获取评论信息
      if (data.rate.cRate) {
        setCommentInfo(data.rate.list[0])
      }
    })

    // 3.请求推荐信息数据
    getRecommend().then(res => {
      setRecommend(res.data.data.list)
    })

    return () => {

      window.onscroll = null
    }
  }, [])// eslint-disable-line

  useEffect(() => {
    PubSub.publishSync('comment-offsetTop', commentRef.current.offsetTop)
    PubSub.publishSync('param-offsetTop', paramRef.current.offsetTop)
    PubSub.publishSync('list-offsetTop', goodsRef.current.offsetTop)
  })

  function imageLoad() {
    // console.log('adadsadsads');
  }

  function addCart() {
    const product = {}
    product.id = id
    product.image = banners[0]
    product.title = goods.title
    product.desc = goods.desc
    product.price = goods.newPrice
    product.realPrice = goods.realPrice
    Toast.info('已加入购物车')
    //添加进购物车
    dispatch(addToCart(product))
  }

  window.onscroll = function () {
    // 下拉到底 加载更多
    let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    let clientHeight = document.documentElement.clientHeight || document.body.clientHeight;
    let scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;

    if (scrollTop + clientHeight >= scrollHeight - 1) {
      // 加载更多
      console.log('加载更多');
    }
  }

  return (
    <div id="detail">
      <NavLink className="link" to={pathname} replace='true'>
        <div className='detail-navbar'><DetailNavBar title={title} /></div>
        <div className='detail-swiper'><DetailSwiper banners={banners} /></div>
        <div className='detail-baseinfo'><DetailBaseInfo goods={goods} /></div>
        <div className='detail-shopinfo'><DetailShopInfo shop={shop} /></div>
        <div className='detail-goodsinfo'><DetailGoodsInfo detailInfo={detailInfo} imageLoad={imageLoad} /></div>
        <div className='detail-goodsparam' ref={paramRef}><DetailGoodsParam goodsParam={goodsParam} /></div>
        <div className='detail-comentinfo' ref={commentRef} ><DetailCommentInfo commentInfo={commentInfo} /></div>
        <div className='detail-goodslist' ref={goodsRef}><GoodsList goods={recommend} /></div>
        <div className='detail-bottombar'><DetailBottomBar addCart={addCart} id={id} /></div>
        <div className='detail-backtotop'><BackToTop position={{ right: '10px', bottom: '60px' }} /></div>
        <div className='detail-refresh'><Refresh position={{ top: '2px', right: '2px' }} /></div>
      </NavLink>
    </div>
  )
}

export default Detail
