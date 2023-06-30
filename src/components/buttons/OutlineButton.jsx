import styled from "styled-components";

const OutlineButton = styled.button`
  padding: 0.75rem 2.25rem;
  background-color: transparent;
  border: 2px solid #ffffff;
  color: #ffffff;
  cursor: pointer;
  border-radius: 2rem;
  font-size: 1.125rem;
  &:hover {
    background-color: #ffffff;
    border-color: #ffffff;
    color: #000000;
    border: 2px solid #ffffff;
  }
`;

export default OutlineButton;
