import React from "react";
import "./Products.css";

const Products = () => {
  // const products = [
  //   {
  //     title: "Standard Red Bricks",
  //     description: "High durability and strength, ideal for all construction needs.",
  //     image: "/src/assets/red-bricks02jpg.webp",
  //   },
  //   {
  //     title: "Wire Cut Bricks",
  //     description: "Smooth surface finish, perfect for exposed brick walls.",
  //     image: "",
  //   },
  //   {
  //     title: "Perforated Bricks",
  //     description: "Lightweight, great for partition walls and better insulation.",
  //     image: "",
  //   },
  // ];

  const products = [
    {
      title: "Handmade Red Bricks",
      description:
        "Traditional bricks made by hand, ideal for heritage-style construction.",
      image: "/src/assets/red-bricks02.jpg",
    },
    {
      title: "Wire Cut Red Bricks",
      description:
        "Precision-cut red bricks with smooth edges and uniform shape.",
      image:
        "/src/assets/red-bricks03.jpg",
    },
    {
      title: "Burnt Clay Bricks",
      description:
        "High-strength red bricks fired at high temperatures for superior durability.",
      image:
        "/src/assets/red-bricks11.jpg",
    },
    {
      title: "Exposed Red Bricks",
      description:
        "Stylish red bricks designed to be left exposed for architectural aesthetics.",
      image:
        "/src/assets/red-bricks16.jpeg",
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
