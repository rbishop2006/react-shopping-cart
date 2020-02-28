import React from "react"
import { useProducts } from "../hooks"
import "../styles/products.css"

export default props => {
  const { products, count } = useProducts()

  return (
    <div className="wrapper">
      <div className="orderSelect">
        <p>{count} Product(s) found.</p>
        <div>
          <label for="orderBy">Order by </label>

          <select id="orderBy">
            <option value="select">Select</option>
            <option value="LowestToHighest">Lowest To highest</option>
            <option value="HighestToLowest">Highest To lowest</option>
          </select>
        </div>
      </div>
      <div className="grid">
        {products.map(product => (
          <div className="centerGridItems" key={"product" + product.id}>
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
        <p className="cartIcon">Cart</p>
        <h1 className="cartInfo">Hello cart</h1>
      </div>
    </div>
  )
}
