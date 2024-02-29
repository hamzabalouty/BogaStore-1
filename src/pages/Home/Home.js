import React, { useEffect } from "react";
import Carousel from "../../components/Carousel/Carousel";
import Products from "../../components/Products/Products";
import Fragrances from "../../components/Products/Fragrances";
import Laptops from "../../components/Products/Laptops";
import Skincare from "../../components/Products/Skincare";
import Tops from "../../components/Products/Tops";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Carousel />
      <Products />
      <Fragrances />
      <Laptops />
      <Skincare />
      <Tops />
    </>
  );
};

export default Home;
