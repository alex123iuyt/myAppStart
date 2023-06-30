import styled from "styled-components";
import { Link } from "react-router-dom";
import ProductCategoryContainer from "../ProductCategory/ProductCategory";

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 1.12rem 4rem;
  backdrop-filter: blur(17.5px);
  background: rgba(61, 56, 56, 0.6);
  border-bottom: 1px solid rgb(73, 73, 73);
  height: 5rem;
  position: sticky;
  top: 0;
  z-index: 1000;

  ul {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 3rem;
    max-width: 100rem;
  }
`;

export const Logo = styled.img`
  width: 100%;
  max-width: 200px;
`;

export const Navigation = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 100rem;
`;

export const Item = styled(Link)`
  cursor: pointer;
  position: relative;
  &:hover {
    color: #12d7c2;
    border-bottom: 1px solid #12d7c2;
    padding-bottom: 1px;
  }
`;

export const Divider = styled.div`
  width: 1px;
  height: 24px;
  background-color: #fff;
`;

export const Language = styled(Link)`
  cursor: pointer;
`;

export const ProductCategoryWrapper = styled.div`
  position: absolute;
  top: calc(100% + 1px);
  left: 0;
  width: 100%;
  display: ${(props) => (props.expanded ? "block" : "none")};
  background: rgba(61, 56, 56, 0.6);
  z-index: 1;
  cursor: pointer;
`;
export const ProductLink = styled(Item)`
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
