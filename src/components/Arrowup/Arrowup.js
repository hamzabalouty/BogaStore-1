import React, { useState, useEffect } from "react";
import "./Arrowup.css";
import { FaArrowUp } from "react-icons/fa6";

const handleScrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

const Arrowup = () => {
  const [showIcon, setShowIcon] = useState(false);
  const [top, setTop] = useState(0);

  useEffect(() => {
    const onScroll = (e) => {
      setTop(e.target.documentElement.scrollTop);
    };
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (top > 300) {
      setShowIcon(true);
    } else {
      setShowIcon(false);
    }
  }, [top]);

  return (
    <>
      {showIcon && (
        <div onClick={handleScrollToTop} className="arrowup">
          <FaArrowUp className="arrowup-icon" />
        </div>
      )}
    </>
  );
};

export default Arrowup;
