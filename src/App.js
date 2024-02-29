import React, { useState, useEffect } from "react";
import "./styles.css";
import axios from "axios";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Arrowup from "./components/Arrowup/Arrowup";
import Laptops from "./components/Products/Laptops";
import Fragrances from "./components/Products/Fragrances";
import Skincare from "./components/Products/Skincare";
import Home from "./pages/Home/Home";
import Smartphones from "./pages/Smartphones/Smartphones";
import Groceries from "./pages/Groceries/Groceries";
import Furniture from "./pages/Furniture/Furniture";
import Product from "./pages/Product/Product";
import Cart from "./pages/Cart/Cart";
import Tops from "./components/Products/Tops";

export default function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("https://dummyjson.com/products/").then((res) => {
      setProducts(res.data.products);
    });
  }, []);

  const filterbySearch = (word) => {
    if (word !== "") {
      const newArr = products.filter((item) => item.title === word);
      setProducts(newArr);
    }
  };

  return (
    <BrowserRouter>
      <Header filterbySearch={filterbySearch} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/laptops" element={<Laptops />} />
        <Route path="/fragrances" element={<Fragrances />} />
        <Route path="/skincare" element={<Skincare />} />
        <Route path="/tops" element={<Tops />} />
        <Route path="/smartphones" element={<Smartphones />} />
        <Route path="/groceries" element={<Groceries />} />
        <Route path="/furniture" element={<Furniture />} />
        <Route path="/tops" element={<Tops />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/products/:id" element={<Product />} />
      </Routes>
      <Arrowup />
      <Footer />
    </BrowserRouter>
  );
}
