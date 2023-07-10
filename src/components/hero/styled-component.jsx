import styled from "styled-components";
import grid from "../../assets/images/grid.svg";

export const Grid = styled.div`
  background-image: url(${grid});
  background-size: cover;
  background-position: center;
  height: 51rem;
  overflow: hidden;
  margin-bottom: 15rem;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 100rem;
  margin: 0 auto;
  z-index: 1;
  position: relative;
  flex-direction: column;
  padding: 7.75rem 2rem 4rem;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    padding-bottom: 0;
  }
`;

export const TextContainer = styled.div`
  flex: 1;
  text-align: center;

  @media (min-width: 768px) {
    text-align: left;
  }
`;

export const Title = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  line-height: 124%;
  margin-bottom: 1.5rem;

  @media (min-width: 768px) {
    font-size: 4rem;
    margin-bottom: 2rem;
  }
`;

export const Description = styled.p`
  font-size: 1rem;
  line-height: 1.75rem;
  margin-bottom: 2.5rem;

  @media (min-width: 768px) {
    font-size: 1.25rem;
    margin-bottom: 3.5rem;
  }
`;

export const CanvasContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 2rem 0;

  @media (min-width: 768px) {
    padding: 0;
    justify-content: flex-end;
    flex: 1;
  }
`;

export const Image = styled.img`
  width: 100%;

  @media (min-width: 768px) {
    width: 30rem;
    height: 33rem;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: stretch;
  margin-bottom: 2rem;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    margin-bottom: 0;
  }
`;

export const BlurBlock = styled.div`
  width: 100%;
  height: 100px;
  background-color: #1e1b1b;
  position: absolute;
  left: 0;
  bottom: 0;
  filter: blur(18px);
`;
