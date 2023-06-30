import styled from "styled-components";

export const Container = styled.div`
  max-width: 100rem;
  margin: 0 auto;
`;

export const Title = styled.div`
  text-align: center;
  font-size: 2.25rem;
  font-weight: 700;
`;

export const Description = styled.div`
  text-align: center;
  font-size: 1.25rem;
  font-weight: 400;
  line-height: 2rem;
`;

export const LogosContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  @media (max-width: 768px) {
    justify-content: flex-start;
  }
`;

export const LogoWrapper = styled.div`
  width: calc(100% / 6);
  display: flex;
  justify-content: center;
  margin-bottom: 1.75rem;

  @media (max-width: 768px) {
    width: calc(100% / 3);
  }

  @media (max-width: 480px) {
    width: calc(100% / 2);
  }
`;

export const Logo = styled.img`
  width: 100%;
  max-height: 100px;
`;
