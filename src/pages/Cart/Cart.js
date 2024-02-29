import React, { useState, useEffect } from "react";
import "./Cart.css";
import { useDispatch, useSelector } from "react-redux";
import { deleteFromCart, clear } from "../../rtk/slices/cart-slice";
import { Link } from "react-router-dom";

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const totalPrice = cart.reduce((acc, product) => {
    acc += product.price * product.quantity;
    return acc;
  }, 0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="cart">
      <div className="cart-container">
        {cart.length > 0 ? (
          <>
            <table>
              <tr className="cart-table-header">
                <th>
                  <p>Image</p>
                </th>
                <th>
                  <p>Product</p>
                </th>
                <th>
                  <p>Unit Price</p>
                </th>
                <th>
                  <p>Quantity</p>
                </th>
                <th>
                  <p>Total Price</p>
                </th>
                <th>
                  <p>Actions</p>
                </th>
              </tr>
              {cart.map((item) => (
                <tr className="cart-table-body">
                  <td>
                    <img src={item.thumbnail} alt="pro-img" />
                  </td>
                  <td>
                    <p>{item.title}</p>
                  </td>
                  <td>
                    <p>${item.price}</p>
                  </td>
                  <td>
                    <p>{item.quantity}</p>
                  </td>
                  <td>
                    <p className="table-totalprice">
                      ${item.quantity * item.price}
                    </p>
                  </td>
                  <td className="remove-fromcart ">
                    <button onClick={() => dispatch(deleteFromCart(item))}>
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </table>
            <div className="cart-l-row">
              <button onClick={() => dispatch(clear())} className="clear-cart">
                CLEAR CART
              </button>
              <div className="subtotal-cart">
                <p>
                  Total (<span>{cart.length}</span>) Items:{" "}
                  <span>$ {totalPrice}</span>
                </p>
                <button>Check Out</button>
              </div>
            </div>
          </>
        ) : (
          <div className="empty-cart">
            <p>Your shopping cart is empty.</p>
            <Link to="/" className="return-to-home">
              <button>Go shopping Now</button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
