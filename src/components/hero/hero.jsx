import React, { Suspense } from "react";

import FilledButton from "../buttons/FilledButton";

import TransparentButton from "../buttons/TransparentButton";

import {
  Grid,
  Container,
  TextContainer,
  Title,
  Description,
  CanvasContainer,
  Image,
  ButtonContainer,
  BlurBlock,
} from "./styled-component";

import heroImage from "../../assets/images/tooth.png";

import { BrowserRouter } from "react-router-dom";

import { Canvas } from "react-three-fiber";

import Model from "./Model.jsx";

import { OrbitControls } from "@react-three/drei";

const Hero = () => {
  return (
    <>
      <Grid>
        <Container>
          <TextContainer>
            <Title>Digital Transformation Made Accessible</Title>
            <Description>
              High-performance 3D printing, within reach for laboratories and
              practices alike.
            </Description>
            <ButtonContainer>
              <FilledButton>Contact us</FilledButton>
              <TransparentButton>About us</TransparentButton>
            </ButtonContainer>
          </TextContainer>
          <CanvasContainer>
            <Canvas>
              <Suspense>
                <color attach="background" args={["#ececece"]} />
                <Model />
              </Suspense>
            </Canvas>
          </CanvasContainer>
        </Container>
        <BlurBlock></BlurBlock>
      </Grid>
    </>
  );
};

export default Hero;
