import styled from "styled-components";

export const Container = styled.div`
  max-width: 100rem;
  margin: 0 auto;
  margin-top: 10rem;

  @media (min-width: 768px) {
    max-width: 100rem;
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const CategoryWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1.75rem;
  justify-content: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const CategoryItem = styled.li`
  position: relative;
  width: 100%;
  display: flex;
  background-color: #fff;
  transition: transform 0.3s ease-in-out;
  border: 1px solid #fff;
  gap: 3.75rem;
  &:hover {
    transform: scale(0.8);
    transform-origin: center;
    transition: transform 0.5s ease-in-out;
  }
`;

export const Image = styled.img`
  display: flex;
  width: 100%;
`;

export const Title = styled.div`
  font-size: 4rem;
  font-weight: 700;
  line-height: 124%;
  margin-bottom: 4rem;
`;
export const SubTitle = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  margin: 0;
  padding: 0.5rem;
  color: #1e1b1b;
  font-size: 2.25rem;
  font-weight: 700;
  line-height: 124%;
`;
