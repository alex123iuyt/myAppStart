import styled, { css } from "styled-components";

export const VideoContainer = styled.div`
  margin: 0 auto;
  margin-top: 10rem;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 24rem; /* Начальная высота блока */
  width: 48rem; /* Начальная ширина блока */
  background-color: #f1f1f1;
  transition: width 0.5s ease-in-out;

  ${(props) =>
    props.isFullWidth &&
    css`
      width: 100vw; /* Ширина на весь экран, когда isFullWidth === true */
      height: 100vh; /* Высота на весь экран, когда isFullWidth === true */
    `}
`;

export const Video = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
