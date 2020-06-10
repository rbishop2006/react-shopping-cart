import React from "react"
import { Route, Redirect } from "react-router-dom"
import "../styles/App.css"
import Products from "./Products.js"
import Checkout from "./Checkout.js"
import Receipt from "./receipt.js"

export default (props) => {
  return (
    <div>
      <Route
        exact
        path="/"
        render={() => <Redirect to="/react-shopping-cart" />}
      ></Route>
      <Route path="/react-shopping-cart" component={Products}></Route>
      <Route path="/checkout" component={Checkout}></Route>
      <Route path="/receipt" component={Receipt}></Route>
    </div>
  )
}

// adding comments for build
