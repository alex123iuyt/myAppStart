import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  width: 100vw !important;
  position: absolute;
  height: 20rem;
  background: rgba(0, 0, 0, 0.66);
`;

const CategoryList = styled.ul`
  display: flex;
  padding: 2rem 4.25rem;
`;

const CategoryItemWrapper = styled.div`
  display: flex;
  height: 100%;
  &:hover {
    border: 1px solid #fff;
  }
`;

const CategoryItem = styled.li`
  display: flex;
  height: 100%;
  background-color: #fff;
  gap: 2rem;
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
