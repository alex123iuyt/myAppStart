import Slider from "react-slick";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  margin: 0 auto;
  justify-content: space-between;
  width: 100%;
`;

export const SliderTitle = styled.div`
  font-size: 4rem;
  font-weight: 700;
  line-height: 124%;
`;

export const StyledSlider = styled(Slider)`
  display: flex;
  width: 100%;
  overflow: hidden;
  touch-action: pan-y;
`;

export const SlyderContainer = styled.div`
  display: flex;
  width: 100%;
`;
export const SliderItem = styled.div`
  background-color: transparent;
  border: 1px solid #ccc;
  padding: 2rem 2.25rem;
  width: 100%;
`;

export const Title = styled.h2`
  font-size: 2.25rem;
  font-weight: 700;
  line-height: 124%;
  width: 100%;
`;

export const Description = styled.p`
  display: flex;
  width: 25.5rem;
  font-size: 1.25rem;
  font-weight: 400;
  line-height: 2rem;
`;

export const SliderLogo = styled.img`
  display: flex;

  width: 100%;
  height: 50px;
`;

export const Logo = styled.img`
  width: 100%;
  display: flex;

  height: 50px;
`;
