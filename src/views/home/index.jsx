import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
} from 'react'
// 引入各种组件
import NavBar from '../../components/common/NavBar'
import HomeSwiper from './childComps/HomeSwiper'
import FeatureView from './childComps/FeatureView'
import RecommendView from './childComps/RecommendView'
import TabControl from '../../components/content/TabControl'
import GoodsList from '../../components/content/GoodsList'
import BackToTop from '../../components/common/BackToTop'
import Refresh from '../../components/common/Refresh'
// 引入随机id生成器
import { nanoid } from 'nanoid'
// 引入请求数据的函数
import { getHomeMultidata, getHomeGoods } from '../../network/home.js'

import './index.css'

function Home() {
  // console.log('Home');
  const [banners, setBanners] = useState([])// Home页面轮播图
  const [recommends, setRecommends] = useState([])// Home页面推荐图片
  // const [dKeywords, setdKeywords] = useState([])
  // const [keywords, setKeywords] = useState([])
  // 当前选择的TabControl 初始值为pop 即页面一进来就显示 流行 的相关的商品
  const [currentType, setCurrentType] = useState('pop')// 初始化
  const [goodsList, setGoodsList] = useState([])// 给GoodsList组件传递的数据
  // goods存储请求到的数据
  const [goods, setGoods] = useState({
    'pop': { page: 0, list: [] },
    'new': { page: 0, list: [] },
    'sell': { page: 0, list: [] }
  })
  // 标题
  const titles = [
    { id: nanoid(), title: '流行' },
    { id: nanoid(), title: '新款' },
    { id: nanoid(), title: '精选' }
  ]

  const tabControlRef1 = useRef()
  const tabControlRef2 = useRef()
  
  // 页面挂载前请求网络数据 只请求一次
  useEffect(() => {
    document.getElementsByTagName('html')[0].scrollTop = 0
    getMultidata()
    getGoods('pop')
    getGoods('new')
    getGoods('sell')

    return () => {
      window.onscroll = null
    }
  }, [])// eslint-disable-line

  useCallback(() => setGoodsList(goods[currentType].list[0]), [])// eslint-disable-line

  window.onscroll = function () {
    // 切换两个tabControl的显示
    let offsetTop = document.getElementsByTagName('html')[0].scrollTop
    // console.log(offsetTop);
    let div1 = document.getElementsByClassName('home-tab-control')[0]
    let div2 = document.getElementsByClassName('home-tab-control')[1]
    if(div1 && div2){
      if (offsetTop < 610) {
        div1.style.visibility = 'hidden'
        div2.style.visibility = ''
      } else {
        div1.style.visibility = ''
        div2.style.visibility = 'hidden'
      }
    }

    // 下拉到底 加载更多
    let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    let clientHeight = document.documentElement.clientHeight || document.body.clientHeight;
    let scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
    if (scrollTop + clientHeight >= scrollHeight - 1) {
      getGoods(currentType)
      let newList = goods[currentType].list.reduce((arr, list) => {
        return [...arr, ...list]
      }, [])
      setGoodsList(newList)
    }
  }

  /**
   * 此函数传给子组件 
   * 通过子组件调用此函数时传入的参数来改变currentType的值
   */
  function handleTabClick(index) {
    // console.log(index);
    let type = ['pop', 'new', 'sell']
    //设置当前的类型
    setCurrentType(type[index]);

    // 同步将两个tabControl样式设置成一样的
    tabControlRef1.current.setCurrentIndex(index)
    tabControlRef2.current.setCurrentIndex(index)

    // 更新goodsList展示部分
    let newList = goods[type[index]].list.reduce((arr, list) => {
      return [...arr, ...list]
    }, [])
    setGoodsList(newList)
  }

  /**
   * 网络数据请求方法
   */
  function getMultidata() {
    getHomeMultidata().then(res => {
      const { 
        banner, 
        // dKeywords, 
        // keywords, 
        recommend 
      } = res.data.data
      setBanners(banner.list.map((banner) => {
        return banner.image
      }))
      setRecommends(recommend.list.map((recommend) => {
        return { id: nanoid(), recommend }
      }))
      // setdKeywords(dKeywords)
      // setKeywords(keywords)
    })
  }

  /**
   * 网络数据请求方法
   */
  function getGoods(type) {
    const page = goods[type].page + 1
    getHomeGoods(type, page).then(res => {
      // console.log(page);
      // console.log(res);

      const newGoodsArr = Object.keys(goods).map((item) => {
        if (item !== type) return goods[item]
        else {
          if (res.data.data) {
            goods[item].page += 1
            goods[item].list.push(res.data.data.list)
          }
          return {
            page: goods[item].page,
            list: goods[item].list
          }
        }
      })

      const newGoods = {
        'pop': newGoodsArr[0],
        'new': newGoodsArr[1],
        'sell': newGoodsArr[2],
      }

      setGoods(newGoods)
      // console.log(newGoods);
    })
  }

  return (
    <div id="home">
      <div className='home-tab-control' style={{ position: 'fixed', top: '44px', visibility: 'hidden' }}>
        <TabControl titles={titles} handleTabClick={handleTabClick} ref={tabControlRef1} />
      </div>
      <div className="home-nav"><NavBar Center={"购物中心"}></NavBar></div>
      <div className='home-swiper'><HomeSwiper banners={banners} /></div>
      <div className='home-recommend-view'><RecommendView recommends={recommends} /></div>
      <div className='home-feature-view'><FeatureView /></div>
      <div className='home-tab-control'>
        <TabControl titles={titles} handleTabClick={handleTabClick} ref={tabControlRef2} />
      </div>
      <div className='home-goods-list'><GoodsList goods={goodsList} /></div>
      <div className='home-backtotop'><BackToTop position={{ right: '10px', bottom: '50px' }} /></div>
      <div className='home-refresh'><Refresh position={{ top: '2px', right: '2px', color:'#fff'}}/></div>
    </div>
  )
}

export default Home
