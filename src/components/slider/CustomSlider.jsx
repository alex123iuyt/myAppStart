import React, { useState } from "react";
import Modal from "./Modal";
import {
  Container,
  SliderTitle,
  StyledSlider,
  SliderItem,
  Title,
  Description,
  Logo,
  SlyderContainer,
} from "./styled-component";
import { logos } from "./logos";

const CustomSlider = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleItemClick = () => {
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };

  return (
    <Container>
      <SliderTitle>We are trusted by</SliderTitle>
      <SlyderContainer>
        <StyledSlider {...sliderSettings}>
          {logos.map((logo, index) => (
            <SliderItem key={index} onClick={handleItemClick}>
              <Title>GE Healthcare </Title>
              <Description>
                “MedExpert LLC has shown the ability to be responsible for the
                tasks set, promptly resolve emerging issues, and cope with work
                of any scope and complexity.”
              </Description>
              <Logo src={logo} alt={`Логотип ${index + 1}`} />
            </SliderItem>
          ))}
        </StyledSlider>
        {modalOpen && <Modal onClose={handleModalClose} />}
      </SlyderContainer>
    </Container>
  );
};

export default CustomSlider;
