import React from "react"
import { Link } from "react-router-dom"
import { useCart } from "../hooks"
// import "../styles/products.css"
// import { TiShoppingCart } from "react-icons/ti"

export default props => {
  const { cart } = useCart()

  const total = cart.reduce((a, b) => {
    return a + b.price
  }, 0)

  return (
    <div>
      <div className="">
        {cart.map(item => (
          <div className="" key={"item" + item.id}>
            <div className="">
              <p className="">{item.title}</p>
              <p className="">{item.style}</p>
              <p className="">Quantity:</p>
            </div>
            <div className="">
              <p className="">${item.price.toFixed(2)}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="">
        <div className="">
          <p>SUBTOTAL</p>
          <div>
            <p className="">${total.toFixed(2)}</p>
          </div>
        </div>
      </div>
      {/* <Link to="/">
        <button>Continue Shopping</button>
      </Link> */}
    </div>
  )
}
