import { ADD_TO_COLLECT } from "../constant";

const initState = new Set()
export default function addToCollectReducer(preState = initState, action) {
  const { type, data } = action
  switch (type) {
    case ADD_TO_COLLECT:
      return handleAddToCollect(preState, data)
    default:
      return preState
  }
}

function handleAddToCollect(preState, id) {
  if (!preState.has(id)) {
    preState.add(id)
  } else {
    preState.delete(id)
  }
  return new Set([...preState])
}
