import React from "react";

import {
  Container,
  HeadAbout,
  HeadTitle,
  Description,
  Content,
  Contacts,
  ContactTitle,
  Adress,
  PhoneNumber,
  Email,
  SocialWrapper,
  SocialItem,
  MapContainer,
} from "./styled-component";

import Map from "./map";

const About = () => {
  return (
    <Container>
      <HeadAbout>
        <HeadTitle>Contact us</HeadTitle>
        <Description>
          Have a question or comment? We’d love to hear from you! Contact us
          using the form below, or send us an email
        </Description>
      </HeadAbout>
      <Content>
        <MapContainer>
        <Map />
        </MapContainer>
        <Contacts>
          <ContactTitle>Contacts</ContactTitle>
          <Adress>56 Nakhimovsky Prospekt. Moscow, Russia, 117335</Adress>
          <PhoneNumber>+7 (495) 242 95 10</PhoneNumber>
          <PhoneNumber>+44 203 769 18 80</PhoneNumber>
          <Email> contact@Perfdent.com</Email>
          <SocialWrapper>
            <SocialItem>1</SocialItem>
            <SocialItem>2</SocialItem>
          </SocialWrapper>
        </Contacts>
      </Content>
    </Container>
  );
};
export default About;
