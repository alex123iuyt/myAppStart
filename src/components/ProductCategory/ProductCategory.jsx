import React from "react";

import {
  Container,
  CategoryList,
  CategoryItemWrapper,
  CategoryItem,
  CategoryImage,
  CategoryTitle,
} from "./styled-component";

const ProductCategoryContainer = () => {
  return (
    <Container>
      <CategoryList>
        <CategoryItemWrapper>
          <CategoryItem>
            <CategoryImage src="/images/image154-1.png" alt="Image 1" />
            <CategoryTitle>Category 1</CategoryTitle>
          </CategoryItem>
        </CategoryItemWrapper>
        <CategoryItemWrapper>
          <CategoryItem>
            <CategoryImage src="/images/image154-2.png" alt="Image 1" />
            <CategoryTitle>Category 1</CategoryTitle>
          </CategoryItem>
        </CategoryItemWrapper>
        <CategoryItemWrapper>
          <CategoryItem>
            <CategoryImage src="/images/image154-3.png" alt="Image 1" />
            <CategoryTitle>Category 1</CategoryTitle>
          </CategoryItem>
        </CategoryItemWrapper>
        <CategoryItemWrapper>
          <CategoryItem>
            <CategoryImage src="/images/image154-4.png" alt="Image 1" />
            <CategoryTitle>Category 1</CategoryTitle>
          </CategoryItem>
        </CategoryItemWrapper>
      </CategoryList>
    </Container>
  );
};

export default ProductCategoryContainer;
