import "./Carousel.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Carousel() {
  const settings = {
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="carousel">
      <div className="carousel-container">
        <Slider {...settings}>
          <div className="carousel-img">
            <img
              src="https://bogastore.vercel.app/assets/slider_img_2-ad43ef2a.jpg"
              alt="a prototype image for the slider"
            />
          </div>
          <div className="carousel-img">
            <img
              src="https://bogastore.vercel.app/assets/slider_img_1-aa711fe6.jpg"
              alt="a prototype image for the slider"
            />
          </div>
        </Slider>
      </div>
    </div>
  );
}
export default Carousel;
