import { Navigate } from 'react-router-dom'
import Home from '../views/home'
import Category from '../views/category'
import Cart from '../views/cart'
import Profile from '../views/profile'
import Detail from '../views/detail'
import Login from '../views/login'
import Register from '../views/register'

const routes = [
  {
    path: '/home',
    element: <Home />,
  },
  {
    path: '/category',
    element: <Category />
  },
  {
    path: '/cart',
    element: <Cart />
  },
  {
    path: '/profile',
    element: <Profile />
  },
  {
    path: '/detail/:iid',
    element: <Detail />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/register',
    element: <Register />
  },
  {
    path: '*',
    element: <Navigate to='/home' />
  }
]

export default routes
