import React from "react";
import { NavLink } from "react-router-dom";
import {
  Container,
  CategoryWrapper,
  CategoryItem,
  Title,
  SubTitle,
  Img,
} from "./styled-component";
import { categoryData } from "./categoryImages";

const Category = () => {
  return (
    <Container>
      <Title>Products</Title>
      <CategoryWrapper>
        {categoryData.map((category, index) => (
          <CategoryItem key={index}>
            <NavLink to={category.link} className="category-link">
              <Img src={category.image} alt={`Category ${category.id}`} />
              <SubTitle>{category.title}</SubTitle>
            </NavLink>
          </CategoryItem>
        ))}
      </CategoryWrapper>
    </Container>
  );
};

export default Category;
