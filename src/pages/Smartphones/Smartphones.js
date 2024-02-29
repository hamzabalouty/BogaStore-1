import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Smartphones = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products/category/smartphones")
      .then((res) => {
        setProducts(res.data.products);
      });
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="products">
      <div className="products-title">
        <h3>SMARTPHONES</h3>
      </div>
      <div className="products-container">
        {products.map((product) => (
          <Link to={`/products/${product.id}`} className="products-box">
            <img src={product.images[0]} alt="product-img" />
            <div className="products-box-overlay">
              <p>{product.category}</p>
            </div>
            <p className="products-brand-name">
              Brand: <b>{product.brand}</b>
            </p>
            <div className="products-content">
              <h4>{product.title}</h4>
              <ul className="products-box-price">
                <li>
                  <del>
                    ${" "}
                    {(
                      product.price -
                      product.price * (product.discountPercentage / 100)
                    ).toFixed(2)}
                  </del>
                </li>
                <li className="products-actprice">
                  <p>${product.price}</p>
                </li>
                <li>
                  <p className="discount-per">
                    ({product.discountPercentage}%Off)
                  </p>
                </li>
              </ul>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Smartphones;
