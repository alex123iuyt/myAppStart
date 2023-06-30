import React from "react";
import styled from "styled-components";

const FilledButton = styled.button`
  border: none;
  background-color: #ffffff;
  color: #000000;
  font-size: 16px;
  padding: 10px 20px;
  cursor: pointer;
  transition: background-color 0.3s, border-color 0.3s, color 0.3s;
  border-radius: 8px;

  &:hover {
    background-color: transparent;
    border-color: #ffffff;
    color: #ffffff;
    border: 2px solid #ffffff;
  }
`;

export default FilledButton;
