import React from "react";
import "./Products.css";
import redBricks02 from "../../../public/assets/red-bricks02.jpg";
import redBricks03 from "../../../public/assets/red-bricks03.jpg";
import redBricks11 from "../../../public/assets/red-bricks11.jpg";
import redBricks16 from "../../../public/assets/red-bricks16.jpeg";


const Products = () => {

  const products = [
    {
      title: "Handmade Red Bricks",
      description: "Traditional bricks made by hand, ideal for heritage-style construction.",
      image: redBricks02,
    },
    {
      title: "Wire Cut Red Bricks",
      description: "Precision-cut red bricks with smooth edges and uniform shape.",
      image: redBricks03,
    },
    {
      title: "Burnt Clay Bricks",
      description: "High-strength red bricks fired at high temperatures for superior durability.",
      image: redBricks11,
    },
    {
      title: "Exposed Red Bricks",
      description: "Stylish red bricks designed to be left exposed for architectural aesthetics.",
      image: redBricks16,
    },
  ];
  
  return (
    <div className="products-container" >
      <h1 className="products-title">Our Products</h1>
      <div className="products-grid">
        {products.map((product, index) => (
          <div className="product-card" key={index}>
            <img
              src={product.image} 
              alt={product.title}
              className="product-image"
            />
            <h2>{product.title}</h2>
            <p>{product.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
