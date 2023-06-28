import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import ProductCategoryContainer from "./ProductCategoryContainer";

const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.12rem 4rem;
  backdrop-filter: blur(17.5px);
  background: rgba(61, 56, 56, 0.6);
  border-bottom: 1px solid rgb(73, 73, 73);
  height: 5rem;
  position: sticky;
  top: 0;

  ul {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 3rem;
  }
`;

const Logo = styled.img`
  width: 100%;
  max-width: 200px;
`;

const Navigation = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
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

const ProductCategoryWrapper = styled.div`
  position: absolute;
  top: calc(100% + 1px);
  left: 0;
  width: 100%;
  display: ${(props) => (props.expanded ? "block" : "none")};
  background: rgba(61, 56, 56, 0.6);
  z-index: 1;
  cursor: pointer;
`;
const ProductLink = styled(Item)`
  position: relative;

  &:hover {
    color: #12d7c2;
    border-bottom: 1px solid #12d7c2;
    padding-bottom: 1px;

    & ~ ${ProductCategoryContainer} {
      display: block;
    }
  }
`;

const Navbar = () => {
  const [expanded, setExpanded] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleExpand = () => {
    setExpanded(true);
  };

  const handleCollapse = () => {
    setExpanded(false);
  };

  const handleScroll = () => {
    const scrollTop = window.pageYOffset;
    setIsScrolled(scrollTop > 0);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <Container isScrolled={isScrolled}>
      <ProductCategoryWrapper expanded={expanded} onMouseLeave={handleCollapse}>
        <ProductCategoryContainer />
      </ProductCategoryWrapper>
      <Navigation>
        <Logo src="/public/images/Logo.svg" alt="Logo" />

        <ul>
          <li>
            <ProductLink onMouseEnter={handleExpand}>Product</ProductLink>
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
