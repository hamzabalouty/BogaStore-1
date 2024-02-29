import React, { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { IoIosSearch, IoMdClose } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { CiMenuBurger } from "react-icons/ci";
import Modal from "react-modal";
import { useDispatch, useSelector } from "react-redux";

const Header = ({ filterbySearch }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const onSearch = (e) => {
    filterbySearch(searchValue);
    setSearchValue("");
    e.preventDefault();
  };

  return (
    <div className="header">
      <div className="header-container">
        <div className="header-logo">
          <Link to="/" className="header-logo-link">
            <span>Boga</span>Store
          </Link>
        </div>
        <div className="header-search">
          <input
            type="text"
            placeholder="Have something in your mind ?"
            onChange={(e) => setSearchValue(e.target.value)}
            value={searchValue}
          />
          <Link to="/search" className="header-search-btn">
            <IoIosSearch onClick={onSearch} className="header-search-icon" />
          </Link>
        </div>
        <div className="header-icons">
          <Link to="/cart" className="header-cart-space">
            <IoCartOutline className="header-cart-icon" />
            <div className="header-cart-length">
              <p>{cart.length}</p>
            </div>
          </Link>
          <CiMenuBurger
            onClick={() => setModalIsOpen(true)}
            className="header-menu-icon"
          />
          <Modal
            isOpen={modalIsOpen}
            onRequestClose={() => setModalIsOpen(false)}
            className="header-modal"
          >
            <div className="header-modal-head">
              <h2>ALL CATEGORIES</h2>
              <button onClick={() => setModalIsOpen(false)}>
                <IoMdClose className="header-close-modal" />
              </button>
            </div>
            <ul className="header-modal-body">
              <li>
                <Link className="header-cat-link" to="/smartphones">
                  Smartphones
                </Link>
              </li>
              <li>
                <Link className="header-cat-link" to="/laptops">
                  Laptops
                </Link>
              </li>
              <li>
                <Link className="header-cat-link" to="/fragrances">
                  Fragrances
                </Link>
              </li>
              <li>
                <Link className="header-cat-link" to="/skincare">
                  Skincare
                </Link>
              </li>
              <li>
                <Link className="header-cat-link" to="/groceries">
                  Groceries
                </Link>
              </li>
              <li>
                <Link className="header-cat-link" to="/furniture">
                  Furniture
                </Link>
              </li>
              <li>
                <Link className="header-cat-link" to="/tops">
                  Tops
                </Link>
              </li>
            </ul>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default Header;
