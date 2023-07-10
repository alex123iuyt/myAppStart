import React from "react";
import { NavLink } from "react-router-dom";
import {
  Container,
  CategoryList,
  CategoryItemWrapper,
  CategoryItem,
  CategoryImage,
  CategoryTitle,
} from "./styled-component";

import { categoryData } from "./categoryData";

const ProductCategoryContainer = ({ onCategoryClick }) => {
  const handleCategoryClick = (categoryId) => {
    if (onCategoryClick) {
      onCategoryClick(categoryId);
    }
  };

  return (
    // <Container>
    //   <CategoryList>
    //     <CategoryItemWrapper>
    //       <CategoryItem onClick={() => handleCategoryClick(1)}>
    //         <CategoryImage src="/images/image154-1.png" alt="Image 1" />
    //         <CategoryTitle>Category 1</CategoryTitle>
    //       </CategoryItem>
    //     </CategoryItemWrapper>
    //     <CategoryItemWrapper>
    //       <CategoryItem onClick={() => handleCategoryClick(2)}>
    //         <CategoryImage src="/images/image154-2.png" alt="Image 2" />
    //         <CategoryTitle>Category 2</CategoryTitle>
    //       </CategoryItem>
    //     </CategoryItemWrapper>
    //     <CategoryItemWrapper>
    //       <CategoryItem onClick={() => handleCategoryClick(3)}>
    //         <CategoryImage src="/images/image154-3.png" alt="Image 3" />
    //         <CategoryTitle>Category 3</CategoryTitle>
    //       </CategoryItem>
    //     </CategoryItemWrapper>
    //     <CategoryItemWrapper>
    //       <CategoryItem onClick={() => handleCategoryClick(4)}>
    //         <CategoryImage src="/images/image154-4.png" alt="Image 4" />
    //         <CategoryTitle>Category 4</CategoryTitle>
    //       </CategoryItem>
    //     </CategoryItemWrapper>
    //   </CategoryList>
    // </Container>
    <Container>
      <CategoryList>
        {categoryData.map((category) => (
          <CategoryItemWrapper key={category.id}>
            <CategoryItem onClick={() => handleCategoryClick(category.id)}>
              <NavLink to={category.path}>
                <CategoryImage
                  src={category.img}
                  alt={`Category ${category.id}`}
                />
                <CategoryTitle>{category.title}</CategoryTitle>
              </NavLink>
            </CategoryItem>
          </CategoryItemWrapper>
        ))}
      </CategoryList>
    </Container>
  );
};

export default ProductCategoryContainer;
