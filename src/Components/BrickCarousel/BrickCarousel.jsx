import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./BrickCarousel.css";

import brick1 from "../../../public/assets/red-bricks01.jpg";
import brick2 from "../../../public/assets/red-bricks02.jpg";
import brick3 from "../../../public/assets/red-bricks03.jpg";
import brick4 from "../../../public/assets/red-bricks04.jpg";
import brick5 from "../../../public/assets/red-bricks05.jpg";
import brick6 from "../../../public/assets/red-bricks06.jpg";
import brick7 from "../../../public/assets/red-bricks07.jpg";
import brick8 from "../../../public/assets/red-bricks08.jpg";
import brick9 from "../../../public/assets/red-bricks09.jpg";
import brick10 from "../../../public/assets/red-bricks10.jpg";
import brick11 from "../../../public/assets/red-bricks11.jpg";
import brick12 from "../../../public/assets/red-bricks12.jpg";
import brick13 from "../../../public/assets/red-bricks13.jpg";
import brick14 from "../../../public/assets/red-bricks14.jpg";
import brick15 from "../../../public/assets/red-bricks15.jpg";
import brick16 from "../../../public/assets/red-bricks16.jpg";

const BrickCarousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const bricks1 = [
    brick1,
    brick2,
    brick3,
    brick4,
    brick5,
    brick6,
    brick7,
    brick8,
    brick9,
    brick10,
    brick11,
    brick12,
    brick13,
    brick14,
    brick15,
    brick16,
  ];

  const bricks2 = [
    brick13,
    brick14,
    brick15,
    brick16,
    brick9,
    brick10,
    brick11,
    brick12,
    brick1,
    brick2,
    brick3,
    brick4,
    brick5,
    brick6,
    brick7,
    brick8,
  ];

  const bricks3 = [
    brick5,
    brick6,
    brick7,
    brick8,
    brick9,
    brick10,
    brick11,
    brick12,
    brick13,
    brick14,
    brick15,
    brick16,
    brick1,
    brick2,
    brick3,
    brick4,
  ];
  return (
    <div className="carousel-main-container">
      <div className="carousel-container">
        <h1>Our Brick Gallery</h1>
        <Slider {...settings}>
          {bricks1.map((img, i) => (
            <div key={i}>
              <img src={img} alt={`Brick industry ${i + 1}`} />
            </div>
          ))}
        </Slider>
      </div>

      <div className="carousel-container">
        <Slider {...settings}>
          {bricks2.map((img, i) => (
            <div key={i}>
              <img src={img} alt={`Brick industry ${i + 1}`} />
            </div>
          ))}
        </Slider>
      </div>

      <div className="carousel-container">
        <Slider {...settings}>
          {bricks3.map((img, i) => (
            <div key={i}>
              <img src={img} alt={`Brick industry ${i + 1}`} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default BrickCarousel;
