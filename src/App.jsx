import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import Header from "./Components/Header/Header";
import Products from "./Components/Products/Products";
import NotFound from "./Components/NotFound/NotFound";
import About from "./Components/About/About";
import Footer from "./Components/Footer/Footer";
import Contact from "./Components/Contact/Contact";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <div id="home">
                <Home />
              </div>
              <div id="products">
                <Products />
              </div>
              <div id="about">
                <About />
              </div>
              <div id="contact">
                <Contact />
              </div>
              <Footer />
            </>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
