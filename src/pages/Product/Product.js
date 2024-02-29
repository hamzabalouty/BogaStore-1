import React, { useEffect, useState } from "react";
import "./Product.css";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../rtk/slices/cart-slice";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Product = () => {
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((product) => setProducts(product));
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="product">
      <div className="product-container" key={id}>
        <div className="product-image">
          <img src={products.thumbnail} alt="product-img" />
        </div>
        <div className="product-content">
          <h3>{products.title}</h3>
          <p>{products.description}</p>
          <ul className="product-rbc">
            <li>
              <p>
                <span>Rating: </span>
                {products.rating} ⭐
              </p>
            </li>
            <li>
              <p>
                <span>Brand: </span>
                {products.brand}
              </p>
            </li>
            <li>
              <p>
                <span>Category: </span>
                {products.category}
              </p>
            </li>
          </ul>
          <div className="product-content-price">
            <ul>
              <li>
                <del>
                  ${" "}
                  {(
                    products.price -
                    products.price * (products.discountPercentage / 100)
                  ).toFixed(2)}
                </del>
                <p>Inclusive of all taxes</p>
              </li>
              <li>
                <p className="product-price">${products.price}</p>
                <div className="product-discount">
                  <p>{products.discountPercentage} OFF</p>
                </div>
              </li>
            </ul>
          </div>
          <p className="ava-pie">
            <span>Available pieces: </span>
            {products.stock}
          </p>
          <div className="product-btns">
            <button
              onClick={() => dispatch(addToCart(products))}
              className="btn-toCart"
            >
              Add To Cart
            </button>
            <ToastContainer />
            <button className="btn-buy">buy now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
