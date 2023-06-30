import React from "react";
import {
  Container,
  CategoryWrapper,
  CategoryItem,
  Title,
  SubTitle,
  Image,
} from "./styled-component";
import { categoryData } from "./categoryImages";

const Category = () => {
  return (
    <Container>
      <Title>Products</Title>
      <CategoryWrapper>
        {categoryData.map((category, index) => (
          <CategoryItem key={index}>
            <Image src={category.image} alt={`Category Image ${index + 1}`} />
            <SubTitle>{category.title}</SubTitle>
          </CategoryItem>
        ))}
      </CategoryWrapper>
    </Container>
  );
};

export default Category;
