import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Container,
  ContentLeft,
  ContentRight,
  MidCon,
  Title,
  Description,
  Image,
} from "./styled-component";

import heroImage from "../../assets/images/about.png";

const About = () => {
  const contentLeftRef = useRef(null);
  const contentRightRef = useRef(null);
  const midConRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const contentLeft = contentLeftRef.current;
    const contentRight = contentRightRef.current;
    const midCon = midConRef.current;

    gsap.to(contentLeft, {
      opacity: 1,
      y: 0,
      duration: 1,
      scrollTrigger: {
        trigger: contentLeft,
        start: "top bottom",
        end: "top top",
        scrub: true,
      },
    });

    gsap.to(contentRight, {
      opacity: 1,
      y: 0,
      duration: 1,
      scrollTrigger: {
        trigger: contentRight,
        start: "top bottom",
        end: "top top",
        scrub: true,
      },
    });

    gsap.to(midCon, {
      opacity: 1,
      y: 0,
      duration: 1,
      scrollTrigger: {
        trigger: midCon,
        start: "top bottom",
        end: "top top",
        scrub: true,
      },
    });

    ScrollTrigger.refresh();
  }, []);
  return (
    <Container ref={contentLeftRef}>
      <ContentLeft>
        <Title>Why Family Dental?</Title>
        <Description>
          Family Dental was founded in 1972 as a subsidiary of a metal machine
          workshop and has operated as a medical device company since 1992. With
          over 250 employees worldwide focusing on customer service, education
          and innovation, Family Dental and its team consistently pioneers in
          revolutionary design, development and production of breakthrough
          products that improve medical procedures, elevate the healthcare
          industry and transform everyday lives.
        </Description>
      </ContentLeft>
      <MidCon ref={midConRef}>
        <Image src={heroImage} alt="Image" />
      </MidCon>
      <ContentRight ref={contentRightRef}>
        <Title>Why Family Dental?</Title>
        <Description>
          Family Dental was founded in 1972 as a subsidiary of a metal machine
          workshop and has operated as a medical device company since 1992. With
          over 250 employees worldwide focusing on customer service, education
          and innovation, Family Dental and its team consistently pioneers in
          revolutionary design, development and production of breakthrough
          products that improve medical procedures, elevate the healthcare
          industry and transform everyday lives.
        </Description>
      </ContentRight>
    </Container>
  );
};

export default About;
