import React from "react";
import {
  Container,
  Title,
  Description,
  LogosContainer,
  LogoWrapper,
  Logo,
} from "./styled-component";
import { logos } from "./logos";

const Partners = () => {
  return (
    <Container>
      <Title>Доверяют ведущим лидерам стоматологической индустрии</Title>
      <Description>
        С более чем 75 сотрудниками в поддержке и обслуживании и более чем 150
        инженерами, Family Dental обеспечивает свои продукты самой сильной
        командой в области 3D-печати.
      </Description>
      <LogosContainer>
        {logos.map((logo, index) => (
          <LogoWrapper key={index}>
            <Logo src={logo} alt={`Логотип партнера ${index + 1}`} />
          </LogoWrapper>
        ))}
      </LogosContainer>
    </Container>
  );
};

export default Partners;
