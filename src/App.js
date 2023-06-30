import styled from "styled-components";

import React from "react";

import { BrowserRouter } from "react-router-dom";

import GlobalStyle from "./styles/global";

import Navbar from "./components/header/Navbar";

import Hero from "./components/hero/hero";

import BackgroundEffect from "./components/background-effect/BackgroundEffect";

import Partners from "./components/partners/partners";

import About from "./components/about/about";

import Category from "./components/category/category";

import VideoBlock from "./components/VideoBlock/VideoBlock";

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
      <BrowserRouter>
        <Background>
          <BackgroundEffect />
        </Background>
        <Navbar />
        <Hero />
        <Partners />
        <About />
        <Category />
        <VideoBlock />
      </BrowserRouter>
      <GlobalStyle />
    </AppContainer>
  );
};

export default App;
