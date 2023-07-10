import React, { useState, useEffect } from "react";

import {
  Container,
  ProductCategoryWrapper,
  Navigation,
  Logo,
  ProductLink,
  Item,
  Divider,
  Language,
} from "./styled-component";

import OutlineButton from "../buttons/OutlineButton";

import ProductCategoryContainer from "../ProductCategory/ProductCategory";

import { NavLink } from "react-router-dom";

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
        <NavLink to="../../pages/Main/">
          <Logo src="/images/Logo.svg" alt="Logo" />
        </NavLink>

        <ul>
          <li>
            <ProductLink onMouseEnter={handleExpand}>Product</ProductLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <Item to="/services">Services</Item>
          </li>
          <Divider />
          <li>
            <Language to="/">En</Language>
          </li>
          <li>
            <OutlineButton to="/login">Login</OutlineButton>
          </li>
        </ul>
      </Navigation>
    </Container>
  );
};

export default Navbar;
