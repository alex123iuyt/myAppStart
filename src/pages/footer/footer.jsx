import React from "react";
import {
  Container,
  LeftBlock,
  LeftContent,
  HeadTitle,
  Description,
  FooterDescription,
  Contacts,
  PhoneNumber,
  Socials,
  RightBlock,
  BottomFooter,
  Left,
  Right,
} from "./styled-component";

import createrLogo from "../../assets/images/logo-footer.png";
const Footer = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <Container>
      <LeftBlock>
        <LeftContent>
          <HeadTitle>More questions?</HeadTitle>
          <Description>
            Learn more about Perfect Dental, chat with the team, others in the
            community, and have your say in shaping the future of the company.
          </Description>
        </LeftContent>
        <Contacts>
          <PhoneNumber>+7 767 450 00 22</PhoneNumber>
          <Socials></Socials>
        </Contacts>
      </LeftBlock>
      <RightBlock>
        <form onSubmit={handleSubmit}>
          <div>
            <input id="email" type="text" />
          </div>
        </form>
      </RightBlock>
      <BottomFooter>
        <Left>
          <FooterDescription>© 2014 - 2022 Family Dental</FooterDescription>
          <FooterDescription>Privacy Policy</FooterDescription>
        </Left>
        <Right>
          <FooterDescription>Design & Development</FooterDescription>
          <img src={createrLogo} alt="Creater" />
        </Right>
      </BottomFooter>
    </Container>
  );
};

export default Footer;
