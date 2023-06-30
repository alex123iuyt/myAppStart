import styled from "styled-components";

const TransparentButton = styled.button`
  border: none;
  background: transparent;
  color: #ffffff;
  font-size: 1.125rem;

  padding: 10px 20px;
  cursor: pointer;
  transition: background-color 0.3s, border-color 0.3s, color 0.3s;
  border-radius: 2rem;

  &:hover {
    background-color: #ffffff;
    border-color: #ffffff;
    color: #000000;
    border: 2px solid #ffffff;
  }
`;

export default TransparentButton;
