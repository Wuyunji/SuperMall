import { combineReducers } from 'redux'
import addToCart from './addToCart_reducer.js'
import addToCollect from './addToCollect_reducer.js'

export default combineReducers({
  addToCart,
  addToCollect
})
