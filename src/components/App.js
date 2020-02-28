import React from "react"
import { Route } from "react-router-dom"
import "../styles/App.css"
import Products from "./Products.js"
import Cart from "./Cart.js"

export default props => {
  return (
    <div>
      <Route path="/" component={Products}></Route>
      <Route path="/cart" component={Cart}></Route>
    </div>
  )
}
