import React from "react";

import {
  Container,
  HeadBlock,
  HeadTitle,
  AdvantageContainer,
  AdvantageItems,
  AdvantageItem,
  AdvantageTitle,
  AdvantageImg,
  AdvantageDescription,
  Description,
  Types,
  TypesHead,
  Media,
  MediaContainer,
  MediaItemLeft,
  MediaTitle,
  MediaItemCenter,
  MediaItemRight,
} from "./styled-component";

import imageHead from "../../assets/images/implantsHead.png";

import { advantageData } from "./advantage";

import CategoryTypes from "../../components/categoryTypes/categoryType";

const Implants = () => {
  return (
    <Container>
      <HeadBlock>
        <HeadTitle>Implants</HeadTitle>
        <img src={imageHead} alt="imageHead" />
      </HeadBlock>
      <AdvantageContainer>
        <HeadTitle>One connection fits all</HeadTitle>
        <AdvantageItems>
          {advantageData.map((advantage, index) => (
            <AdvantageItem key={index}>
              <AdvantageImg src={advantage.img} alt={advantage.title} />
              <AdvantageTitle>{advantage.title}</AdvantageTitle>
              <AdvantageDescription>
                {advantage.description}
              </AdvantageDescription>
            </AdvantageItem>
          ))}
        </AdvantageItems>
      </AdvantageContainer>
      <Types>
        <TypesHead>
          <HeadTitle>Implant types</HeadTitle>
          <Description>
            The Family Dental Implant System was designed to combine advanced
            engineering, simplicity and flexibility: a single implant system
            that enables and features unique platform switching, a reverse crown
            abutment profile design and uniform internal connection designs (hex
            and conical). Three concepts that together provide an ideal
            restorative solution for various implant needs.
          </Description>
        </TypesHead>
        <CategoryTypes />
      </Types>
      <Media>
        <HeadTitle>Implants</HeadTitle>
        <MediaContainer>
          <MediaItemLeft>
            <MediaTitle>Implants catalog</MediaTitle>
          </MediaItemLeft>
          <MediaItemCenter>
            <MediaTitle>Patient brochure</MediaTitle>
          </MediaItemCenter>
          <MediaItemRight>
            <MediaTitle>Surface brochure</MediaTitle>
          </MediaItemRight>
        </MediaContainer>
      </Media>
    </Container>
  );
};

export default Implants;
