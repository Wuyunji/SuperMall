import { ADD_TO_CART } from "../constant";

const initState = []
export default function addToCartReducer(preState=initState, action){
  const {type, data} = action
  switch(type){
    case ADD_TO_CART :
      return handleAddToCart(preState,data)
    default:
      return preState
  }
}

function handleAddToCart(preState, data){
  data.isCheck = false
  let product = preState.find(item => item.id === data.id)
  if(product){
    product.count += 1
    return preState
  }else{
    data.count = 1
    return [...preState, data]
  }
}
