import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import ProductCategoryContainer from "./ProductCategoryContainer";

const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.12rem 4rem;
  backdrop-filter: blur(17.5px);
  background: rgba(30, 27, 27, 0.6);
  border-bottom: 1px solid rgb(73, 73, 73);
  height: 5rem;
  position: relative;
  width: 100%;
`;

const Logo = styled.img`
  width: 100%;
  max-width: 200px;
`;

const Navigation = styled.nav`
  ul {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 3rem;
    position: relative;
  }
`;
const CategoryItemWrapper = styled(Link)`
  cursor: pointer;
`;
const ProductContainer = styled.div`
  position: relative;
  &:hover ${ProductCategoryContainer} {
    visibility: visible;
  }
  &:hover ${CategoryItemWrapper} {
    transform: scale(0.8);
  }
`;

const Item = styled(Link)`
  cursor: pointer;
  position: relative;
  &:hover {
    color: #12d7c2;
    border-bottom: 1px solid #12d7c2;
    padding-bottom: 1px;
  }
`;

const Divider = styled.div`
  width: 1px;
  height: 24px;
  background-color: #fff;
`;

const Language = styled(Link)`
  cursor: pointer;
`;

const Button = styled(Link)`
  padding: 0.75rem 2.25rem;
  background-color: transparent;
  border: 2px solid #ffffff;
  color: #ffffff;
  cursor: pointer;
  border-radius: 2rem;
`;

const Navbar = () => {
  const [expanded, setExpanded] = useState(false);

  const handleExpand = () => {
    setExpanded(true);
  };

  const handleCollapse = () => {
    setExpanded(false);
  };
  return (
    <Container>
      <Logo src="./public/images/Logo.svg" alt="Logo" />
      <Navigation>
        <ul>
          <li>
            <Item>
              <ProductContainer
                onMouseEnter={handleExpand}
                onMouseLeave={handleCollapse}
              >
                Product
                {expanded && <ProductCategoryContainer />}
              </ProductContainer>
            </Item>
          </li>
          <li>
            <Item to="/about">About</Item>
          </li>
          <li>
            <Item to="/services">Services</Item>
          </li>
          <Divider />
          <li>
            <Language to="/">En</Language>
          </li>
          <li>
            <Button to="/login">Login</Button>
          </li>
        </ul>
      </Navigation>
    </Container>
  );
};

export default Navbar;
