import styled from "styled-components";

export const Container = styled.div`
  margin: 0 auto;
  margin-top: 10rem;
  max-width: 100rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3rem;
  padding: 7.75rem 2rem 4rem;
`;
export const ContentLeft = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;

  padding: 1.5rem 2rem 3.75rem;
  border: 1px solid #494949;
`;
export const ContentRight = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  padding: 1.5rem 2rem 3.75rem;
  border: 1px solid #494949;
`;
export const MidCon = styled.div`
  height: 100%;
`;
export const Image = styled.img`
  height: 100%;
  max-width: 32rem;

  @media (min-width: 768px) {
    width: 30rem;
    height: 33rem;
  }
`;
export const Title = styled.div`
  display: flex;
  width: 100%;

  max-width: 20rem;
  font-size: 2.25rem;
  font-weight: 700;
  line-height: 124%;
`;
export const Description = styled.div`
  display: flex;
  width: 100%;
  max-width: 20rem;
  font-size: 1.25rem;
  font-weight: 400;
  line-height: 2rem;
`;
