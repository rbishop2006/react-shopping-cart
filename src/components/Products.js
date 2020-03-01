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

      <div className="cart">
        {cart.map(item => (
          <div className="cartItems" key={"item" + item.id}>
            <div>
              <img
                className="thumbs"
                key={"item" + item.id}
                src={item.imgs.thumb}
                alt="mens shirts"
              />
            </div>
            <div className="itemInfo">
              <p className="itemTitle">{item.title}</p>
              <p className="itemStyle">{item.style}</p>
              <p className="quantityCount">Quantity:</p>
            </div>
            <div className="itemTotals">
              <button
                type="button"
                className="delButton"
                onClick={e => del(item.id)}
              >
                x
              </button>
              <p className="itemPrice">${item.price.toFixed(2)}</p>
              <div className="quantitiesButtons">
                <button className="lessQuantity" type="button">
                  -
                </button>
                <button className="moreQuantity" type="button">
                  +
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
