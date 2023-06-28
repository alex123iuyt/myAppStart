import React from "react";
import styled from "styled-components";

const Container = styled.div`
  left: 0;
  display: flex;
  width: 100vw !important;
  height: 20rem;
  background: rgba(30, 27, 27, 0.6);
  backdrop-filter: blur(17.5px);
  border-bottom: 1px solid rgb(73, 73, 73);
`;

const CategoryList = styled.ul`
  width: 100%;
  padding: 2rem 4.25rem;
`;

const CategoryItemWrapper = styled.div`
  display: flex;
  flex: 1;
  height: 100%;
  border: 1px solid #fff;
`;

const CategoryItem = styled.li`
  display: flex;
  flex: 1;
  background-color: #fff;
  gap: 2rem;
  transition: transform 0.3s ease-in-out;
  &:hover {
    transform: scale(0.8);
    transition: transform 0.5s ease-in-out;
  }
`;

const CategoryImage = styled.img``;

const CategoryTitle = styled.h4`
  margin-top: 0.5rem;
  font-size: 1rem;
  color: #000;
`;

const ProductCategoryContainer = () => {
  return (
    <Container>
      <CategoryList>
        <CategoryItemWrapper>
          <CategoryItem>
            <CategoryImage src="/public/images/image154-1.png" alt="Image 1" />
            <CategoryTitle>Category 1</CategoryTitle>
          </CategoryItem>
        </CategoryItemWrapper>
        <CategoryItemWrapper>
          <CategoryItem>
            <CategoryImage src="/public/images/image154-1.png" alt="Image 1" />
            <CategoryTitle>Category 1</CategoryTitle>
          </CategoryItem>
        </CategoryItemWrapper>
        <CategoryItemWrapper>
          <CategoryItem>
            <CategoryImage src="/public/images/image154-1.png" alt="Image 1" />
            <CategoryTitle>Category 1</CategoryTitle>
          </CategoryItem>
        </CategoryItemWrapper>
        <CategoryItemWrapper>
          <CategoryItem>
            <CategoryImage src="/public/images/image154-1.png" alt="Image 1" />
            <CategoryTitle>Category 1</CategoryTitle>
          </CategoryItem>
        </CategoryItemWrapper>
      </CategoryList>
    </Container>
  );
};

export default ProductCategoryContainer;
