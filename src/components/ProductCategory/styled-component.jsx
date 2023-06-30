import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 20rem;
  background: rgba(30, 27, 27, 0.6);
  backdrop-filter: blur(17.5px);
  border-bottom: 1px solid rgb(73, 73, 73);
  justify-content: center;
  flex: 1;
`;

export const CategoryList = styled.ul`
  width: 100%;
  padding: 2rem 4.25rem;
`;

export const CategoryItemWrapper = styled.div`
  flex: 1;
  height: 100%;
  border: 1px solid #fff;
`;

export const CategoryItem = styled.li`
  background-color: #fff;
  transition: transform 0.3s ease-in-out;
  &:hover {
    transform: scale(0.8);
    transform-origin: center;
    transition: transform 0.5s ease-in-out;
  }
`;

export const CategoryImage = styled.img`
  display: flex;
  height: 14.2rem;
`;

export const CategoryTitle = styled.h4`
  margin-top: 0.5rem;
  text-align: left;
  font-size: 1rem;
  color: #000;
`;
