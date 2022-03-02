import React, { useState, useEffect, Fragment} from 'react'
import { useRoutes, useLocation } from 'react-router-dom'
import './App.css'
import routes from './routes'
import MainTabBar from './components/content/MainTabBar'

export default function App() {
  const [isShowTab, setIsShowTab] = useState(true)
  const element = useRoutes(routes)
  const pathname = useLocation().pathname
  useEffect(() => {
    const pathArr = ['/home', '/category','/cart','/profile','/login','/register']
    if(pathArr.includes(pathname)){
      setIsShowTab(true)
    } else {
      setIsShowTab(false)
    }
  },[pathname])
  return (
    <Fragment>
      {element}
      <div style={{ display: (isShowTab ? 'block' : 'none') }}><MainTabBar /></div>
    </Fragment>
  )
}
