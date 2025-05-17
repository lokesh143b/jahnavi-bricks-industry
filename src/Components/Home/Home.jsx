import React from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";

const Home = () => {

  const navigate = useNavigate()

  return (
    <div className="home">
      <div className="overlay" />
      <div className="home-content">
        <h1 className="brand-title">JAHNAVI RED BRICKS</h1>
        <p className="slogan">Building Strong Foundations Since 1999</p>

        <div className="info-cards">
          <div className="info-card">
            <h3>25+ Years of Excellence</h3>
            <p>Trusted by builders and architects across the region for unmatched strength and reliability.</p>
          </div>
          <div className="info-card">
            <h3>Premium Red Clay Bricks</h3>
            <p>Eco-friendly, perfectly molded bricks that stand the test of time and nature.</p>
          </div>
          <div className="info-card">
            <h3>Bulk Supply Indiawide</h3>
            <p>Efficient logistics and timely delivery for residential, commercial, and industrial projects.</p>
          </div>
        </div>

        {/* Our gallery */}
        <button onClick={() => navigate("/gallery")}>OUR GALLERY</button>

      </div>
    </div>
  );
};

export default Home;
