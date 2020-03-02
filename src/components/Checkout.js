import React from "react"
import { Link } from "react-router-dom"
import { useCart } from "../hooks"
// import "../styles/products.css"
import { TiShoppingCart } from "react-icons/ti"

export default props => {
  const { cart } = useCart()

  const total = cart.reduce((a, b) => {
    return a + b.price
  }, 0)

  return (
    <div className="checkoutWrapper">
      <div className="">
        <div className="checkOutHeader">
          <h1>Thank you for your order!</h1>
        </div>
        {cart.map(item => (
          <div className="checkOutItems" key={"item" + item.id}>
            <div className="">
              <p className="checkOutItemTitle">{item.title}</p>
              <p className="checkOutItemStyle">{item.style}</p>
              <p className="checkOutItemQuantity">Quantity:</p>
            </div>
            <div className="checkOutPrice">
              <p className="">${item.price.toFixed(2)}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="">
        <div className="checkOutFooter">
          <p>SUBTOTAL</p>
          <div>
            <p className="checkOutFooterPrice">${total.toFixed(2)}</p>
          </div>
        </div>
      </div>
      {/* <Link to="/">
        <button>Continue Shopping</button>
      </Link> */}
    </div>
  )
}
