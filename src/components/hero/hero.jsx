import React from "react";
import heroImage from "../../assets/images/tooth.png";
import FilledButton from "../buttons/FilledButton";
import TransparentButton from "../buttons/TransparentButton";
import {
  Grid,
  Container,
  TextContainer,
  Title,
  Description,
  ImageContainer,
  Image,
  ButtonContainer,
} from "./styled-component";

import Model from "../box/box";
const Hero = () => {
  return (
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
        <ImageContainer>
          <Model />

          <Image src={heroImage} alt="Image" />
        </ImageContainer>
      </Container>
    </Grid>
  );
};

export default Hero;
