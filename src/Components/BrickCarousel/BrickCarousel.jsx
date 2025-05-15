import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./BrickCarousel.css";

import brick1 from "../../../public/assets/red-bricks01.jpg";
import brick2 from "../../../public/assets/red-bricks03.jpg";
import brick3 from "../../../public/assets/red-bricks03.jpg";
import brick4 from "../../../public/assets/red-bricks03.jpg";
import brick5 from "../../../public/assets/red-bricks03.jpg";
import brick6 from "../../../public/assets/red-bricks03.jpg";


const BrickCarousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 600,
        slidesToShow: 3, // Show 3 images on desktop
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        arrows: true,
        responsive: [
          {
            breakpoint: 1024, // tablets
            settings: {
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 768, // phones
            settings: {
              slidesToShow: 1,
            },
          },
        ],
      };
      

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        <div>
          <img src={brick1} alt="Brick industry 1" />
        </div>
        <div>
          <img src={brick2} alt="Brick industry 2" />
        </div>
        <div>
          <img src={brick3} alt="Brick industry 3" />
        </div>
        <div>
          <img src={brick4} alt="Brick industry 4" />
        </div>
        <div>
          <img src={brick5} alt="Brick industry 5" />
        </div>
        <div>
          <img src={brick6} alt="Brick industry 6" />
        </div>
      </Slider>
    </div>
  );
};

export default BrickCarousel;
