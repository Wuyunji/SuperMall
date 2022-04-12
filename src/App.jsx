import React, {
  useState,
  useEffect,
  memo,
  Fragment
} from 'react'
import {
  Route,
  Redirect,
  withRouter
} from 'react-router-dom'
import CacheRoute, { CacheSwitch } from 'react-router-cache-route'

//引入路由
import Home from './views/home'
import Category from './views/category'
import Cart from './views/cart'
import Profile from './views/profile'
import Detail from './views/detail'
import Login from './views/login'
import Register from './views/register'

import MainTabBar from './components/content/MainTabBar'
import './App.css'

function App(props) {
  // console.log('App');
  const pathname = props.location.pathname
  const [isShowTab, setIsShowTab] = useState(true)
  useEffect(() => {
    const pathArr = ['/home', '/category', '/cart', '/profile', '/login', '/register']
    if (pathArr.includes(pathname)) {
      setIsShowTab(true)
    } else {
      setIsShowTab(false)
    }
  }, [pathname])
  return (
    <Fragment>
      <CacheSwitch>
        <CacheRoute path="/home" component={Home}></CacheRoute>
        <CacheRoute path="/category" component={Category}></CacheRoute>
        <Route path="/cart" component={Cart}></Route>
        <Route path="/profile" component={Profile}></Route>
        <CacheRoute path="/detail/:iid" component={Detail}></CacheRoute>
        <Route path="/login" component={Login}></Route>
        <Route path="/register" component={Register}></Route>
        <Redirect to="/home"></Redirect>
      </CacheSwitch>
      <div style={{ display: (isShowTab ? 'block' : 'none') }}><MainTabBar /></div>
    </Fragment>
  )
}

export default memo(withRouter(App), (pre, next) => {
  return pre.location.pathname === next.location.pathname
})
