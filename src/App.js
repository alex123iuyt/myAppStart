import styled from "styled-components";

import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import GlobalStyle from "./styles/global";

import Navbar from "./components/header/Navbar";

import Hero from "./components/hero/hero";

import BackgroundEffect from "./components/background-effect/BackgroundEffect";

import Partners from "./components/partners/partners";

import About from "./pages/about/about";

import Category from "./components/category/category";

// import VideoBlock from "./components/VideoBlock/VideoBlock";

// import Slider from "./components/slider/slider";

import { Home } from "./pages/Main/home";

import Implants from "./pages/catalog/implants";

import Footer from "./pages/footer/footer";

const AppContainer = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  overflow: auto;
`;

const Background = styled.div`
  position: absolute;
  top: 0;
  height: 100vh;
  width: 100%;
`;

const App = () => {
  return (
    <AppContainer>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/category" element={<Category />} />
          <Route path="/implants" element={<Implants />} />
          <Route path="/about" element={<About />} />
          <Route
            path="*"
            element={
              <>
                <Hero />
                <Partners />
                <Category />
              </>
            }
          />
        </Routes>
      </Router>
      <Footer />
      <GlobalStyle />
    </AppContainer>
  );
};

export default App;
