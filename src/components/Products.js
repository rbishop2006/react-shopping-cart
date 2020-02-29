import React from "react"
import { useProducts, useCart } from "../hooks"
import "../styles/products.css"
import { TiShoppingCart } from "react-icons/ti"

export default props => {
  const { products, count } = useProducts()
  const { cart, add, del } = useCart()

  return (
    <div className="wrapper">
      <div className="orderSelect">
        <p>{count} Product(s) found.</p>
        <div>
          <label htmlFor="orderBy">Order by </label>

          <select id="orderBy">
            <option value="select">Select</option>
            <option value="LowestToHighest">Lowest To highest</option>
            <option value="HighestToLowest">Highest To lowest</option>
          </select>
        </div>
      </div>
      <div className="grid">
        {products.map(product => (
          <div
            className="centerGridItems"
            onClick={e => add(product)}
            key={"product" + product.id}
          >
            <p className={product.isFreeShipping ? "free" : "costs"}>
              Free Shipping
            </p>
            <img
              className="productImgs"
              key={"product" + product.id}
              src={product.imgs.normal}
              alt="mens shirts"
            />
            <p>{product.title}</p>
            <div className="smallBorder"></div>
            <p className="pricing">${product.price.toFixed(2)}</p>
            <p className="installments">
              or {product.installments} x{product.currencyFormat}
              {(product.price / product.installments).toFixed(2)}
            </p>
            <button className="addToCart">Add to Cart</button>
          </div>
        ))}
      </div>

      <div className="cartItems">
        {cart.map(item => (
          <div onClick={e => del(cart.id)} className="" key={"item" + item.id}>
            <img
              className=""
              key={"product" + item.id}
              src={item.imgs.thumb}
              alt="mens shirts"
            />
            <p>{item.title}</p>

            <p className="">${item.price.toFixed(2)}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
