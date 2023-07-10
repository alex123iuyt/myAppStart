import React from "react";

import {
  Container,
  CategoryWrapper,
  CategoryItem,
  Title,
  Brand,
  Image,
  Description,
} from "./styled-component";

import {categoryData} from "./categoryData";

const CategoryTypes = () => {
  return (
    <Container>
      <Title>Products</Title>
      <CategoryWrapper>
        {categoryData.map((category, index) => (
          <CategoryItem key={index}>
            <Image src={category.img} alt={`category Image ${index + 1}`} />
            <Brand>{category.brand}</Brand>
            <Description>{category.description}</Description>
          </CategoryItem>
        ))}
      </CategoryWrapper>
    </Container>
  );
};
export default CategoryTypes;
