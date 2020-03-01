// 1. imports
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

// 2. action definitions

const ADD_CART = "products/ADD_CART"
const DEL_CART = "products/DEL_CART"

// 3. initial state
const initialState = {
  cart: []
}
// 4. reducer
export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_CART:
      return { ...state, cart: [...state.cart, action.payload] }
    case DEL_CART:
      return {
        cart: state.cart.filter(item => item.id !== action.payload)
      }

    default:
      return state
  }
}
// 5. action creators

function addCart(product) {
  return {
    type: ADD_CART,
    payload: product
  }
}

function delCart(productId) {
  return {
    type: DEL_CART,
    payload: productId
  }
}

// 6. custom hooks

export function useCart() {
  const dispatch = useDispatch()
  const cart = useSelector(appState => appState.cartState.cart)
  const add = product => dispatch(addCart(product))
  const del = item => dispatch(delCart(item))

  useEffect(() => {}, [dispatch])
  return { add, cart, del }
}
