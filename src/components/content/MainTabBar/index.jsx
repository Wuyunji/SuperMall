import React from 'react'
//引入TabBar和TabBarItem
import TabBar from '../../common/TabBar'
import TabBarItem from '../../common/TabBarItem'
//引入图片
import home from '../../../assets/img/tabbar/home.svg'
import home_active from '../../../assets/img/tabbar/home_active.svg'
import category from '../../../assets/img/tabbar/category.svg'
import category_active from '../../../assets/img/tabbar/category_active.svg'
import shopcart from '../../../assets/img/tabbar/shopcart.svg'
import shopcart_active from '../../../assets/img/tabbar/shopcart_active.svg'
import profile from '../../../assets/img/tabbar/profile.svg'
import profile_active from '../../../assets/img/tabbar/profile_active.svg'

export default function MainTabBar() {
  return (
    <TabBar>
      <TabBarItem activeColor="#ff8198" path="/home">
        <img src={home} alt="图片"/>
        <img src={home_active} alt="图片"/>
        <div>首页</div>
      </TabBarItem>
      <TabBarItem activeColor="#ff8198" path="/category">
        <img src={category} alt="图片"/>
        <img src={category_active} alt="图片"/>
        <div>分类</div>
      </TabBarItem>
      <TabBarItem activeColor="#ff8198" path="/cart">
        <img src={shopcart} alt="图片"/>
        <img src={shopcart_active} alt="图片"/>
        <div>购物车</div>
      </TabBarItem>
      <TabBarItem activeColor="#ff8198" path="/profile" path_route={['/register', '/login']}>
        <img src={profile} alt="图片"/>
        <img src={profile_active} alt="图片"/>
        <div>我的</div>
      </TabBarItem>
    </TabBar>
  )
}
